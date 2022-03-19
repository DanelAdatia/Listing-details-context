import { Button } from "@mui/material";
import React, { useState } from "react";

function InformativeArticle({ data }) {
  const [showDetails, setShowDetails] = useState(false);
  const handleDetails = () => {
    setShowDetails(!showDetails);
    console.log(showDetails, "showDetails");
  };

  return (
    <div className="article">
      <h1 className="article__title">{data.title}</h1>
      <Button onClick={handleDetails} variant="contained">
        Details
      </Button>
      <p className={showDetails === true ? "article__desc" : "article_hide"}>
        {data.description}
      </p>
      <span
        className={showDetails === true ? "article__author" : "article_hide"}
      >
        {data.author}
      </span>
      <br />
      <span
        className={showDetails === true ? "article__published" : "article_hide"}
      >
        {data.publishedAt}
      </span>
      <span
        className={showDetails === true ? "article__source" : "article_hide"}
      >
        {data.source.name}
      </span>
    </div>
  );
}

export default InformativeArticle;
