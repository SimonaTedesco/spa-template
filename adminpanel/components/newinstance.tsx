import * as React from "react";

type Props = {
  saveInstance: (article: IInstance | any) => void;
};

export const NewInstance: React.FC<Props> = ({ saveInstance }) => {
  const [article, setArticle] = React.useState<IInstance | {}>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveInstance(article);
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Instance"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Ciao"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Add instance
      </button>
    </form>
  );
};
