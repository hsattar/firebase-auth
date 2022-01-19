import { Form, Button, Container } from 'react-bootstrap'
import { useState } from 'react'
import { auth } from '../utils/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = async e => {
        e.preventDefault()
        // try {
        //     const credentials = await signInWithEmailAndPassword(auth, email, password)
        //     if (!credentials) throw new Error()
        //     setEmail('')
        //     setPassword('')
        //     navigate('/')
        //     // const token = await credentials.user.getIdToken()
        // } catch (error) {
        //     console.log(error)
        // }
    }
    
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center w-50" style={{ minHeight: "100vh"}}>
        <Form onSubmit={handleSubmit} className="w-100 border p-4">
        <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" className='w-100' type="submit">Login</Button>
            <Link to='/register'>Register</Link>
        </Form>
        </Container>
    )
}
