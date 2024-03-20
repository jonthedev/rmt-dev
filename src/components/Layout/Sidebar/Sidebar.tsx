import styles from "./Sidebar.module.css"
import React from "react"

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return <div className={styles.sidebar}>{children}</div>
}

export const SidebarTop = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["sidebar__top"]}>{children}</div>
}
