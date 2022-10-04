import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
const user=useSelector(selectUser);
const recentItem=(topic)=>
    (
    <div className="sidebar__recentItem">
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>
   )
    


  return (
    <div className='sidebar'>
<div className="sidebar__top">

    <img src="https://static.vecteezy.com/system/resources/previews/000/597/532/non_2x/vector-abstract-background-blue-and-purple-color-mesh-gradient-patter.jpg" alt="" />
    <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]} </Avatar>
    <h2>{user.displayName}</h2>
    <h4>{user.email}</h4>
</div>

<div className="sidebar__stats">
    <div className="sidebar__stat">
<p>Who viewed you</p>
<p className='sidebar__statNumber'>5,431</p>
    </div>
    <div className="sidebar__stat">
    <p>Views on post</p>
<p className='sidebar__statNumber'>6,631</p>
    </div>

</div>
<div className="sidebar__bottom">
    <p>Recent</p>
    {recentItem("reactJS")}
    {recentItem("Programming")}
    {recentItem("Software Engineering")}
    {recentItem("Design")}
    {recentItem("Developer")}

</div>
    </div>
  )
}

export default Sidebar