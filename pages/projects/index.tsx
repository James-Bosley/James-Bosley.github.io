import Head from "next/head";
import Link from "next/link";
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
            <h3 className="mb-4">My Project Porfolio</h3>
            <p>
              Welcome to my project portfolio. This is a collection of just some of the projects I
              have worked on, from my very first creation, up to my most recent, and most
              technologically comprehensive, full stack applications.
            </p>
            <p>
              I really wanted to put a wide range of projects on this site, to showcase my journey
              as much as the destination. It&apos;s easy to look back on many of these now and
              cringe, but that is what development is all about, learn and iterate.
              <br />
              This is truer of my most recent project than the others. If you don&apos;t have time
              to check out more than one piece of my work, this is the one to look at:{" "}
              <Link href="/projects/gochamp">
                <a className="link-info">GoChamp</a>
              </Link>
              .
            </p>
            <p>
              In a way this site itself is also part of my portfolio. It&apos;s a React app
              frameworked with Next.js and aims to implement several of the out-of-the-box features
              which makes next applications so performant. It&apos;s statically generated at build
              time, whilst allowing incremental additions to the dynamic routes on which each
              project can be found.
              <br />
              If you&apos;re interested in finding out more, the{" "}
              <a
                href="https://nextjs.org/"
                rel="noopener noreferrer"
                target="_blank"
                className="link-info"
              >
                Next.js docs
              </a>{" "}
              are a great place to start, and their introductory tutorial is brilliant for getting
              you up and running with a working app in no time.
              <br />I also used Bootstrap to style a site for the first time. Choosing the right
              tools is as important as the implementation. Why waste time on custom styling, or
              anything else for that matter when out of the box is all you need?
            </p>
            <p>
              In terms of next steps for my learning journey, I&apos;ve recently starting using
              TypeScript, and aim to migrate several of my older projects over as soon as possible.
              <br />
              To me, the type-safety is important, and does catch bugs earlier, but the self
              documenting code it produces (is associasion with TSDocs) saves so much time in not
              having to double check your own API data contract, I can no longer live without it!
              <br />
              After that, building up my test writing skills.
              <br />
              After that, gain more experience in back end architecture and try out some No-SQL
              databases.
              <br />
              After that, I haven&apos;t decided yet! Ideas welcomed!
            </p>
            <p>
              Thanks for visiting, and if you found any of these projects interesting, feel free to
              reach out!
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default ProjectsHome;
