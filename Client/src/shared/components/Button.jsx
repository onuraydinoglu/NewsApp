const Button = ({ children, className = "", onClick }) => {
  return (
    <button className={`btn btn-accent ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
