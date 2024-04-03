import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://i.pinimg.com/originals/3f/b4/79/3fb479f2c7f23497371f58588edfa19d.jpg"
      />

      <div className={styles.profile}>
        <strong>Kiki</strong>
        <span>Deliver Services</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}
