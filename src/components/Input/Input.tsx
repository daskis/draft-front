import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import cls from "./Input.module.scss"
interface IInputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange' | 'value'> {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export const Input: React.FC<IInputProps> = (
    {
        label,
        value,
        onChange,
        ...props
    }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value);
    };

    return (
        <div className={cls.wrapper}>
            <input
                maxLength={5}
                className={cls.input}
                type="text"
                value={value}
                onChange={handleChange}
                {...props}
            />
            <p className={cls.label}>{label}</p>
        </div>
    );
};
