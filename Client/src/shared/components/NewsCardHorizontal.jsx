import { Link } from "react-router-dom";

const NewsCardHorizontal = ({ data }) => {
  return (
    <Link to={`/haber/${data.slug}`}>
      <div className="card card-side shadow-sm">
        <figure className="w-36 h-full shrink-0">
          <img className="w-full h-28 object-cover" src={data.image} alt={data.title} />
        </figure>
        <div className="card-body">
          <h2 className="text-lg lora-semibold cursor-pointer">{data.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default NewsCardHorizontal;
