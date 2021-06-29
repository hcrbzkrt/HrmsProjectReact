import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>

            <Menu.Item>
                <Image avatar spaced="right" src=""/>
                <Dropdown pointing="top left" text="Hacer">
                <Dropdown.Menu>
                    <Dropdown.Item text="Your profile" icon="info"/>
                    <Dropdown.Item text="Your applications" icon="hand point right"/>
                    <Dropdown.Item text="Your messages" icon="envelope"/>
                    <Dropdown.Item text="Your curriculum vitae" icon="server"/>
                    <Dropdown.Item text="Settings" icon="setting"/>
                    <Dropdown.Item text="Help" icon="help"/>
                    <Dropdown.Item  onClick={signOut} text="Exit" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}