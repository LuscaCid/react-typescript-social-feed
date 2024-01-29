import { useState } from 'react';
import styles from './comment.module.css'
import { AiTwotoneLike } from "react-icons/ai";
import { FaTrash } from 'react-icons/fa';
import {IComment} from '../interfaces/posts-comments'

export function Comment (props : IComment) {
  const [displayLikes, setDisplayLikes] = useState(props.countLikes)
  const handleDeleteComment = () => {
    props.onDeleteComment!(props.comment_id)
  }
  return (
    <div className = {styles.container}>
      <img src={props.imgUrl} className = {styles.commentImage}/>
      <div>
        <div className = {styles.commentArea}>
        <div className ={styles.user}>
          <span className= {styles.username}> {props.username}</span>
          <button onClick={handleDeleteComment}><FaTrash size={15}/></button>
        </div>
        <p className = {styles.comment}> {props.content} </p>
      </div> 
        <span>
          <button onClick = {() => 
            {
              setDisplayLikes(prevState => prevState + 1)
            }}>
            <AiTwotoneLike size={20}  />
            Aplaudir
            <span 
              className={styles.likes}
              >{displayLikes > 0 ? displayLikes : 0}
            </span>
          </button>
        </span>
      </div>
      
    </div>

  )
}