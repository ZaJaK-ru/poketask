import styled from "@emotion/styled";

interface PageBtnProps {
  active: boolean;
}

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  gap: 5px;
  align-self: center;
`;

export const PageBtn = styled.a<PageBtnProps>`
  border-radius: 5px;
  padding: 5px;
  color: ${props => (props.active ? 'white' : 'black')};
  background-color: ${props => (props.active ? 'blue' : 'white')};
  cursor: pointer;
`;
