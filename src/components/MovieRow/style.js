import styled from "styled-components";

export const MovieRowDiv = styled.div`
margin-bottom: 30px;

h2 {
    margin: 0 0 0 30px;
}

.movieRow__listArea {
    overflow-x: hidden;
    padding-left: 30px;
}

.movieRow__list {
    width: 300%;
}

.movieRow__item {
    display: inline-block;
    width: 150px;
    
    
    img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.25s;
        cursor: pointer;

        :hover {
            transform: scale(1);
        }
    }
}


`