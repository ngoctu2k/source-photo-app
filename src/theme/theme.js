import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
  background:"#fff"
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
  background:"url('https://i.pinimg.com/236x/17/ed/0e/17ed0e7d33e7b6af22738e47f7ef6286.jpg')"
};

export const GlobalStyles = createGlobalStyle`
	body {
		background: ${(props) => props.theme.background};
	}
    .colorMode {
		color: ${(props) => props.theme.fontColor};
        
	}
`;