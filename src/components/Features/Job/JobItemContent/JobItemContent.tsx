import { useActiveId, useJobItem } from "../../../../lib/hooks"
import Spinner from "../../../Spinner/Spinner"
import BookmarkIcon from "../../Bookmark/BookmarkIcon/BookmarkIcon"
import EmptyJobContent from "../EmptyJobConent/EmptyJobContent"
import styles from "./JobItemContent.module.css"

export default function JobItemContent() {
  const activeId = useActiveId()

  const [jobItem, isLoading] = useJobItem(activeId)

  if (isLoading) {
    return <LoadingJobContent />
  }

  if (!jobItem) {
    return <EmptyJobContent />
  }

  return (
    <section className={styles["job-details"]}>
      <div>
        <img src={jobItem.coverImgURL} alt="#" />

        <a
          className={styles["apply-btn"]}
          href={jobItem.companyURL}
          target="_blank"
        >
          Apply
        </a>

        <section className={styles["job-info"]}>
          <div className={styles["job-info__left"]}>
            <div className={styles["job-info__badge"]}>
              {jobItem.badgeLetters}
            </div>
            <div className={styles["job-info__below-badge"]}>
              <time className={styles["job-info__time"]}>
                {jobItem.daysAgo}d
              </time>

              <BookmarkIcon />
            </div>
          </div>

          <div className={styles["job-info__right"]}>
            <h2 className="second-heading">{jobItem.title}</h2>
            <p className={styles["job-info__company"]}>{jobItem.company}</p>
            <p className={styles["job-info__description"]}>
              {jobItem.description}
            </p>
            <div className={styles["job-info__extras"]}>
              <p className={styles["job-info__extra"]}>
                <i className="fa-solid fa-clock job-info__extra-icon"></i>
                {jobItem.duration}
              </p>
              <p className={styles["job-info__extra"]}>
                <i className="fa-solid fa-money-bill job-info__extra-icon"></i>
                {jobItem.salary}
              </p>
              <p className={styles["job-info__extra"]}>
                <i className="fa-solid fa-location-dot job-info__extra-icon"></i>{" "}
                {jobItem.location}
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
              {jobItem.qualifications.map(qualification => (
                <li key={qualification} className="qualifications__item">
                  {qualification}
                </li>
              ))}
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
              {jobItem.reviews.map(review => (
                <li key={review} className="reviews__item">
                  {review}
                </li>
              ))}
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

function LoadingJobContent() {
  return (
    <section className={styles["job-details"]}>
      <div>
        <Spinner />
      </div>
    </section>
  )
}
