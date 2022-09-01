import styled from "styled-components";
import { Link } from "react-scroll";

export const Btn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  white-space: nowrap;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    transition: all 0.2s ease-in-out;
  }
`;
