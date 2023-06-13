import {useState} from "react";
import { useNavigate } from "react-router-dom";
import const FormLogin =() => {
    const [username, setUsername] = useState(' ');
    const [password, setPassword] = useState(' ') ;
    const navigate = useNavigate();
    const Login = () => {
        if (username === 'admin' && password ==='admin') {
            navigate('/');
            return;
        }
        alert(`Username atau password salah`);
    }
    return <div>
            <input 
            type="text"
            value={username}
            onChange={({ target: {value} }) => setUsername(value)}
            placeholder="Username"/><br/>
            <input 
            type="password"
            value={password}
            onChange={({ target: {value} }) => setPassword(value)}
            placeholder="password"/><br/>
            <button onClick={login}>Login</button>
           
}