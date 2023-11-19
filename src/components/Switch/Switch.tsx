import cn from "classnames"
import { useState, useEffect } from "react";
import cls from "./Switch.module.scss"

interface SwitchProps {
    value: boolean;
    onChange: (value: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState<boolean>(value);

    useEffect(() => {
        setIsOpen(value);
    }, [value]);

    const handleToggle = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        onChange(newState);
    };

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
};
