import { Children, createContext, useContext, useState } from 'react';

export const ThemeContext = createContext('light');

// export const ThemeContextProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');
//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
