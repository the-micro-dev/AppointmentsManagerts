import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import DatePicker from 'react-datepicker';

interface FormFieldProps<T> extends UseControllerProps<T> {
    label: string;
    type?: string;
    as?: React.ElementType;
    options?: { value: string; label: string }[];
    className?: string;
    // Make control optional
    control?: any;
}

const FormField = <T,>({
    label,
    type = 'text',
    as: Component = 'input',
    options,
    className,
    control,
    ...props
}: FormFieldProps<T>) => {
    // Determine if the component should use Controller
    const useController = control !== undefined;

    return (
        <div className={`form-field ${className}`}>
            <label>{label}</label>
            {useController ? (
                <Controller
                    name={props.name as string}
                    control={control}
                    render={({ field }) => {
                        if (type === 'date') {
                            return (
                                <DatePicker
                                    selected={field.value}
                                    onChange={(date: Date) => field.onChange(date)}
                                    dateFormat="yyyy/MM/dd"
                                    className="form-input"
                                />
                            );
                        }
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
            ) : (
                <Component type={type} {...props} />
            )}
            {props.errors && <div className="error-message">{props.errors.message}</div>}
        </div>
    );
};

export default FormField;
