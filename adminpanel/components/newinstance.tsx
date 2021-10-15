import * as React from "react";

type Props = {
  saveInstance: (article: IInstance | any) => void;
};

export const NewInstance: React.FC<Props> = ({
  saveInstance: fnSaveInstance,
}) => {
  const [myState, setMyState] = React.useState<any>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setMyState({
      ...myState,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();

    const stateOk: IInstance = {
      client: "" + myState.client,
      cluster: "ams",
      reseller: "?",
      max_agents: 99,
    };
    fnSaveInstance(stateOk);
  };

  return (
    <form onSubmit={addNewArticle} className="NewInstance">
      <input
        type="text"
        id="client"
        placeholder="Client"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="cluster"
        placeholder="Cluster"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="max_agents"
        placeholder="Max Agents"
        onChange={handleArticleData}
      />

      <button className="form_button" disabled={myState === undefined ? true : false}>
        Add client
      </button>
    </form>
  );
};
