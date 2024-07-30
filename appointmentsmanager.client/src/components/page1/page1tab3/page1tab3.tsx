import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormField from '../../../common/FormField'
import './page1tab3.css'

// Define validation schema with Yup
const schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required').min(2, 'Must be at least 2 characters'),
    lastName: Yup.string().required('Last Name is required').min(2, 'Must be at least 2 characters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    age: Yup.number().required('Age is required').min(18, 'Must be at least 18'),
    phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, 'Phone number must be digits only'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip Code is required').matches(/^[0-9]{5}$/, 'Invalid Zip Code'),
    country: Yup.string().required('Country is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required').nullable(),
    gender: Yup.string().required('Gender is required'),
    occupation: Yup.string().required('Occupation is required'),
    company: Yup.string().required('Company is required'),
    website: Yup.string().url('Invalid URL'),
    bio: Yup.string().required('Bio is required'),
    hobby: Yup.string().required('Hobby is required'),
    language: Yup.string().required('Language is required'),
    favoriteColor: Yup.string().required('Favorite Color is required'),
    membership: Yup.boolean().required('Membership status is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    age: number;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
};

const Page1Tab3: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            terms: false,
            membership: false,
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log('Form data', data);
    };

    return (
        <div>
            <section className="upper-section">
                <div style={{ display: "flex" }} >
                    <FormField
                        label="Password"
                        name="password"
                        control={control}
                        errors={errors.password}
                        className="small-input disabled"
                    />
                    <input style={{ height: "27px", marginTop: "20px" }} className="small-input disabled"></input>
                </div>
                <FormField
                    label="Last Name"
                    name="lastName"
                    control={control}
                    errors={errors.lastName} className="disabled"
                />
                <FormField
                    label="Email"
                    name="email"
                    control={control}
                    errors={errors.email} className="disabled"
                />
                <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    control={control}
                    errors={errors.confirmPassword} className="disabled"
                />
            </section>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div style={{ display: "flex" }} >
            <FormField
            className="small-input"
            label="First Name"
            name="firstName"
            control={control}
            errors={errors.firstName}
                />
                <input style={{ height: "27px", marginTop: "20px" }} className="small-input"></input>
                <button style={{ height: "27px", marginTop: "20px" }}>Pick</button>
            </div>
            <FormField
                label="Last Name"
                name="lastName"
                control={control}
                errors={errors.lastName}
            />
            <FormField
                label="Email"
                name="email"
                as="textarea"
                control={control}
                errors={errors.email}
            />
            <div style={{ display: "flex" }} >
            <FormField
                label="Password"
                name="password"
                type="password"
                control={control}
                errors={errors.password}
                className="small-input"
            />
            <input style={{ height: "27px", marginTop: "20px" }} className="small-input"></input>
                <button style={{ height: "27px", marginTop: "20px" }}>Pick</button>
            </div>
            <FormField
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                control={control}
                errors={errors.confirmPassword}
            />

            <FormField
                label="Address"
                name="address"
                as="textarea"
                control={control}
                errors={errors.address}
            />
            <div class="buttons-section">
            <button type="submit">Submit</button>
            <button type="submit">Edit</button>
                <button type="submit">Undo</button>
            </div>
            </form>
        </div>
    );
};

export default Page1Tab3;
