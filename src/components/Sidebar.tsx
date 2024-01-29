import { useState } from "react"
import styles from './sidebar.module.css'
import { FaPencilAlt } from "react-icons/fa";

export const Sidebar = () => {
    const [imgUrl, setImgUrl] = useState('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=50&w=502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')


    return (
        <aside 
        className={styles.sidebar}
        >
           <img 
           src={imgUrl} 
           className={styles.cover}
           />
            <div className={styles.profile}>
                <img 
                className={styles.profilePhoto}
                src="https://github.com/luscacid.png" />
                <strong>
                    Lucas Cid
                </strong>
                <span>Fullstack developer</span>
            </div>
            <footer
            className={styles.footer}
            >
                <a href="#">
                    <FaPencilAlt />
                    editar seu perfil
                </a>
            </footer>
        </aside>
    )
}

//https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=50&w=502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D