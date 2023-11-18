import {DetailedHTMLProps, HTMLAttributes, ReactNode, useState} from "react";
import cn from "classnames"
import cls from "./HTag.module.scss"
import IIcon from "@/assets/images/i.svg"
interface IHTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode
    tip?: string
}

export const HTag = ({tip, className, children, ...props}: IHTagProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <h2
            {...props}
            className={cn(className, cls.heading)}>
            {children}
            {tip &&
                <span
                    onMouseEnter={() => {
                        setIsOpen(true)
                    }}
                    onMouseLeave={() => {
                        setIsOpen(false)
                    }}
                    className={cls.tip}>
                <IIcon/>
            </span>
            }
            {isOpen && tip &&
                <p className={cls.tipText}>{tip}</p>
            }
        </h2>
    )
};

