import React from "react";
import {useState} from "react";
import { useHistory } from "react-router";
import { Container, Menu, Icon } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history= useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }
  
  function handleSignIn() {
    setIsAuthenticated(true)
  }





  return (
    <div>
      <Menu inverted fixed="top">
      <Container>
          <Menu.Item name="hire a helper">
            <Icon name="hire a helper" size="large" /> HMRS
          </Menu.Item>
        
          <Menu.Menu position="right">
          <Menu.Item>
          <Menu.Menu position="right">
            {isAuthenticated?<SignedIn signOut={handleSignOut} x="0"/>:<SignedOut signIn={handleSignIn}/>}  
          </Menu.Menu>
          </Menu.Item>
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}