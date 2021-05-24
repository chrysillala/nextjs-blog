import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getEndpointData, getSingleData } from '../lib/endpoints';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const apiData = await getEndpointData();
  const singleData = await getSingleData();

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
          <h2>Hello World 🌏</h2>
          <p>
            You can find explanations about some ES6 features on this blog. I don't promise you this will be easy to understand but hopefully you can gain something and I can practice my writing here.
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section>
          <h2>What is ES6?</h2>
          <p>
            ES6 or ECMAScript 6 was the second major revision to JavaScript, which enable us to write more with less code.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, date, title}) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link> <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
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
