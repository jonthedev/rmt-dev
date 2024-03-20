import { BookmarkFilledIcon } from "@radix-ui/react-icons"
import styles from "./BookmarkIcon.module.css"

export default function BookmarkIcon() {
  return (
    <button className={styles["bookmark-btn"]}>
      <BookmarkFilledIcon className={styles["filled"]} />
    </button>
  )
}
