import styles from "./container.module.css"
export default function Container({children}) {
    return <div className={styles.parentContainer}>{children}</div>
}