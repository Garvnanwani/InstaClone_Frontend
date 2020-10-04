import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Auth from "./components/Auth";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";
import Routing from "./Routing";
import GlobalStyle from "./styles/GlobalStyle";

function App() {

  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} closeButton={false} />
      {user ? <Routing /> : <Auth />}
    </StyledThemeProvider>
  );
}

export default App;
