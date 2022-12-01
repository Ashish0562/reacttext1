import React from 'react';
import { useState , useEffect} from 'react';


const Page = () => {

const[data, setdata]=useState("");

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=zwhGmu6aWeLe0arNAsl8tPAI1Bt6yDom--QHtGQYPic").then((res)=>{
    
           console.log(res.json())
          
        }).catch=(e)=>{
            console.log(e);
        }
      }, [])

  const handelsubmit=(e)=>{
      
       console.log();
  }

    
  return (
    <div>
        <h1>React Photo Search</h1>
        <input type="text" name='input' placeholder="search here"/>
        <button type="submit" onClick={handelsubmit}>Search</button>
        <div className='display'>{data}</div>
    </div>
  )
}

export default Page