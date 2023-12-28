import fs from 'fs';
import path from 'path';
import matter from "gray-matter";

const dirPath = path.join(process.cwd(),'posts-content');
export const getPostData = (fileIdentifier: string) => {
    const postSlug = fileIdentifier.replace(/\.md$/, ''); //Replace file extension

    const filePath = path.join(dirPath, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath,'utf-8');

    const {data, content} = matter(fileContent);

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