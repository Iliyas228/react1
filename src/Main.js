import React, { useEffect, useState } from 'react'
import "./Main.css"

import Posts from './Posts'

export default function Main(props) {

    const [count, setCount] = useState(0)

    useEffect(()=>{
     setTimeout(()=>{
        setCount(count+1)
     },1000)
    })
    
    return (
        <main>
            <Posts posts= {props.data.posts}/>
        </main>
    )
}
