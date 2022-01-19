import { Form, Button, Container } from 'react-bootstrap'
import { useState } from 'react'
import { auth } from '../utils/firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup } = useAuth()

    const navigate = useNavigate()
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await signup(email, password)
        } catch (error) {
            console.log(error.message)
        }
    }
    
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center w-50" style={{ minHeight: "100vh"}}>
        <Form onSubmit={handleSubmit} className="w-100 border p-4">
        <h2>Register</h2>
        {currentUser && JSON.stringify(currentUser)}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" className="w-100" type="submit">Register</Button>
            <Link to='/login' className="mt-3">Login</Link>
        </Form>
        </Container>
    )
}
