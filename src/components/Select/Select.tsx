import React, {createContext, useState} from "react";
import cn from "classnames";
import cls from "./Select.module.scss";
import {PTag} from "@/components";

interface ISelectProps {
    items: {
        label: string;
        value: string;
    }[];
    placeholder?: string;
    onSelect: (value: string) => void;
}

export const SelectProvider = ({children}) => {
    const [openSelect, setOpenSelect] = useState(null);

    return (
        <SelectContext.Provider value={{openSelect, setOpenSelect}}>
            {children}
        </SelectContext.Provider>
    );
};
const SelectContext = createContext({
    openSelect: null,
    setOpenSelect: () => {
    },
});


export const Select: React.FC<ISelectProps> = ({items, placeholder, onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

    const handleItemClick = (item: { label: string; value: string }) => {
        onSelect(item.value);
        setSelectedValue(item.value);
        setIsOpen(false);
    };

    return (
        <div className={cls.wrapper}>
            <div onClick={() => setIsOpen(prevState => !prevState)} className={cls.button}>
                <PTag>{selectedValue ? items.find(item => item.value === selectedValue)?.label :
                    <PTag className={cls.placeholder}>{placeholder}</PTag>}
                </PTag>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"></path>
                </svg>
            </div>
            <ul className={cn(cls.list, {[cls.open]: isOpen})}>
                {items.map((item) => (
                    <li className={cls.item} key={item.value} onClick={() => handleItemClick(item)}>
                        <PTag>{item.label}</PTag>
                    </li>
                ))}
            </ul>
        </div>
    );
};
