import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.scss';
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string)
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
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}



// Example of how to import third party lib
/*
import Link from 'next/link';
import Head from 'next/head';
//import Script from 'next/script';

import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}
*/