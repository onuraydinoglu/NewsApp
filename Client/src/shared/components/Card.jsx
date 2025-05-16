const Card = ({ image, title, content }) => {
  return (
    <div className="card h-full">
      <figure>
        <img className="w-full h-70 object-cover" src={image} alt={title} />
      </figure>
      <div className="card-body px-0">
        <h2 className="text-lg lora-semibold cursor-pointer">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
