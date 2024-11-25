
import { useEffect, useState } from "react";
import "./assets/css/confessionlist.css"
import {database,ref,onValue} from "./config/firebase"

 const ConfessionList = () => {
    const [confessionList,setConfessionList]=useState([])
    const monthList=['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec']
    useEffect(()=>{
       onValue(ref(database,"users"),(snapshot)=>{
         let data=snapshot.val();
         let confessionList=[]
         for(let key in data){
            confessionList.push(data[key])
         }
         setConfessionList(confessionList)
       })
    },[])
  return (
   <center> <div className="confession-list">
 {  confessionList.map((confession,i)=>{

   let date=new Date(confession.createdAt)
      return <div className="confession-card" key={i}>
         <div>{`${date.getFullYear()} ${monthList[date.getMonth()]} ${date.getDate()}`}</div>
         <br />
        
         {confession.note}
         <div>
         {/* <Moment fromNow >{date}</Moment> */}
            </div>
         </div>
         
   })}
   </div></center>
  )
}
export default ConfessionList;

