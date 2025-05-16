import CarouselSection from "../components/home/CarouselSection";
import LastNewsSection from "../components/home/LastNewsSection";
import CityNewsSection from "../components/home/CityNewsSection";
import CurrencyRates from "../components/home/CurrencyRates";
import WorldNewsSection from "../components/home/WorldNewsSection";

const Home = () => {
  return (
    <>
      <div className="flex gap-6">
        <div className="w-2/3">
          <CarouselSection />
        </div>
        <div className="w-1/3">
          <LastNewsSection />
        </div>
      </div>

      <CurrencyRates />
      <WorldNewsSection />
      <CityNewsSection />
    </>
  );
};

export default Home;
