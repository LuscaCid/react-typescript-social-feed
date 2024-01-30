
import styles from './sidebar.module.css'
import { FaPencilAlt } from "react-icons/fa";
import { useAuth } from "../hook/AuthContext"
import { IAuthUserContext } from '../interfaces/AuthInterface';

export const Sidebar = () => {
    const UserDataRefToAuth : IAuthUserContext | undefined = useAuth()
    const user = UserDataRefToAuth!.user

    return (
        <aside 
        className={styles.sidebar}
        >
           <img 
                src={user?.banner_img_url} 
                className={styles.cover}
           />
            <div className={styles.profile}>
                <img 
                    className={styles.profilePhoto}
                    src={user?.profile_img_url} />
                <strong>
                    Lucas Cid
                </strong>
                <span>{user.role}</span>
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
