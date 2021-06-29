import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button primary >Register</Button>
            <Button primary style={{marginLeft:"0.6em"}} onClick={signIn} >Login</Button>
            </Menu.Item>
        </div>
    )
}