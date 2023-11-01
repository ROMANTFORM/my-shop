import { useContext } from "react";
import { Context } from "../index";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap';
import { FcStumbleupon } from "react-icons/fc";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



const NavBar = observer( () => {

const {user} = useContext(Context);
// console.log(user.isAuth)
const history = useHistory();

    return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink  to={SHOP_ROUTE}><FcStumbleupon style={{width: 60, height: 60}}/></NavLink>
          {user.isAuth ?
            <Nav className="ml-auto">
                <Button 
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
                >
                  Admin
                </Button>
                <Button 
                variant={"outline-light"} style={{marginLeft: 15}}
                onClick={() => history.push(LOGIN_ROUTE)}
                >
                  Enter
                </Button>
            </Nav>
             :
            <Nav className="ml-auto">
                <Button variant={"outline-light"} onClick={() => user.setIsAuth(!user.isAuth)}>Log In</Button>
            </Nav>
          } 
        </Container>
      </Navbar>
    )
});

export default NavBar;