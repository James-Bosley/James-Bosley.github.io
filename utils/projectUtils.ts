import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "projects");

interface MatterResult {
  order: number;
  title: string;
}

export interface ProjectInfo extends MatterResult {
  id: string;
}

export interface Project extends ProjectInfo {
  contentHtml: string;
}

export const getProjectsList = (): ProjectInfo[] => {
  const fileNames = fs.readdirSync(projectsDirectory);

  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as MatterResult),
    };
  });

  return allPostsData.sort(({ order: a }, { order: b }) => a - b);
};

export const getProjectPaths = () => {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map(file => {
    return {
      params: {
        id: file.replace(/\.md$/, ""),
      },
    };
  });
};

export const getProjectData = async (id: string) => {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as MatterResult),
  };
};
