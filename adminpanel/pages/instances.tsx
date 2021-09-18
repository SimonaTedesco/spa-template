import type { NextPage } from "next";
import Operators from "../components/operators";

const Instances: NextPage = () => {
  return (
    <div>
      <h1>Instances go here</h1>
      <hr />

      <Operators />

      <a href="#">Some Link</a>
    </div>
  );
};

export default Instances;
