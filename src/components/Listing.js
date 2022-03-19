import React, { useContext, lazy, Suspense } from "react";
import { ContextData } from "./ContextData";
const InformativeArticle = lazy(() => {
  return import("./InformativeArticle");
});

function Listing(props) {
  const { data } = useContext(ContextData);
  console.log(data, "data");

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div>
        <h1 className="head__text">Listing </h1>
        <div className="all__article">
          {data
            ? data.articles.map((article) => (
                <InformativeArticle data={article} key={article.url} />
              ))
            : "Loading"}
        </div>
      </div>
    </Suspense>
  );
}

export default Listing;
