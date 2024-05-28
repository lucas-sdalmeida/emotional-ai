'use client'

import { useState } from "react"

export default function CredentialsForm() {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    return (
    <form>
        <div>
            <label htmlFor="username">Username:</label>
            <input 
                type="text" 
                name="username" 
                id="username" 
                value={ username } 
                onChange={ (event) => setUsername(event.target.value) } 
            />
        </div>
        <div>
            <label htmlFor="username">Password:</label>
            <input 
                type="password" 
                name="password"
                id="password"
                value={ password }
                onChange={ (event) => setPassword(event.target.value) }
            />
        </div>
    </form>
)
}

