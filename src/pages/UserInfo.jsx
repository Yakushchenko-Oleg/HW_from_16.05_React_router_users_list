import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

let singleUserURL = 'https://jsonplaceholder.typicode.com/users'

const UserInfo = () => {
  const {userId} = useParams()
  const navigate = useNavigate()
  const goBack = () => {navigate(-1)}

  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true);

  const fetchSingleUsrtData = async (url) =>{
    try{
      const resp = await fetch(url)
      const data =  await resp.json()
      setUserData(data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=> {
    fetchSingleUsrtData(singleUserURL.concat('/',userId))
  },[])
  if(isLoading){
    return <h1 className="loader"> Loadung ...</h1>
  }
  return (
    <div className='userInfo'>
      
      <h2>{userData.name}</h2>
      <h3>{userData.email}</h3>
      <h3>{`Username: ${userData.username}`}</h3>
      <p>{`Phone: ${userData.phone}`}</p>
      {
        userData.company &&  <p>{`Company: ${userData.company.name}`}</p>
      }
      {
        userData.address && <p>{`${userData.address.zipcode}, ${userData.address.city}, ${userData.address.street} street, ${userData.address.suite} `}</p>
      }

      <button onClick={goBack}>Back</button>
    </div>
  )
}

export default UserInfo
