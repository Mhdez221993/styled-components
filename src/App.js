import "./App.css";
import "./styles.css";

import {
  AnimationLogo,
  DarkButton,
  SubmitButton,
} from "./components/Button/Button.styles";
import StyledButton, { FancyButton } from "./components/Button/Button";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import logo from "./logo.svg";

const theme = {
  dark: {
    primary: "#000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <AnimationLogo src={logo} />

        <StyledButton>Styled Button</StyledButton>
        <div>
          <br />
        </div>

        <StyledButton variant="outlined">Styled Button</StyledButton>

        <div>
          <br />
        </div>

        <FancyButton as="a">Fancy Button</FancyButton>

        <div>
          <br />
        </div>

        <SubmitButton>Submit</SubmitButton>

        <div>
          <br />
        </div>

        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
