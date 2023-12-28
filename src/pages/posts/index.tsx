import Head from 'next/head';
import AllPosts from "@/components/posts/all-posts";
import {getAllPosts} from "@/helpers/post-utils";
const AllPostsPage = (props: any) => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts!'
                />
            </Head>
            <AllPosts posts={props.posts}/>
        </>
    );
}

export const getStaticProps = () => {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    };
}

export default AllPostsPage;