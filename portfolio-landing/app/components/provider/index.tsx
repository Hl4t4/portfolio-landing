'use client'

import { useState, ReactNode } from "react"
import { LocaleContext } from "../context"

interface LocaleProviderProps {
    children: ReactNode;
}

const LocaleProvider: React.FC<LocaleProviderProps> = ({children}) => {
    const [locale, setLocale] = useState<string>('es')

    return (
        <LocaleContext.Provider value={{locale, setLocale}}>
            {children}
        </LocaleContext.Provider>

    )
}

export default LocaleProvider