import React, { useState } from 'react';
import {
    LoginWrapper,
    LoginCard,
    Title,
    Input,
    Button,
    ErrorMsg
} from './LoginStyles'; 

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = btoa(`${username}:${password}`);

        try {
            const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            });

            if (!res.ok) throw new Error('Invalid credentials or network error');

            const data = await res.json();
            const jessica = data.find(p => p.name === 'Jessica Taylor');

            if (!jessica) throw new Error('Jessica Taylor data not found');

            onLogin(token, jessica);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <LoginWrapper>
            <LoginCard onSubmit={handleSubmit}>
                <Title>Login to Dashboard</Title>
                <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Login</Button>
                <ErrorMsg>{error || '\u00A0'}</ErrorMsg> 
            </LoginCard>
        </LoginWrapper>
    );
}

export default Login;
