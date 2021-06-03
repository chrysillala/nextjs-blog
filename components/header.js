import styles from './header.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { name } from './layout';

export default function Header({home}) {
  return (
    <>
    {home ? (
      <header className={`${utilStyles.container} ${styles.header}`}>
        <h1 className={utilStyles.heading5Xl}>{ name }</h1>
        <nav className={`${styles.nav}`}>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    ) : (
      <header className={`${styles.header} ${utilStyles.bgYellow} ${utilStyles.sticky}`}>
        <div className={`${utilStyles.container}`}>
          <p className={`${utilStyles.headingLg} ${utilStyles.fontBold}`}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{ name }</a>
            </Link>
          </p>
        </div>
      </header>
    )}
    </>
  )
}