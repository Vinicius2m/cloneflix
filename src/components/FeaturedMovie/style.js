import styled from "styled-components";

export const Featured = styled.section`
height: 100vh;
background-image: url(${props => props.backgroundUrl});
background-size: cover;

    .featured__transparencyY {
        width: inherit;
        height: inherit;
        background: linear-gradient(to top,#111 10% ,transparent 90%);
    }

        .featured__transparencyX {
            width: inherit;
            height: inherit;
            background: linear-gradient(to right,#111 25% ,transparent 75%);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 30px;
            padding-top: 70px;
            padding-bottom: 8%;
        }
            .featured__name {
                font-size: 60px;
                font-weight: bold;
            }
            .featured__info {
                font-size: 18px;
                font-weight: bold;
                margin-top: 15px;
                display: flex;
            }
                .featured__info__points{
                    color: #46d369
                }
                .featured__info__points,
                .featured__info__year{
                    margin-right: 15px;
                }

            .featured__description {
                margin-top: 15px;
                font-size: 20px;
                color: #999;
                max-width: 40%;
            }
            .featured__buttons {
                margin-top: 15px;
            }
                .featured__buttons__watch, .featured__buttons__mylist {
                    font-size: 20px;
                    font-weight: bold;
                    padding: 12px 25px;
                    border-radius: 5px;
                    margin-right: 10px;
                    border: none;
                    transition: all ease 0.2s;

                    :hover {
                        opacity: 0.7;
                    }
                }
                .featured__buttons__watch {
                    background-color: #fff;
                    color: #000;
                }
                .featured__buttons__mylist {
                    background-color: #333;
                    color: #fff;
                }
            .featured__genres {
                margin-top: 15px;
                font-size: 18px;
                color: #999;
            }


`