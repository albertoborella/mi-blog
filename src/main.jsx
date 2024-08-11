import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from '@mui/material';

const theme= createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#004d40',
    },
    secondary: {
      main: '#b500d6',
    },
    background: {
      default: '#fff',
      paper: '#fff'
    },
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
