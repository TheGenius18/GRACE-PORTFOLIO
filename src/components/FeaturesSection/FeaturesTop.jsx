import FeaturesTopLeft from "./FeaturesTopLeft";
import FeaturesTopMiddle from "./FeaturesTopMiddle";
// import FeaturesTopRight from "./FeaturesTopRight"; // Uncomment if you plan to use it

const FeaturesTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center mb-[100px]">
      <FeaturesTopMiddle />
      <FeaturesTopLeft />
      {/* <FeaturesTopRight /> */}
    </div>
  );
};

export default FeaturesTop;
