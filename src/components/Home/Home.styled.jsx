import styled from "styled-components"

export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ListItem = styled.li`
    margin-right: 10px;
    margin-bottom: 20px;
    width: 300px;
    height: 500px;
    &:hover {
        transform: scale(1.05);
        transition-duration: 500ms;
    }
`
export const Title = styled.h1`
    text-align: center;
    margin-top: 50px;
    margin-bottom: 50px;
`