using DemoWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class YourEntityController : ControllerBase
{
    private readonly DevContext _context;

    public YourEntityController(DevContext context)
    {
        _context = context;
    }

    // GET: api/YourEntity
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Person>>> GetAll(int pageNumber = 1, int pageSize = 10)
    {
        var totalRecords = await _context.Persons.CountAsync();
        var items = await _context.Persons
                                   .Skip((pageNumber - 1) * pageSize)
                                   .Take(pageSize)
                                   .ToListAsync();

        Response.Headers.Add("X-Total-Count", totalRecords.ToString());
        return Ok(items);
    }

    // GET: api/YourEntity/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Person>> GetById(int id)
    {
        var entity = await _context.Persons.FindAsync(id);
        if (entity == null)
        {
            return NotFound();
        }
        return Ok(entity);
    }

    // POST: api/YourEntity
    [HttpPost]
    public async Task<ActionResult<Person>> Create(Person entity)
    {
        _context.Persons.Add(entity);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = entity.PersonId }, entity);
    }

    // PUT: api/YourEntity/5
    /*[HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Person entity)
    {
        /*if (id != entity.PersonId)
        {
            return BadRequest();
        }

        _context.Entry(entity).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!YourEntityExists(id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();*/

    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Person personDto)
    {
        if (id != personDto.PersonId)
        {
            return BadRequest("ID mismatch.");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var existingPerson = await _context.Persons.FindAsync(id);
        if (existingPerson == null)
        {
            return NotFound();
        }

        // Update fields selectively based on DTO
        existingPerson.Gender = personDto.Gender;
        existingPerson.IsEmployed = personDto.IsEmployed;
        existingPerson.LastName = personDto.LastName;
        // Update other properties as needed

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!PersonExists(id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }


    // DELETE: api/YourEntity/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var entity = await _context.Persons.FindAsync(id);
        if (entity == null)
        {
            return NotFound();
        }

        _context.Persons.Remove(entity);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    private bool YourEntityExists(int id)
    {
        return _context.Persons.Any(e => e.PersonId == id);
    }
}
