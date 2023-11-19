import cn from "classnames"
import {useState} from "react";
import cls from "./Switch.module.scss"

export const Switch = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div
            onClick={() => setIsOpen(prevState => !prevState)}
            className={cn(cls.wrapper, {
            [cls.open]: isOpen
        })}>
            <span className={cn(cls.dot, {
                [cls.switch]: isOpen
            })}/>
        </div>
    );
};

