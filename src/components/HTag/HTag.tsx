import {DetailedHTMLProps, HTMLAttributes, ReactNode, useState} from "react";
import cn from "classnames"
import cls from "./HTag.module.scss"
import IIcon from "@/assets/images/i.svg"
interface IHTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    children: ReactNode
    tip?: string
    maxWidth?: boolean
}

export const HTag = ({tip, maxWidth, className, children, ...props}: IHTagProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={cn(cls.wrapper, {
            [cls.maxWidth] : maxWidth
        })}>
            <h2
                {...props}
                className={cn(className, cls.heading)}>
                {children}
            </h2>
            {tip &&
                <span
                    onMouseEnter={() => {
                        setIsOpen(true)
                    }}
                    onMouseLeave={() => {
                        setIsOpen(false)
                    }}
                    className={cls.tip}>
                    {isOpen && tip &&
                        <p className={cls.tipText}>{tip}</p>
                    }
                    <IIcon/>
            </span>
            }
        </div>
    )
};

