// Popup.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { PopupProps } from './types';
import './Popup.css'; // Ensure this file exists

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, data, setData }) => {
    if (!isOpen) return null;

    const handleDragEnd = (result: any) => {
        if (!result.destination) return;

        const reorderedData = Array.from(data);
        const [movedRow] = reorderedData.splice(result.source.index, 1);
        reorderedData.splice(result.destination.index, 0, movedRow);
        setData(reorderedData);
    };

    return ReactDOM.createPortal(
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-btn" onClick={onClose}>Close</button>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <table
                            className="popup-table"
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <thead>
                                <tr>
                                    {['name', 'age', 'job', 'city', 'country'].map((column) => (
                                        <th key={column}>
                                            {column.charAt(0).toUpperCase() + column.slice(1)}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <Draggable key={row.id} draggableId={row.id.toString()} index={index}>
                                        {(provided) => (
                                            <tr
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {['name', 'age', 'job', 'city', 'country'].map((column) => (
                                                    <td key={column}>{row[column as keyof RowData]}</td>
                                                ))}
                                            </tr>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </tbody>
                        </table>
                    )}
                </Droppable>
            </div>
        </div>,
        document.body
    );
};

export default Popup;
