import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function CheckAuth() {
    const navigate = useNavigate()
    const location = useLocation()
    const state = useSelector((state) => state.user)
    // console.log('here')
    useEffect(() => {
        if (
            location.pathname !== '/' &&
            (!localStorage.getItem('token') || !localStorage.getItem('name'))
        ) {
            navigate('/')
        }
    }, [state, location])

    return null
}
export default CheckAuth
