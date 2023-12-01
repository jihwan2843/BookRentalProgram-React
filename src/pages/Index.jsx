import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bestSellerData = [
  { name: "트렌드코리아" },
  {
    name: "지리의힘",
  },
  { name: "총균쇠" },
  {
    name: "코스모스",
  },
];

const Index = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex justify-center items-center">
        <div className="h-[500px] w-[700px] mx-auto flex flex-row">
          <h2 className="w-1/4 font-bold text-2xl text-center pt-20">
            베스트 셀러
          </h2>
          <div className="w-3/4 flex justify-center items-center">
            <div>
              <img
                className="w-80"
                src={`./images/${bestSellerData[0].name}.jpeg`}
                alt="bestSeller"
              />
            </div>

            <div>
              <img
                className="w-80"
                src={`./images/${bestSellerData[1].name}.jpeg`}
                alt="bestSeller"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
