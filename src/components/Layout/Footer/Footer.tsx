import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <small>
        <p>
          © Copyright by{" "}
          <a href="https://j-dev.online" target="_blank">
            J Dev
          </a>
        </p>
      </small>

      <p>
        <span className="u-bold">109573</span> total jobs available
      </p>
    </footer>
  )
}
