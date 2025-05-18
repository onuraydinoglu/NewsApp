const Subtitle = ({ children, className = "" }) => {
  return <h2 className={`text-2xl lora-semibold mb-5 ${className}`}>{children}</h2>;
};

export default Subtitle;
