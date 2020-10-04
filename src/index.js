import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FeedProvider } from "./context/FeedContext";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <UserProvider>
    <FeedProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FeedProvider>
  </UserProvider>,
  document.getElementById('root')
);

