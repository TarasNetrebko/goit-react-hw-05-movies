import styled from "styled-components"

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
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