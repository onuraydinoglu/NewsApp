import { Link } from "react-router-dom";

const NewsTextList = ({ data }) => {
  return (
    <ul className="list">
      {data.slice(0, 6).map((item) => (
        <li key={item.id} className="list-row text-lg lora-semibold cursor-pointer">
          <Link to={`/haber/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsTextList;
