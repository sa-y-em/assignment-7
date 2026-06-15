import React, { createContext, useState } from 'react';
export const context = createContext()

const AllContext = ({children}) => {
    const [calls , setCalls] = useState([]);
    const [texts , setTexts] = useState([]);
    const [videos , setVideos] = useState([]);

     const callFunction= (obj)=>{
        const present = calls.find(call=> call.id == obj.id ) 
        if (present) {
            alert("exist already")
        }
        else{
            setCalls([...calls,obj])
            console.log(calls);
        }
        console.log(calls);
     }
       
    const data = {
        callFunction,calls,setCalls,
        
      
    }

    return (
        
            <context.Provider value = {data}>
           {children}

            </context.Provider>
       
    );
};

export default AllContext;