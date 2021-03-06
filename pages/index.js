import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
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
          <Image
            priority
            src='https://images.unsplash.com/photo-1558979533-d390b1897d5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
            alt={siteTitle}
            width={600}
            height={400}
            layout='responsive'
          />
          <div>
            <h2 className={`${utilStyles.headingLg}`}>Hello World 🌏</h2>
            <p>
              Welcome to ES6 Notes 📒<br />
              On this blog, you can find explanations on some ES6 features.
            </p>
          </div>
        </section>
        <section>
          <h2 className={utilStyles.headingLg}>What is ES6?</h2>
          <p>
            ES6 or ECMAScript 6 was the second major revision to Javascript, which enable us to write less and do more. It has a lot of new features and new syntaxes to make your code looks more modern, more structured and more readable.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>
            Articles
          </h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, date, title, active}) => ( active &&
              <li className={utilStyles.listItem} key={id}>
                <small className={`${utilStyles.textGray}`}>
                  <Date dateString={date} />
                </small>
                <Link href={`/posts/${id}`}>
                  <a className={`${utilStyles.text2Xl}`}>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        {/* <section>
          <ul>
            {apiData.map(({id, name, email}) => (
              <li key={id}>
                {name} - {email.toLowerCase()}
              </li>
            ))}
          </ul>
          <p>
            { singleData.id } <br />
            <strong>{ singleData.title } </strong><br />
            { singleData.body }
          </p>
        </section> */}
      </Layout>
    </div>
  )
}
