import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const context = createContext()

const AllContext = ({children}) => {
    const [calls , setCalls] = useState([]);
    const [texts , setTexts] = useState([]);
    const [videos , setVideos] = useState([]);

     const callFunction= (obj)=>{
        const present = calls.find(call=> call.id == obj.id ) 
        const presentText = texts.find(call=> call.id == obj.id ) 
        const presentVideo = videos.find(call=> call.id == obj.id ) 
        if (present) {
            toast.error(" already added")
        }else if (presentText) {
            toast.error("exist in text")
        }
        else if (presentVideo) {
            toast.error("exist in video")
        }
        else{
            toast.success("successfully added ")
            setCalls([...calls,obj])
            console.log(calls);
        }
        console.log(calls);
     }
     const textFunction= (obj)=>{
        const present = calls.find(call=> call.id == obj.id ) 
        const presentText = texts.find(call=> call.id == obj.id ) 
        const presentVideo = videos.find(call=> call.id == obj.id ) 
        if (presentText) {
            toast.error(" already added")
        }else if (present) {
            toast.error("exist in call")
        }
        else if (presentVideo) {
            toast.error("exist in video")
        }
        else{
            toast.success("successfully added ")
            setTexts([...texts,obj])
            console.log(texts);
        }
        console.log(texts);
     }
     const videoFunction= (obj)=>{
        const present = calls.find(call=> call.id == obj.id ) 
        const presentText = texts.find(call=> call.id == obj.id ) 
        const presentVideo = videos.find(call=> call.id == obj.id ) 
        if (presentVideo) {
            toast.error(" already added")
        }else if (present) {
            toast.error("exist in call")
        }
        else if (presentText) {
            toast.error("exist in text")
        }
        else{
            toast.success("successfully added ")
            setVideos([...videos,obj])
            console.log(videos);
        }
        console.log(videos);
     }
       
    const data = {
        callFunction,calls,setCalls,
        texts,setTexts,videos,setVideos, textFunction ,videoFunction



      
    }

    return (
        
            <context.Provider value = {data}>
           {children}

            </context.Provider>
       
    );
};

export default AllContext;