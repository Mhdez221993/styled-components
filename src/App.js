import "./App.css";

import StyledButton, { FancyButton } from "./components/Button/Button";

import { SubmitButton } from "./components/Button/Button.styles";

function App() {
  return (
    <div className="App">
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
