import { Link } from "react-router-dom";

const NewsCard = ({ slug, image, title }) => {
  return (
    <Link to={`/haber/${slug}`}>
      <div className="card card-side shadow-sm">
        <figure className="w-36 h-full shrink-0">
          <img className="w-full h-28 object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="text-lg lora-semibold cursor-pointer">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
