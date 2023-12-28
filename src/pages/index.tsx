import Head from 'next/head'
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import {getFeaturedPosts} from "@/helpers/post-utils";

export default function Home(props:any) {
  return (
    <>
      <Head>
        <title>Sample Blog</title>
        <meta name="description" content="Sample Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Hero/>
          <FeaturedPosts posts={props.featuredPosts}/>
      </main>
    </>
  )
}

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            featuredPosts: featuredPosts
        }
    };
}
