import { useState } from "react";
import { useEffect } from "react";

function Apps(){
    const [resourseType, setResourseType] = useState('posts')

    return(
        <div>
            <button onClick={()=> setResourseType('posts')}>Post</button>
            <button onClick={()=> setResourseType('users')}>users</button>
            <button onClick={()=> setResourseType('comments')}>comments</button>
        </div>
    )
}