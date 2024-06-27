import { createContext, useState } from "react";

// const [locale, setLocale] = useState<string>('en');


// export const LocaleContext = createContext({locale, setLocale});
export const LocaleContext = createContext<{ locale: string; setLocale: React.Dispatch<React.SetStateAction<string>>}>({ locale: '', setLocale: () => {} });

