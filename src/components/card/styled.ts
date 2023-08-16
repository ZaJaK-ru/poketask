import styled from "@emotion/styled";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  margin: 8px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 5px;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;