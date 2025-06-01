import { Link } from "react-router-dom";

const NewsCardTextList = ({ data }) => {
  return (
    <ul className="list">
      {data.slice(0, 6).map((item) => (
        <li key={item.id} className="list-row text-lg lora-semibold cursor-pointer">
          <Link to={`/haber/${item._id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsCardTextList;
