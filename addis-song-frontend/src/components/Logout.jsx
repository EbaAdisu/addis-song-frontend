/** @jsxImportSource @emotion/react */
import { useDispatch } from 'react-redux'
import { removeUser } from '../features/user/userSlice'
import { LogoutButton } from './Logout.styles'

function Logout() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(removeUser())
    }

    return <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
}

export default Logout
