import { TriangleDownIcon } from "@radix-ui/react-icons"
import styles from "./BookmarksButton.module.css"
import BookmarksPopover from "../BookmarksPopover/BookmarksPopover"
import { useRef, useState } from "react"
import { useOnClickOutside } from "../../../../lib/hooks"

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false))

  return (
    <section>
      <button
        ref={buttonRef}
        className={styles["bookmarks-btn"]}
        onClick={() => setIsOpen(prev => !prev)}
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  )
}
