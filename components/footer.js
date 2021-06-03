import utilStyles from '../styles/utils.module.css';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <p className={`${utilStyles.fontBold} ${utilStyles.textCenter}`}>
        Created with Next.js
      </p>
    </footer>
  )
}