// FormField.tsx
import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

interface FormFieldProps<T> extends UseControllerProps<T> {
    label: string;
    type?: string;
    as?: React.ElementType;
    options?: { value: string; label: string }[];
    className?: string;
}

const FormField = <T,>({
    label,
    type = 'text',
    as: Component = 'input',
    options, className,
    ...props
}: FormFieldProps<T>) => {
    return (
        <div className={`form-field ${className}`}>
            <label>{label}</label>
            <Controller
                name={props.name as string}
                control={props.control}
                render={({ field }) => {
                    if (Component === 'select' && options) {
                        return (
                            <Component {...field}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Component>
                        );
                    }
                    return <Component type={type} {...field} />;
                }}
            />
            {props.errors && <div>{props.errors.message}</div>}
        </div>
    );
};

export default FormField;
