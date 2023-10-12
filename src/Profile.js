import React from 'react'
import "./Profile.css"

export default function Profile(props) {
    return (
        <div>
            <main>
                <div class="div1">
                    <div class="i1">
                        <img src={props.data.url} alt=""/>
                    </div>
                    <div class="d1">
                        <h1>{props.data.name}</h1>
                        <h2>{props.data.age}</h2>
                        <h2>{props.data.born}</h2>
                        <h2>{props.data.sckool}</h2>
                        <a href='https://www.youtube.com/watch?v=2h6dZiGDb3c' target='_blank'>
                            <button class="B8">НАЖМИ НА МЕНЯ</button>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}
