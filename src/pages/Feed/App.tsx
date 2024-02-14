import { Post } from "../../components/Post"
import { CiCirclePlus } from "react-icons/ci";
import { Sidebar } from "../../components/Sidebar"
import styles from './app.module.css'
import {useAppContext} from '../../hook/FeedContext' 
import { IAuthorInfo } from "../../interfaces/posts-comments"
import type { FakePosts } from "../../hook/FeedContext"
import * as Dialog from "@radix-ui/react-dialog";
import { NewPostModal } from "./NewPostModal";
function App() {
  const data : FakePosts= useAppContext()
  //my data is posts that main user 
  
  return (
    <>
      
        <div className={styles.wrapper}>
          <nav className={styles.navigator}>
            <div className={styles.create} >
              <Dialog.Root>
                <Dialog.Trigger asChild>
                <button>
                  <CiCirclePlus size={30}/> Criar
                </button>
                </Dialog.Trigger>
                <NewPostModal />
              </Dialog.Root>
              
                
            </div>
            <Sidebar />
          </nav>
          
          <main>
            {
              data.length > 0 ? data.map((post)=> {
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
              }) : (<div className={styles.empty}>Siga alguém para ver posts</div>)
            }
          </main>
      </div>
    
    
    </>
  )
}

export  {App}
