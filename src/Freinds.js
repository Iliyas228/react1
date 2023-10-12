import React from 'react'
import Freind from './Freind'
import "./Freind.css"

export default function Freinds(props) {


  let friends =props.data.friends.map(f => {
  return <Freind login={f.login} name= {f.name}/>
  }
  )
  
  
    return (
    <div>
        {friends}
    </div>
  )
}
