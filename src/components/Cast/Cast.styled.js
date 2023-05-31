import styled from "styled-components";

const CastWrapper = styled.div`
  margin-top: 2rem;
`;

const CastList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CastItem = styled.li`
  display: flex;
  flex-direction:column;
 
`;

const ActorImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  
`;

const PlaceholderImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  
`;

const ActorName = styled.p`
  font-weight: bold;
`;

const ActorRole = styled.p`
  margin-top: 0.5rem;
`;

export const CastStyle = {
    CastWrapper,
    CastList,
    CastItem,
    ActorImage,
    ActorName,
    ActorRole,
    PlaceholderImage
}