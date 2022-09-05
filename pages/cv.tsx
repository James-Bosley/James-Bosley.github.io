import Head from "next/head";
import Header from "../components/Header";
import { NextPage } from "next";

const CV: NextPage = () => {
  return (
    <div>
      <Head>
        <title>James Bosley | Web Developer</title>
        <meta name="description" content="CV Content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <Header pageTitle="CV" />

        <div className="row my-4">
          <iframe className="col-9 mx-auto border rounded" src="/CV.json" height="450px"></iframe>
        </div>

        <div className="row my-4 justify-content-center">
          <div className="col-2 text-center">
            <a href="/CV.pdf" target="_blank" className="btn btn-primary">
              Download PDF
            </a>
          </div>
          <div className="col-2 text-center">
            <a href="/CV.json" target="_blank" className="btn btn-primary">
              Download JSON
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CV;
