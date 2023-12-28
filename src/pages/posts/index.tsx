import Head from 'next/head';
import AllPosts from "@/components/posts/all-posts";
import {DUMMY_POSTS} from "@/pages";
const AllPostsPage = () => {
    return (
        <>
            <Head>
                <title>All Posts</title>
                <meta
                    name='description'
                    content='A list of all programming-related tutorials and posts!'
                />
            </Head>
            <AllPosts posts={DUMMY_POSTS}/>
        </>
    );
}
export default AllPostsPage;