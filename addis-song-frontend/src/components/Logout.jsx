import { useDispatch } from 'react-redux'

import { removeUser } from '../features/user/userSlice'

function Logout() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(removeUser())
    }
    return <button onClick={handleLogout}>Logout</button>
}
export default Logout
