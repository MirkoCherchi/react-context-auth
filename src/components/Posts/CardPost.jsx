import React from "react";
import { Link } from "react-router-dom";

function CardPost({ title, img, content, category, tags, slug }) {
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p>{content}</p>
      <p>
        <strong>Categoria:</strong> {category}
      </p>
      <div className="tags">
        <strong>Tags:</strong>
        {tags.map((tag) => (
          <span key={tag.id} className="tag">
            {"#"}
            {tag.name}
          </span>
        ))}
      </div>
      <Link className="read-more" to={`/post/${slug}`}>
        Leggi di più
      </Link>
    </div>
  );
}

export default CardPost;
