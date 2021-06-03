import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Return a list of possible value for id
export async function getStaticPaths() {
  const paths = await getAllPostIds()

  return {
    // `paths` key determines which paths will be pre-rendered
    // this is a dynamic route page, where it uses [] in its filename
    // we get the dynamic route from `params.id` returned by getAllPostIds()

    paths,  // contains all known paths returned by getAllPostIds()
    fallback: false // means other routes should be 404
  }
}

// fetch necessary data to render the post with the given `id`
export async function getStaticProps({params}) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}

export default function Post({postData}) {

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div>
          {postData.image_url && (
            <>
              <Image
                src={postData.image_url}
                alt={postData.title}
                width={600}
                height={400}
                layout='responsive'
              />
              <p className={`${utilStyles.textLightGray} ${utilStyles.textSmall} ${utilStyles.textRight}`}>
                Image taken from <Link href={postData.image_url}><a>Unsplash</a></Link>
              </p>
            </>
          )}
          <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
        </div>
        <div className={utilStyles.textGray}>
          <Date dateString={postData.date} /> <br />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

