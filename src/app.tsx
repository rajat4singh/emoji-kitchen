import {
  amber,
  blue,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  teal,
} from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomePage from "./Components/HomePage";

// 🌈
const colors = [
  amber,
  blue,
  cyan,
  deepOrange,
  deepPurple,
  green,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  teal,
];

const theme = createTheme({
  palette: {
    primary: colors[Math.floor(Math.random() * colors.length)],
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Arial', sans-serif",
    h1: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      textTransform: 'none',
    },
  },
});

export default function App() {
  if (window.self === window.top) {
    return (
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    );
  }
}
