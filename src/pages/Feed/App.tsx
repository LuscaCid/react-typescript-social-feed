import { Post } from "../../comments/Post"
import { Header } from "../../comments/Header"

import { Sidebar } from "../../components/Sidebar"
import styles from './app.module.css'
import {useAppContext} from '../../hook/FeedContext' 
import { IAuthorInfo } from "../../interfaces/post-comments"
import { FakePosts } from "../../database/data"

function App() {
  const data : FakePosts= useAppContext()
  //my data is posts that main user 
  
  return (
    <>
      <Header/>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {data.length > 0 ? data.map((post)=> {
              const authorObject : IAuthorInfo = {
                role : post.author.role,
                userImgUrl : post.author.userImgUrl,
                username : post.author.username
              }
              return (
                <Post
                  key={String(post.description)} 
                  title={post.title}
                  author={authorObject}
                  description={post.description}  
                  comments={post.comments}
                  publishedAt = {post.publishedAt}
                /> 
              )
            }) : (<div className={styles.empty}>Siga alguém para ver posts</div>)}
          </main>
      </div>
    
    
    </>
  )
}

export  {App}
