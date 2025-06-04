const SingleContactSocial = ({ Icon, link }) => {
  return (
    <div className="text-2xl h-12 w-12 border border-cyan text-cyan rounded-full p-3 flex items-center justify-center drop-shadow-[0_0_10px_rgba(0,0,255,1)]
          hover:drop-shadow-[0_0_15px_rgba(34,211,238,1)]
          transition-all duration-300">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
};

export default SingleContactSocial;
