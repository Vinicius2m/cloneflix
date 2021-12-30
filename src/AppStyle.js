import styled from "styled-components";

export const AppStyle = styled.main`

    .lists {
        margin-top: -8%;
    }

    footer {
        text-align: center;
        width: 100%;

        a {
            color: #e50914;
        }

        .footer__social {
            display: flex;
            justify-content: center;
            gap: 20px;

            a {
                font-size: 45px;
            }
        }
    }

    .loading {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        background-color: #000;
        display: grid;
        place-items: center;
        width: 100%;

            img {
                width: 35%; 
            }
    }
`