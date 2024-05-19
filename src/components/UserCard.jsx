// import React from 'react'

import { Link } from "react-router-dom"

const UserCard = ({user}) => {


  return (
    <div className="userCard">
        <Link to={`/${user.id}`}>{user.name}</Link>
        <p>{`Phone: ${user.phone}`}</p>
    </div>
  )
}

export default UserCard
