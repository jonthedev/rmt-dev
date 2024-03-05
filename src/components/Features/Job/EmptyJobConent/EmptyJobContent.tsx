import styles from "./EmptyjobContent.module.css"

export default function EmptyJobContent() {
  return (
    <section className={styles["job-details"]}>
      <div>
        <div className={styles["job-details__start-view"]}>
          <p>What are you looking for?</p>
          <p>
            Start by searching for any technology your ideal job is working with
          </p>
        </div>
      </div>
    </section>
  )
}
