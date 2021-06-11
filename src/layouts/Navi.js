import React,{useState} from "react";
import { useHistory } from "react-router";
import { Container, Dropdown, Menu, Icon } from "semantic-ui-react";
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

    const employee =()=>{
    }
   
    const employer =()=>{
    }

    const candidate =()=>{
    }


  return (
    <div>
      <Menu inverted fixed="top">
      <Container>
          <Menu.Item name="hire a helper">
            <Icon name="hire a helper" size="large" /> HMRS
          </Menu.Item>
          <Menu.Item onClick={candidate}>
            <Icon  name="address card outline" size="large" />{" "}
            Candidates{" "}
          </Menu.Item>

          <Menu.Item onClick={employer}>
            <Icon  name="user" size="large" /> Employers{" "}
          </Menu.Item>
          <Menu.Item onClick={employee}>
            <Icon  name="id badge" size="large" />{" "}
            Employees{" "}
            </Menu.Item>
          <Menu.Menu position="right">
            {isAuthenticated?<SignedIn signOut={handleSignOut} x="0"/>:<SignedOut signIn={handleSignIn}/>}  
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}