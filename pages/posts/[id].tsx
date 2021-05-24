import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

// Return a list of possible value for id
export const getStaticPaths: GetStaticPaths = async () => {
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
export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }
}

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} /> <br />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

