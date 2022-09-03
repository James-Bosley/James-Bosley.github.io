import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>James Bosley | Web Developer</title>
        <meta name="description" content="Portfolio Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Header home />

        <section>
          <div className="row my-4">
            <div className="col text-center">
              <Link href="/cv">
                <a className="btn btn-primary fs-5">View CV</a>
              </Link>
            </div>
          </div>

          <div className="row my-4">
            <div className="col text-center">
              <Link href="/projects">
                <a className="btn btn-primary fs-5">View Projects</a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
