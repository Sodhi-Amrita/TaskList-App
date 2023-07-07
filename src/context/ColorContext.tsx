import React, { createContext, useState, ReactNode } from 'react'

type ContextProps = {
    color: string,
    changeColor: () => void;
}

export const TextContext = createContext<ContextProps>({
    color: "black",
    changeColor: () => {},

})

type TextProps ={
    children:ReactNode;
}

export const ColorProvider:React.FC<TextProps> = ({children}) => {
    const [color, setColor] = useState("black");

    function changeColor()
    {
        setColor(prev => (prev === 'black' ? 'orange' : 'black'))
    }
  return (
    <TextContext.Provider value={{color, changeColor}}>
        {children}
    </TextContext.Provider>
  )
}

