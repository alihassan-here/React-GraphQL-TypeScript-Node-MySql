import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutation';


const CreateUser = () => {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, { error }] = useMutation(CREATE_USER);

    return (
        <div className="createUser">
            <input type="text" placeholder="name" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="username" value={userName} onChange={e => setUserName(e.target.value)} />
            <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={() => createUser({
                variables: {
                    name,
                    username: userName,
                    password
                }
            })}>Create User</button>
        </div>
    )
}

export default CreateUser;