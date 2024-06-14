// 'use client'
// import React, { createContext, useContext, useState }  from 'react'

// const GlobalContext = createContext();

// export function setGlobalLocale() {
//     const [globalLocale, setLocale] = useState<string>('es');
  
//     return (
//       <GlobalContext.Provider value={{ globalLocale }}>
//         { children }
//       </GlobalContext.Provider>
//     );
//   }

// const GlobalProvider = ({ children }) => {
//     const [globalLocale, setLocale] = useState<string>('es');

//     return (
//         <GlobalProvider.Provider value={{ globalLocale, setLocale }}>
//             {children}
//         </GlobalProvider.Provider>
//     )
// }

// export default GlobalProvider
