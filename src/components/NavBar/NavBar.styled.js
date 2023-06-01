import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #f2f2f2;

`
const LinkWrap = styled(NavLink)`
 margin-right: 10px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: red;
  }

  &.active {
    font-weight: bold;
  }
`

export const NavBarStyle = {
    NavWrap,
    LinkWrap,

}
