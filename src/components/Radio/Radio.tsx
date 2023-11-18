import React, {ChangeEvent} from 'react';
import cls from './Radio.module.scss';
import {PTag} from "@/components";

interface IRadioButtonProps {
    name: string;
    id: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
    text: string;
}

export const Radio = ({name, id, value, onChange, checked, text}: IRadioButtonProps) => {
    return (
        <label htmlFor={id} className={cls.radioLabel}>
            <input
                className={cls.radioInput}
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={cls.customRadio}/>
            <PTag className={cls.text}>
                {text}
            </PTag>
        </label>
    );
};

