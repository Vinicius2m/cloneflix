import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

::-webkit-scrollbar {
    width: 7px;               
}
::-webkit-scrollbar-track {
    background: #111;
    border-radius: 20px;    
}
::-webkit-scrollbar-thumb {
    background-color: #e50914;   
    border-radius: 20px;
}

body {
    background-color: #111;
    color: #fff;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
`