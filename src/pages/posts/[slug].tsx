import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import {getPostData} from "@/helpers/post-utils";

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

export const getStaticProps = (context: any) => {
    const slug = context.params.slug;
    const postDetails = getPostData(slug);

    return {
        props: {
            post: postDetails
        },
        revalidate: 1800
    };
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking'
    };
}

export default PostDetailPage;