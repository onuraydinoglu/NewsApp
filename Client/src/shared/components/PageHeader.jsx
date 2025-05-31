import Button from "./Button";
import Subtitle from "./Subtitle";

const PageHeader = ({ title, onClick }) => {
  return (
    <div className="flex justify-between">
      <Subtitle>{title}</Subtitle>

      <Button onClick={onClick}>Add {title}</Button>
    </div>
  );
};

export default PageHeader;
