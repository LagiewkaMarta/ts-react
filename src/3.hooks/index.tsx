import * as React from "react";

interface Color {
    color?: string,
}

interface Props {
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

export const Ex3:React.FC<Props>= (props) => {
    const [count, setCount] = React.useState<number | null>(8);
    //the same with objects 
    const [color, setColor] = React.useState<Color>({color: "red"});
    
    //useRef
    //hover over the squigglies in ref to see what type we can pass 
    //in case of ref it's <HTMLInputElement>
    const inputRef = React.useRef<HTMLInputElement>(null);
    // setCount(null);
    return (
        //hover over onChange to see what type should be passed from props
       <input value={props.value} ref={inputRef} type="text" onChange={(e) => props.onInputChange(e)}/>

    )
}