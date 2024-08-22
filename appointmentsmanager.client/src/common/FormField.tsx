import React from 'react';

interface FormFieldProps {
    label: string;
    type?: string;
    as?: React.ElementType;
    options?: { value: string; label: string }[];
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
    name: string;
    value: string;
}

const FormField: React.FC<FormFieldProps> = ({
    label,
    type = 'text',
    as: Component = 'input',
    options,
    className,
    onChange,
    ...props
}) => {
    return (
        <div className={`form-field ${className}`}>
            <label>{label}</label>
            {Component === 'select' && options ? (
                <Component {...props} onChange={onChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Component>
            ) : (
                <Component type={type} {...props} onChange={onChange} />
            )}
        </div>
    );
};

export default FormField;
