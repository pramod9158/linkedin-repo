import React from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form >
                        <input type="text" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className="Feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#CBCBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FCI5E" />
                </div>

            </div>

         <Post/>
        </div>

    )
}

export default Feed