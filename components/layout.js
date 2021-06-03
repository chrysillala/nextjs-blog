import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

export const name = 'ES6 Notes';
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
      { home ? <Header home /> : <Header />}
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
      <Footer />
    </div>
  )
}