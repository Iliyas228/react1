import React from 'react'
import Post from './post'
import { useState } from 'react'
export default function Posts(props) {

  let text_ref = React.createRef()
  let add_ref = React.createRef()

  

  let [posts_data, setPostsData] = useState(props.posts)
  let [text, setText] = useState("")
  let [postTitle, setTitle] = useState("")
  let [postUrl, setUrl] = useState("")

  function addNewPost(){
    const newPost ={
      id: Date.now(),
      text,
      postTitle,
      url:postUrl
    }
    setPostsData([...posts_data, newPost])
    setText("")
    setTitle("")
    setUrl("")
  }
  function delete_post(post_id){
    setPostsData(posts_data.filter(p =>{
      return p.id != post_id
    }))
  }

  let posts = posts_data.map(p => {
    return <Post title={p.postTitle} text={p.text} url={p.url} id={p.id} delete_post={delete_post} />
  })

  return (
    <div>
      <div className='form'>
        <div className='form-post'>
          <div className='form-input'>
            <input value={postTitle}
              onChange={e => setTitle(e.target.value)} type="text" placeholder='Название поста'>

            </input>
          </div>
          <br></br>
          <div className='form-input'>
            <textarea value={text}
              onChange={e => setText(e.target.value)} type="text" placeholder='Описанине поста' rows="4" cols="60">

            </textarea>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className='form-input'>
            <input value={postUrl}
              onChange={e => setUrl(e.target.value)} type="text" placeholder='Ссылка для поста'>

            </input>
          </div>
          <br></br>
          <br></br>
          <button type="button" onClick={addNewPost}>Отправить</button>
        </div>
      </div>
      {posts}
    </div>
  )
}
