import { TriangleDownIcon } from "@radix-ui/react-icons"
import styles from "./BookmarksButton.module.css"

export default function BookmarksButton() {
  return (
    <section>
      <button className={styles["bookmarks-btn"]}>
        Bookmarks <TriangleDownIcon />
      </button>
    </section>
  )
}
