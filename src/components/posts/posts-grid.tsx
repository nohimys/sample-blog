import classes from './posts-grid.module.css';
import PostItem from "@/components/posts/post-item";
const PostsGrid = (props: any) => {
    const { posts } = props;

    return (
        <ul className={classes.grid}>
            {posts.map((post:any) => (
                <PostItem key={post.slug} post={post} />
            ))}
        </ul>
    );
}
export default PostsGrid;