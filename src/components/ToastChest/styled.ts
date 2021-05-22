import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Text = styled.p`
  font-size: medium;
  white-space: pre-wrap;
`;

export const GenerateButton = styled.button.attrs({
  className: "btn btn-light btn-sm",
  type: "submit",
})`
  outline: none;
`;
