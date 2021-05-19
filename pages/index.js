import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <div className="container">
      <Layout home>
        <Head>
          <title>{ siteTitle }</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p className="title">
            Go to{' '}
            <Link href="/posts/first-post"><a>First Post</a></Link>
          </p>
          <p>Hello hello this is hello</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    </div>
  )
}
