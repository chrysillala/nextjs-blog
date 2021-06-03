import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';

const name = 'ES6 Notes';
export const siteTitle = 'ES6 Notes';

export default function Layout({ children, home }) {

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      { home ? (
        <header className={`${utilStyles.container} ${styles.header}`}>
          <h1 className={utilStyles.heading5Xl}>{ name }</h1>
          <Link href="/about">
            <a>About</a>
          </Link>
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
      ) }
      <main className={`${utilStyles.container} ${styles.main}`}>
        { children }
      </main>
      { !home && (
        <div className={`${utilStyles.container} ${styles.backToHome}`}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <footer className={`${utilStyles.fontBold} ${utilStyles.textCenter}`}>
        Created with Next.js
      </footer>
    </div>
  )
}