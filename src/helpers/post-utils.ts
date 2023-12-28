import fs from 'fs'
import path from 'path'
import matter from "gray-matter";

const dirPath = path.join(process.cwd(),'posts-content');
const getPostData = (fileName: string) => {
    const filePath = path.join(dirPath, fileName);
    const fileContent = fs.readFileSync(filePath,'utf-8');

    const {data, content} = matter(fileContent);
    const postSlug = fileName.replace('/\.md$/', ''); //Replace file extension

    return {
        ...data,
        content,
        slug: postSlug
    };
}

export const getAllPosts = () => {
    const allFiles = fs.readdirSync(dirPath);

    return allFiles
        .map((fileName: any) => {
            return getPostData(fileName);
        })
        .sort((postA:any, postB:any) => {
            return postA.date > postB.date ? -1 : 1;
        });
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    return allPosts.filter((post: any) => post.isFeatured);
}