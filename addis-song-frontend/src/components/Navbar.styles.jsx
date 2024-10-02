/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { Link as RouterLink } from 'react-router-dom'

export const Nav = styled.nav`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`

export const List = styled.ul`
    display: flex;
    list-style: none;
`

export const ListItem = styled.li`
    margin-left: 20px;
`

export const Link = styled(RouterLink)`
    color: #333;
    text-decoration: none;

    &:hover {
        color: #007bff;
    }
`

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`
