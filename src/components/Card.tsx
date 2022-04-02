import React, {FC, useState} from 'react';

export enum CardVariant {
    primary = "bg-warning",
    dark = "bg-dark",
    succsess = "bg-success"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant,
    // onClick: (num : number) => void
}

const Card: FC<CardProps> = ({width, height, children, variant}) => {
    const [number,setNumber] = useState(0)

    return (
        <div
            className={`${variant}`}
            style={{width, height, background: "yellow"}}
            // onClick={() => onClick(number)}
        >
            {children}
        </div>
    );
};

export default Card;