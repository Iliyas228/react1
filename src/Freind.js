import React, { useState } from 'react'

export default function Freind(props) {
  let like_ref = React.createRef()
  let delete_ref = React.createRef()
  let [likes, setLikes] = useState(0)

  function like(){
    like_ref.current.style.background="blue"
    like_ref.current.style.color="white"
    setLikes(likes + 1)
}
function delete_friend(){
  delete_ref.current.remove()
}

  return (
    <div ref={delete_ref} className='friend'>
        <h1>{props.name}</h1>
        <h2>{props.login}</h2>
        <button className='like' ref={like_ref} onClick={like}>Invite</button>
        <button className='delete_friend' onClick={delete_friend}>Delete</button>
    </div>
  )
  
}


