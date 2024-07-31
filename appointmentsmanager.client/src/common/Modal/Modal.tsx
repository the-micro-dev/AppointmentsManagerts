import React from 'react';
import './Modal.css'; // Import CSS for modal styling

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    title: string;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, title, children }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <button className="modal-close" onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
