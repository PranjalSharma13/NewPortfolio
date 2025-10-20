
import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  margin: 16px 0 32px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.9;
`;

export default function ModalHeader({ children }: { children: React.ReactNode }) {
  return <H2>{children}</H2>;
}
