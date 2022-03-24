import React from 'react'
import { GET_ALL_USERS } from '../Graphql/Queries';
import { useQuery } from '@apollo/client'

const ListofUsers = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  return (
    <div>
      {
        loading ? <p>Loading...</p> :
          error ? <p>Error: {error.message}</p> :
            data.getAllUsers.map((user: any) => {
              return <p key={user.id}>{user.name}</p>
            })
      }
    </div>
  )
}

export default ListofUsers;