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

        if (link.getAttribute("href")?.includes("http")) {
          link.setAttribute("target", "_blank");
        }

        if (link.href.includes("#cheat")) {
          link.addEventListener("click", e => {
            e.preventDefault();
            alert("The authorites have been notified");
          });
        }
      }
    }
  }, [article]);

  // Adds custom classes and attributes to images parsed in markdown file.
  useEffect(() => {
    const images = document.getElementsByTagName("img");
    for (let image of images) {
      if (image.getAttribute("src") && image.src.includes("#image-center")) {
        const src = image.getAttribute("src") || "";
        image.classList.add("rounded", "mx-auto", "d-block", "my-4", "img-fluid");
        image.setAttribute("src", src.replace(/#image-center/, ""));
        image.setAttribute("target", "_blank");
      }
    }
  }, [article]);

  return (
    <div>
      <Head>
        <title>James Bosley | Project Detail</title>
        <meta name="description" content={`Project: ${article.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mb-5">
        <Header pageTitle="Project Collection" noImage />

        <div className="row">
          <ProjectsNav articleList={articleList} currentArticleId={article.id} />

          <article className="col-12 col-md-9 px-4 px-sm-5">
            <h3 className="mb-4">{article.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: article.contentHtml }}></p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ProjectsHome;
