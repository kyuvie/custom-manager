import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Check, CalendarCheck, GraphUp, Wrench } from "react-bootstrap-icons";
import CheckPage from "../components/checkPage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Custom Manager</title>
        <meta name="description" content="Manage your customs to live healty" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h1>Custom Manager</h1>
          </div>
        </div>
        <CheckPage />
      </main>

      <footer className="container-fluid">
        {/* 4 つボタンを並べる */}
        <div className="row justify-content-center">
          <div className="col-auto">
            <Check size={32} color={"red"} />
          </div>
          <div className="col-auto">
            <CalendarCheck size={25} />
          </div>
          <div className="col-auto">
            <GraphUp size={25} />
          </div>
          <div className="col-auto">
            <Wrench size={25} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
