import React, { useState, useEffect } from "react";

// Styles
import { Container, BorderFormContainer, InputContainer } from "./AppStyles";

// Material
import TextField from "@material-ui/core/TextField";
import Typo from "@material-ui/core/Typography";

function App() {
  const [refresh, setRefresh] = useState(true);
  const [code, setCode] = useState("");
  const [borderRadius, setBorderRadius] = useState({
    top_left: 0,
    top_right: 0,
    bottom_right: 0,
    bottom_left: 0
  });

  /**
   * @param {Event} event
   */
  const handleChange = event => {
    let borderRadiusTemp = borderRadius;

    const { id, value } = event.target;

    borderRadiusTemp[id] = `${value}px`;

    setBorderRadius(borderRadiusTemp);
    setRefresh(!refresh);
  };

  useEffect(() => {
    console.log("Update");
  });

  return (
    <Container>
      <InputContainer paddingRight={15}>
        <TextField label="Top Left" id="top_left" onChange={handleChange} />
        <TextField
          label="Bottom Left"
          id="bottom_right"
          onChange={handleChange}
        />
      </InputContainer>

      <BorderFormContainer newRa={borderRadius}>
        <Typo style={{ color: "white" }}>
          {`export const Divborder = styled.div\``}
          <br />
          {`\ border-radius: ${borderRadius.top_left} ${borderRadius.top_right} ${borderRadius.bottom_left} ${borderRadius.bottom_right}\`;`}
        </Typo>
      </BorderFormContainer>

      <InputContainer paddingLeft={15}>
        <TextField label="Top Right" id="top_right" onChange={handleChange} />
        <TextField
          label="Bottom Right"
          id="bottom_left"
          onChange={handleChange}
        />
      </InputContainer>
    </Container>
  );
}

export default App;
