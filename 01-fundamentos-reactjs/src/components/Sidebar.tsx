import { Avatar } from "./Avatar"
import { PencilLine } from "@phosphor-icons/react"
import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        alt="coverimage"
        src="https://images.unsplash.com/photo-1622446555437-bd11e97ae93f?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/lhine.png" />

        <strong>Aline Gouveia</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
