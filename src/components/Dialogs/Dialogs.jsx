import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import clasess from "./Dialogs.module.css"
import Message from "./Messages/Messages";

const Dialogs = (props) => {

 

  let addMessage = function(){
    
    props.addMessage()

  }
  let onMessageChange = (e) =>{
 
    let text = e.target.value
    props.onMessageChange(text)

  }

  let dialogsElements =  props.dialogsPage.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    
  let messageElements = props.dialogsPage.messages.map ( msg => <Message msg={msg.msg}/>)

  return (
   <div className={clasess.content}>
        <div className={clasess.dialogs}>
          <div className={clasess.dialogsItems}>
            { dialogsElements }
          </div> 
          <div className={clasess.messages}>
            { messageElements }
          </div>
          <div className={clasess.addMessage}>
            <div><textarea onChange={onMessageChange} placeholder="Сообщение" value={props.dialogsPage.newMessageText}></textarea></div>
            <div> <button onClick={addMessage}>add</button></div>
          </div>
        </div>
   </div>
  )
}

export default Dialogs;