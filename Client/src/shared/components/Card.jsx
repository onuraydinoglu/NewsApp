import { Link } from "react-router-dom";

const Card = ({ id, image, title, content }) => {
  return (
    <Link to={`/haber/${id}`}>
      <div className="card h-full">
        <figure>
          <img className="w-full h-70 object-cover" src={image} alt={title} />
        </figure>
        <div className="card-body px-4">
          <h2 className="text-lg lora-semibold cursor-pointer">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
