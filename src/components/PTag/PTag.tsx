import cls from "./PTag.module.scss"
import cn from "classnames"
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

interface IPTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode
}

export const PTag = (
    {children, className, ...props}: IPTagProps) => {
    return (
        <p
            {...props}
            className={cn(cls.paragraph, className)}
        >
            {children}
        </p>
    );
};

