import styled from "styled-components";

export const MovieRowDiv = styled.div`
margin-bottom: 30px;
:hover .movieRow__left, :hover .movieRow__right {
    opacity: 1;
}
    h2 {
        margin: 0 0 0 30px;
    }

    .movieRow__left, .movieRow__right {
        position: absolute;
        width: 40px;
        height: 225px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;
    }

    .movieRow__left {
        left: 0;
    }

    .movieRow__right {
        right: 0;
    }

    .movieRow__listArea {
        overflow-x: hidden;
        padding-left: 30px;
    }

    .movieRow__list {
        width: ${props => props.itemsLen * 150}px;
        margin-left: ${props => props.scrollX}px;
        transition: all ease 0.5s;
    }

    .movieRow__item {
        display: inline-block;
        width: 150px;
        height: 229px;    
        
        img {
            width: 100%;
            height: 100%;
            transform: scale(0.9);
            transition: all ease 0.25s;
            cursor: pointer;

            :hover {
                transform: scale(1);
            }
        }
}

@media screen and (max-width: 1023px) {
    .movieRow__left, .movieRow__right {
        opacity: 1;
    }
}

`