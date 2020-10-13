import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import Routing from "./Routing";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} closeButton={false} />
      <Routing />
    </StyledThemeProvider>
  );
};

export default App;
