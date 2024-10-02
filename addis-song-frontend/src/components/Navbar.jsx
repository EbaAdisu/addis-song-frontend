/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Logout from './Logout'
import CheckAuth from './CheckAuth'
import AddSong from '../pages/AddSong'
import { Nav, List, ListItem, Link, RightSection } from './Navbar.styles'

function Navbar() {
    return (
        <Nav>
            <List>
                <ListItem>
                    <Link to="/home">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/my-songs">My Songs</Link>
                </ListItem>
                <ListItem>
                    <Link to="/add-song">Add Song</Link>
                </ListItem>
            </List>
            <RightSection>
                <CheckAuth />
                <Logout />
            </RightSection>
        </Nav>
    )
}

export default Navbar
