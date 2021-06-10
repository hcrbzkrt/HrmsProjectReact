import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://resimarama.net/karakalem-kedi/"/>
                <Dropdown pointing="top left" text="Hacer">
                <Dropdown.Menu>
                    <Dropdown.Item text="Your profile" icon="info"/>
                    <Dropdown.Item text="Your applications" icon="info"/>
                    <Dropdown.Item text="Your messages" icon="info"/>
                    <Dropdown.Item text="Your curriculum vitae" icon="info"/>
                    <Dropdown.Item text="Exit" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
