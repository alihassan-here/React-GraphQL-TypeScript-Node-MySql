import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries';
import { useQuery, useMutation } from '@apollo/client';
import { DELETE_USER } from '../Graphql/Mutation';


const ListofUsers = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  const [deleteUser] = useMutation(DELETE_USER);


  return (
    <div>
      {
        loading ? <p>Loading...</p> :
          error ? <p>Error: {error.message}</p> :
            data.getAllUsers.map((user: any) => {
              return (
                <div key={user.id}>
                  <h1>{user.name}</h1>
                  <h2>{user.username}</h2>
                  <button onClick={() => deleteUser({ variables: { id: user.id } })}>Delete</button>
                </div>
              )
            })
      }
    </div>
  )
}

export default ListofUsers;