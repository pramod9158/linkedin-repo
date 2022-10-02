import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import { SettingsInputCompositeSharp } from '@mui/icons-material';
import {db} from "./firebase"
import firebase from 'firebase/compat/app';


function Feed() {
    const [input, setInput] = useState()
    const [posts, setposts] = useState([]);

useEffect(()=>{
    db.collection("posts").onSnapshot((snapshot)=>
    setposts(
        snapshot.docs.map((doc)=>(
            {
              id:doc.id,
              data:doc.data(),

            }))
    ))
},[]);


const sendPost=(e)=>{
e.preventDefault();
db.collection('posts').add({
    name:'Pramod Patil',
    description:'this is a test',
    message:input,
    photoUrl:'',
    timestamp:firebase.firestore.FieldValue.serverTimestamp()
})

};

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input value={input} onChange ={e=>setInput(e.target.value)} type="text" />
                        <button onClick={sendPost}  type='submit'>Send</button>
                    </form>
                </div>
                <div className="Feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#CBCBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FCI5E" />
                </div>

            </div>
            {posts.map(({id,data:{name,description,message,photoUrl }} ) => (
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            />
))} 
      
      
        </div>

    )
}

export default Feed