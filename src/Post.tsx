/**  
 * eu poderia tipar as props
 * 
 * interface Props {
 *  children : React.node
 *  title : string
 *  setState : React.dispatch<setStateAction<'o nome do tipo da variavel usestate'>>
 * }
 * 
*/
/**
 * import {AppContext} from 'path-to-app-context.jsx'
 * const userData = useContext(AppContext)
 * output ==> url user info, name, posts
 */

//eu poderia receber um array de objetos com os comments os perfis das pessoas
//que comentaram, como nome e o url da imagem de avatar no objeto pra renderizar
import { IoIosSend } from "react-icons/io";
import { Comment } from "./components/Comment";
import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import styles from './post.module.css'
import { ChangeEvent, useState } from "react";
import { IComment } from "./interfaces/posts-comments";
import {IPost} from './interfaces/posts-comments'
import { FormEvent } from "react";
import { IAuthorInfo } from "./interfaces/posts-comments";
export const Post = ({author, title, description, comments, publishedAt} : IPost<IAuthorInfo>) => {
    
    const [thisPostComments, setThisPostComments] = useState<IComment[]>(comments)
    const [commentText, setCommentText] = useState('')
    const formattedPublishedAt = format(publishedAt, "d 'de' LLLL 'às' HH:MM'h'", {
        locale : ptBR, 
    })   
    const relativeDateFormattedFromNow = formatDistanceToNow(publishedAt, {
        addSuffix :true,
        locale: ptBR
    }) 

    const handleCreateNewComment = (e : FormEvent) => {//e.target refer to the form onSubmit
        e.preventDefault()
       
        if(!commentText)return 
        else {
        const commentObject : IComment = {//object generated to appears in frontend instantly that came from useAuth
            comment_id : Math.round(Math.random() * 10000),
            username : "usuario q está logado",
            imgUrl : "https://github.com/luscacid.png",
            content : commentText,
            countLikes : Math.round(Math.random() * 40)
        }
       
        setThisPostComments((prevState : IComment []) => [...prevState, commentObject])
        setCommentText('')
        }
        //at least its only save in database this comment
    }

    const deleteComment = (comment_id: number) => {
        console.log(`id do comentario deletado: ${comment_id}`)
        const filteredCommentsAfterDeletedOne = thisPostComments.filter((comment: IComment) => comment.comment_id !== comment_id)
        setThisPostComments(filteredCommentsAfterDeletedOne)
        
    }
    const handleChangeInputValueAlsoCommentText = (event : ChangeEvent<HTMLInputElement>) => {
        setCommentText(event.target.value)
    }

    return (
       <article className={styles.article}>
            <header>
                 <div className={styles.userInfo}>            
                    <img 
                        src={author.userImgUrl} 
                        className={styles.userImg}
                    />
                    <div className={styles.userDisplayNames}>
                        <strong className={styles.username}> {author.username} </strong>
                        <span className={styles.userStack}> {author.role} </span>
                    </div>
                </div>  
                <time 
                title={formattedPublishedAt}
                dateTime = '2022-05-12'>{relativeDateFormattedFromNow}</time>  
            </header>
           
           <main className={styles.main}>
                <h2>{title}</h2>
                <p>{description}</p>
                
           </main>
            <label htmlFor="commentInput">Deixe seu feedback</label>
            <form 
                onSubmit={e => handleCreateNewComment(e)}
                className= {styles.formMessage}
            >
                <input
                    onChange = {handleChangeInputValueAlsoCommentText}
                    value={commentText}
                    type="text" 
                    id='commentInput'
                    placeholder = 'Type a message here...' 
                    
                    required
                />
                <button disabled = {commentText.length===0}>
                    <IoIosSend size={20}/>
                </button>  
            </form>
            <section>
                Comments
            </section>
            {thisPostComments.length > 0 ? thisPostComments.map((comment : IComment) => {
                return (
                    <Comment 
                        key={String(comment.comment_id)} 
                        comment_id = {comment.comment_id}        
                        username={comment.username}
                        imgUrl={comment.imgUrl}
                        content={comment.content}
                        countLikes={ comment.countLikes}
                        onDeleteComment = {deleteComment}
                    />
                )
            }) : (<div className={styles.firstComment}>Seja o primeiro a comentar</div>)}
       </article>
    )
}