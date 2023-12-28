import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import {DUMMY_POSTS} from "@/pages";

const PostDetailPage = (props:any) => {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name='description' content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post} />
        </>
    );
}

export function getServerSideProps(){
    return {
        props: {
            post:{
                ...DUMMY_POSTS[0],
                content: '# This is a first post.'
            }
        }
    };
}

export default PostDetailPage;