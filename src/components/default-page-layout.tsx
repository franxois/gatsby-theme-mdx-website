import React from "react";
import { Grommet } from "grommet";

const theme = {
  global: {
    colors: { brand: "#294674", text: { light: "#FF0000" } },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

export default ({ children }) => <Grommet theme={theme}>{children}</Grommet>;
