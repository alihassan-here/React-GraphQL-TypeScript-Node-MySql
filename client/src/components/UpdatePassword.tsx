import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { UPDATE_PASSWORD } from '../Graphql/Mutation';
const UpdatePassword = () => {
    const [username, setUsername] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

    return (
        <div>
            <h1>UpdatePassword</h1>
            <input type="text" placeholder="Username..." value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            <button onClick={() => updatePassword({
                variables: {
                    username,
                    currentPassword,
                    newPassword
                }
            })}>Update Password</button>
        </div>
    )
}

export default UpdatePassword;