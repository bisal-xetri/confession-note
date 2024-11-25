import { useState } from "react";
import "./assets/css/confession.css";
import { FaLock } from "react-icons/fa";
import {v4 as uuidv4} from "uuid"
import {database as db,set,ref} from "./config/firebase"
import { ToastContainer,toast } from "react-toast";
export const Confession = () => {
  const [text, setText] = useState("");
  const addConfession = () => {
    //query
    if(text){
        set(ref(db, 'users/' + uuidv4()), {
           note:text,
           createdAt:Date.now()
          }).then((err)=>{

            if(!err){
                toast.success("Confession Added")
                setText("")
            }else{
                toast.error("Could't add Confession Note",err)
            }
          });
    }
  };
  return (
    <div className="confession-main">
      Confession Note
      <div className="confession-div">
        <textarea
          placeholder="Write a confession"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={10}
          cols={40}
        ></textarea>
        <button className="create-btn" onClick={() => addConfession()}>
          Confess
        </button>
      </div>
      <div>
        <FaLock style={{ fontSize: "9px", marginRight: "3px" }} />
        <small style={{ fontSize: "10px" }}>
          confessed Note remain for 24 hours.
        </small>
        <ToastContainer delay={2000}/>
      </div>
    </div>
  );
};
