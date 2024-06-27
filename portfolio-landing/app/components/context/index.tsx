import { createContext, useState } from "react";

export const LocaleContext = createContext<{ locale: string; setLocale: React.Dispatch<React.SetStateAction<string>>}>({ locale: '', setLocale: () => {} });

