import styled from "styled-components";
import { Link } from "react-router-dom";

const MovieDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

const MovieImage = styled.img`
  width: 250px;
`;

const MovieInfo = styled.div`
  margin-left: 20px;
`;

const MovieTitle = styled.h1`
  margin-top: 0;
`;
const MovieAdition = styled.div`
display:flex;
flex-direction: column;
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

`
const StyleSubtitle = styled.p`
font-weight:bold;
`
const StyledLink = styled(Link)`
  margin-bottom: 10px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: blue;
  }
`;
export const MovieDetailStyle = {
    MovieDetailsContainer,
    MovieImage,
    MovieInfo,
    MovieTitle,
    MovieAdition,
    StyledLink,
    StyleSubtitle

}