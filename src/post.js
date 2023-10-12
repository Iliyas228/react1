import React, { useState } from 'react'

export default function Post(props) {

    let like_ref = React.createRef()
    
    let [likes, setLikes] = useState(0)

    let dislike_ref = React.createRef()

    
    
    function like(){
        like_ref.current.style.background="red"
        like_ref.current.style.color="white"
        setLikes(likes + 1)
    }
    function dislike(){
        dislike_ref.current.style.background="black"
        dislike_ref.current.style.color="white"
        if(likes>0){
            setLikes(likes - 1)
        }
    }

    


    return (
        <div className='post'>
            <h1>{props.title}</h1>
            <img src={props.url} alt="" width={300} height={400} />
            <h3>Описание:
                <br />

                {props.text}
            </h3>
            <h5>Likes: {likes}</h5>
            <button className='like' ref={like_ref} onClick={like}>Like</button>
            <button className='dislike' ref={dislike_ref} onClick={dislike}>Dislike</button>
            <button className='delete_post' onClick={()=>{  props.delete_post(props.id)  }}>Delete</button>
        </div>
    )
}
