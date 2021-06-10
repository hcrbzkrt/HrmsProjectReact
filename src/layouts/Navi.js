import React from "react";
import { Button, Container, Dropdown, Menu, Icon } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

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
            <SignedOut/>
            <SignedIn/>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}