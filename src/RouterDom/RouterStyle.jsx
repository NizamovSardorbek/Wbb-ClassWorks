import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WrapNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;

export const Wrap = styled(NavLink)`
  margin-top: 40px;
  font-size: 38px;
  text-decoration: none;
  color: black;
  transition: all 0.4s;
`;
