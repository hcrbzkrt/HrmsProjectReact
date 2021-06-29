import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical>
        <Menu.Item as={Link} to={"/jobadvertisements"}>
            <Icon name="list" />
            Job Advertisement       
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"}>
            <Icon name="factory" />
            Employers       
        </Menu.Item>

        <Menu.Item as={Link} to={"/candidates"}>
          <Icon name="user" />
          Candidates
        </Menu.Item>

        <Menu.Item as={Link} to={"/cvs"}>
          <Icon name="wordpress forms" />
          Cvs
        </Menu.Item>
      </Menu>
    </div>
  );
}