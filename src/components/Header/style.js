import styled from "styled-components";

export const HeaderElement = styled.header`
position: fixed;
z-index: 2;
top: 0;
left: 0;
right: 0;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
background-color: ${props => props.black ? "#111" : "transparent"};
transition: all ease 0.3s;


    .header__logo {
        height: 35px;

        img {
            height: 100%;
        }
    }

    .header__user {
        height: 35px;

        img {
            height: 100%;
            border-radius: 3px;
        }
    }
`