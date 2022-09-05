import Head from "next/head";
import Header from "../../components/Header";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getProjectsList,
  ProjectInfo,
  Project,
  getProjectData,
  getProjectPaths,
} from "../../utils/projectUtils";
import ProjectsNav from "../../components/ProjectsNav";
import { useEffect, useRef } from "react";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getProjectPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articleList = getProjectsList();
  const article = await getProjectData(params?.id as string);
  return {
    props: {
      articleList,
      article,
    },
  };
};

interface Props {
  articleList: ProjectInfo[];
  article: Project;
}

const ProjectsHome: NextPage<Props> = ({ articleList, article }) => {
  // Adds custom classes and attributes to links (anchor tags) parsed in markdown file.
  useEffect(() => {
    const links = document.getElementsByTagName("a");
    for (let link of links) {
      if (link.getAttribute("href") && link.href.includes("#link-info")) {
        const href = link.getAttribute("href") || "";
        link.classList.add("link-info");
        link.setAttribute("href", href.replace(/#link-info/, ""));
        link.setAttribute("target", "_blank");
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <title>James Bosley | Project Detail</title>
        <meta name="description" content={`Project: ${article.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Header pageTitle="Project Collection" noImage />

        <div className="row">
          <ProjectsNav articleList={articleList} currentArticleId={article.id} />

          <article className="col-9 px-5">
            <h3 className="mb-4">{article.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: article.contentHtml }}></p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ProjectsHome;
