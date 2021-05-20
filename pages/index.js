import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getEndpointData, getSingleData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const apiData = await getEndpointData();
  const singleData = await JSON.parse(getSingleData());

  return {
    props: {
      allPostsData,
      apiData,
      singleData
    }
  }
}

export default function Home({allPostsData, apiData, singleData}) {
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
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                {title} <br />
                {date} <br />
                {id}
              </li>
            ))}
          </ul>
          <ul>
            {apiData.map(({id, name, email}) => (
              <li key={id}>
                {name} - {email.toLowerCase()}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p>
            { singleData.id } <br />
            <strong>{ singleData.title } </strong><br />
            { singleData.body }
          </p>
        </section>
      </Layout>
    </div>
  )
}
