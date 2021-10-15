import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="Homepage">
      <h1 className="header">Operator Manager</h1>
      <p className="paragraph">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br /> sed do eiusmod tempor incididunt ut labore et dolore magna.
        <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
      </p>
      <Link href="/instances">
        <span className="uk-button uk-button-default buttonOverwrite">
          Operators
        </span>
      </Link>
    </div>
  );
};

export default Home;
