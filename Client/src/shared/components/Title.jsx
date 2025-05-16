const Title = ({ children }) => {
  return (
    <div className="flex items-center gap-4 mb-5">
      <h2 className="text-3xl lora-semibold whitespace-nowrap">{children}</h2>
      <hr className="flex-grow border-t-4 border-[#5C4D44]" />
    </div>
  );
};

export default Title;
