import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    padding: 20% 10%;

  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 700px;
    padding: 10%;
    background-color: #e28df7;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 1px grey;
  }

  .fake-link {
    font-weight: bold;
    color: #fcd526;
  }
`;
