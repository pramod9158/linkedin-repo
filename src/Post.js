import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'

function Post({name,discription,message,photourl }) {
  return (
    <div className='post'>
        <div className="post__header">
<Avatar/>
<div className="post__info">
    <h2>Pramod Patil</h2>
    <p>Discription</p>
</div>

        </div>


<div className="post__body">
    <p>Message goes here</p>
</div>
    </div>
  )
}

export default Post