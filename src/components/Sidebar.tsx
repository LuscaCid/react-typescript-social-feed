
import styles from './sidebar.module.css'
import { FaPencilAlt } from "react-icons/fa";
import { useAuth } from "../hook/AuthContext"

export const Sidebar = () => {
    const UserDataRefToAuth = useAuth()

    console.log(UserDataRefToAuth)

    return (
        <aside 
        className={styles.sidebar}
        >
           <img 
                src={UserDataRefToAuth?.banner_img_url} 
                className={styles.cover}
           />
            <div className={styles.profile}>
                <img 
                    className={styles.profilePhoto}
                    src={UserDataRefToAuth?.profile_img_url} />
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
