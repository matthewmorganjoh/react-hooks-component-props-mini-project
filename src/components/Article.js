
import React from "react";

function Article({ title, date, preview, minutes }) {
  const formattedDate = date ? date : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <p>{minutes} min read</p>
    </article>
  );
}

export default Article;