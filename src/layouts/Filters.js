import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function Filters() {
  return (
    <div>
      <Dropdown item text = "Your application">
        <Dropdown.Menu>
        <Dropdown.Item>aaa</Dropdown.Item>
        <Dropdown.Item>bbb</Dropdown.Item>
        <Dropdown.Divider/>
        <Dropdown.Item as={NavLink} to="/application">Application</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}