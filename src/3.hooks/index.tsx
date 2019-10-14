import * as React from "react";

export const Ex3:React.FC = () => {
    const [count, setCount] = React.useState<number | null>(8);
    //the same with objects 
    const [color, setColor] = React.useState<{color: string}>({color: "red"});
    setCount(null);
    return (
        <p></p>
    )
}