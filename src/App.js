import "./App.css";
import "./styles.css";

import { AnimationLogo, SubmitButton } from "./components/Button/Button.styles";
import StyledButton, { FancyButton } from "./components/Button/Button";

import logo from "./logo.svg";

function App() {
  return (
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
    </div>
  );
}

export default App;
