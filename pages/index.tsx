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
      </Head>

      <main className="container">
        <Header home />

        <section className="row my-4 justify-content-center">
          <div className="col-9 col-sm-4 col-lg-2 text-center mb-4">
            <Link href="/projects">
              <a className="btn btn-primary fs-5">Projects</a>
            </Link>
          </div>

          <div className="col-9 col-sm-4 col-lg-2 text-center">
            <Link href="/cv">
              <a className="btn btn-primary fs-5">View CV</a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
