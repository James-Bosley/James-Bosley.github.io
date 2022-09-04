import Head from "next/head";
import Header from "../../components/Header";
import { GetStaticProps, NextPage } from "next";
import { getProjectsList, ProjectInfo } from "../../utils/projectUtils";
import ProjectsNav from "../../components/ProjectsNav";

export const getStaticProps: GetStaticProps = () => {
  const articleList = getProjectsList();
  return {
    props: {
      articleList,
    },
  };
};

interface Props {
  articleList: ProjectInfo[];
}

const ProjectsHome: NextPage<Props> = ({ articleList }) => {
  return (
    <div>
      <Head>
        <title>James Bosley | Projects</title>
        <meta name="description" content="Web Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Header pageTitle="Project Collection" />

        <div className="row">
          <ProjectsNav articleList={articleList} />

          <article className="col-9 px-5">
            This is an introduction to my projects - a bit about me, a word on the journey.
          </article>
        </div>
      </main>
    </div>
  );
};

export default ProjectsHome;
