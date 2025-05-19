import { Link } from "react-router-dom";

const NewsCardVertical = ({ data }) => {
  return (
    <Link to={`/haber/${data.slug}`}>
      <div className="card h-full">
        <figure>
          <img className="w-full h-70 object-cover" src={data.image} alt={data.title} />
        </figure>
        <div className="card-body px-4">
          <h2 className="text-lg lora-semibold cursor-pointer">{data.title}</h2>
          <p>{data.content}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCardVertical;
