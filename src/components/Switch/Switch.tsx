import cn from "classnames"
import { useState, useEffect } from "react";
import cls from "./Switch.module.scss"

interface SwitchProps {
    value: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean
}

export const Switch: React.FC<SwitchProps> = ({ value, disabled=false, onChange }) => {
    const [isOpen, setIsOpen] = useState<boolean>(value);

    useEffect(() => {
        setIsOpen(value);
    }, [value]);

    const handleToggle = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        onChange(newState);
    };
    if (!disabled) {
        return (
            <div
                onClick={handleToggle}
                className={cn(cls.wrapper, {
                    [cls.open]: isOpen
                })}
            >
            <span className={cn(cls.dot, {
                [cls.switch]: isOpen
            })}/>
            </div>
        );
    } else {
        return (
            <div
                className={cn(cls.wrapper, {
                })}
            >
            <span className={cn(cls.dot, {
                [cls.switch]: isOpen
            })}/>
            </div>
        );
    }
};
