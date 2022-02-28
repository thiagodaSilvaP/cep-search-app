import React, {createContext, useState} from 'react';

export const apiContext = createContext()

export const ApiProvider = ({children}) => {
    const [data, setData] = useState(undefined);
    return (
        <apiContext.Provider value={{data, setData}}>
            {children}
        </apiContext.Provider>
    )
}
