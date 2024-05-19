// import React from 'react'

import { useEffect, useState } from "react"
import UserCard from "../components/UserCard"
let url = 'https://jsonplaceholder.typicode.com/users'

const Users = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const fetchUsers = async (url) => {
          try{
            let resp = await fetch(url)
            let usersData = await resp.json()
            setUsers(usersData)
        } catch (error) {
            console.log(error);
        } finally {
      setIsLoading(false);
    }
  
    }

    useEffect(() =>{
        fetchUsers(url)
    },[])

  if(isLoading){
    return <h1 className="loader"> Loadung ...</h1>
  }

  return (
    <div className="usersContainer"> 
      
      {
        users && users.map(user => <UserCard user={user} key={user.id}/>)
      }
    </div>
  )
}

export default Users
