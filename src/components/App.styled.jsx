import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const NavigationLink = styled(NavLink)`
    margin-right: 20px;
    font-size: 20px;
    font-weight: 700;
    &.active {
        color: #36b5e7;
    }
`
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    padding: 20px 40px;
    margin-bottom: 20px;
    box-shadow: 0px 6px 5px -1px rgba(0,0,0,0.6);
`