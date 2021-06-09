import React from "react";
import { Menu,Input } from "semantic-ui-react";

export default function Filters() {
  return (
    <div>
      <Menu vertical>
      <Menu.Item
          name='Cities'
        >
          Cities
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search Cities...' />
        </Menu.Item>
        <Menu.Item
          name='Job Title Lists'

        >
         Job Title Lists
        </Menu.Item>

 
      </Menu>
    </div>
  );
}