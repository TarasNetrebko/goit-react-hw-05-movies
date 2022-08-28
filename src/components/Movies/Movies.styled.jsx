import styled from "styled-components"

export const StyledButton = styled.button`
    background-color: white;
    color: black;
    cursor: pointer;
    &:hover,
    &:focus {
        border-color: white;
        color: white;
        background-color: #36b5e7;
    }
`
export const StyledForm = styled.form`
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: center;
`
export const StyledInput = styled.input`
    margin-right: 10px;
    margin-left: 10px;
`
export const Container = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`