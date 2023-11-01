import React, { useContext, useState } from "react";
import {NavLink, useLocation} from 'react-router-dom';
import { Button, Card, Container, Form } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Auth = observer( () => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {user} = useContext(Context)
    
    const click = async () => {
        try{
          let data;
        if(isLogin){
            data = await login(email, password);
            return data
        } else {
            data = await registration(email, password);
            return data
        }
        user.setUser(user);
        user.setIsAuth(true); 
        history.push(SHOP_ROUTE);
        } catch(e) {
            alert(e.response.data.message)
        }
        
        
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600, backgroundColor: '#263435'}} className="p-5">
                <h2 className="m-auto" style={{color: "#f1f1f1"}}>{isLogin ? "Log In" : "Sign Up"}</h2>
                <Form className="d-flex flex-column" >
                    <Form.Control 
                    className="mt-4" 
                    placeholder="Enter email..."
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />
                    <Form.Control 
                    className="mt-2" 
                    placeholder="Enter password..."
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type="password"
                    />
                    <div style={{color: "#f1f1f1"}} className="d-flex justify-content-between align-items-center mt-4">
                        {isLogin ?
                         <div>no account? <NavLink to={REGISTRATION_ROUTE}>Sign Up</NavLink></div>
                         :
                         <div>have account? <NavLink to={LOGIN_ROUTE}>Log In</NavLink></div>
                        }
                        <Button onClick={click}  variant="success">{isLogin ? "Log in" : "Sign Up"}</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
});

export default Auth;