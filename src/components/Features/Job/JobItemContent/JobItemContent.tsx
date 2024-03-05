import BookmarkIcon from "../../Bookmark/BookmarkIcon/BookmarkIcon"
import styles from "./JobItemContent.module.css"

export default function JobItemContent() {
  return (
    <section className={styles["job-details"]}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1610374792793-f016b77ca51a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1272&q=100"
          alt="#"
        />

        <a
          className={styles["apply-btn"]}
          href="https://fictional9thtechwebsite.com/"
          target="_blank"
        >
          Apply
        </a>

        <section className={styles["job-info"]}>
          <div className={styles["job-info__left"]}>
            <div className={styles["job-info__badge"]}>9T</div>
            <div className={styles["job-info__below-badge"]}>
              <time className={styles["job-info__time"]}>2d</time>

              <BookmarkIcon />
            </div>
          </div>

          <div className={styles["job-info__right"]}>
            <h2 className="second-heading">Front End React Engineer</h2>
            <p className={styles["job-info__company"]}>9th Tech</p>
            <p className={styles["job-info__description"]}>
              Join us as we pursue our disruptive new vision to make machine
              data accessible, usable, and valuable to everyone.
            </p>
            <div className={styles["job-info__extras"]}>
              <p className={styles["job-info__extra"]}>
                <i className="fa-solid fa-clock job-info__extra-icon"></i>
                Full-Time
              </p>
              <p className={styles["job-info__extra"]}>
                <i className="fa-solid fa-money-bill job-info__extra-icon"></i>
                $105,000+
              </p>
              <p className={styles["job-info__extra"]}>
                <i className="fa-solid fa-location-dot job-info__extra-icon"></i>{" "}
                Global
              </p>
            </div>
          </div>
        </section>

        <div className={styles["job-details__other"]}>
          <section className={styles["qualifications"]}>
            <div className={styles["qualifications__left"]}>
              <h4 className={styles["fourth-heading"]}>Qualifications</h4>
              <p className={styles["qualifications__sub-text"]}>
                Other qualifications may apply
              </p>
            </div>
            <ul className={styles["qualifications__list"]}>
              <li className={styles["qualifications__item"]}>React</li>
              <li className={styles["qualifications__item"]}>Next.js</li>
              <li className={styles["qualifications__item"]}>Tailwind CSS</li>
            </ul>
          </section>

          <section className={styles["reviews"]}>
            <div className={styles["reviews__left"]}>
              <h4 className={styles["fourth-heading"]}>Company reviews</h4>
              <p className={styles["reviews__sub-text"]}>
                Recent things people are saying
              </p>
            </div>
            <ul className={styles["reviews__list"]}>
              <li className={styles["reviews__item"]}>
                Nice building and food also.
              </li>
              <li className={styles["reviews__item"]}>
                Great working experience.
              </li>
            </ul>
          </section>
        </div>

        <footer className={styles["job-details__footer"]}>
          <p className={styles["job-details__footer-text"]}>
            If possible, please reference that you found the job on{" "}
            <span className="u-bold">rmtDev</span>, we would really appreciate
            it!
          </p>
        </footer>
      </div>
    </section>
  )
}
