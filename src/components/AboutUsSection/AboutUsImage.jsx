const AboutUsImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/7.png"
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[500px] w-[250px] bg-cyan opacity-5 absolute rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-tl-[20px]"></div>
    </div>
  );
};

export default AboutUsImage;
