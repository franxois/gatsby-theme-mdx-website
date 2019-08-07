import React from "react";
import styled from "styled-components";

const Div = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.global.colors.brand};
  border: 2px solid ${props => props.theme.global.colors.brand};
`;

const BrandBorder = ({ children }) => <Div>{children}</Div>;

export default BrandBorder;
