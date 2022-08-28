import styled from 'styled-components'

export const ReviewContainer = styled.li`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const PostContainer = styled.div`
    padding: 20px;
    width: 200px;
`
export const ContentContainer = styled.div`
    width: calc(100% / 1.5);
    padding: 20px 40px;
    text-align: center;
`
export const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
`
export const Content = styled.p`
    font-style: italic;
`