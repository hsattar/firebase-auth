import { Button } from 'react-bootstrap'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebaseConfig'


export default function Index() {

    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await signOut(auth)
            console.log('Signed Out')
            navigate('/login')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <h2>Hello User</h2>   
            <Button variant="danger" onClick={handleLogout} >Logout</Button>
        </>
    )
}
