const NewsCard = ({ image, title }) => {
  return (
    <div className="card card-side shadow-sm">
      <figure>
        <img className="w-full h-28 object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="text-lg lora-semibold cursor-pointer">{title}</h2>
      </div>
    </div>
  );
};

export default NewsCard;
