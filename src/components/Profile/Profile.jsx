import React from 'react';
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from './MyPost/MyPostsContainer';



const Profile = (props) => {
    

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )


}

export default Profile;