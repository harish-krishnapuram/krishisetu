import Hero from "../../../features/home/Hero/Hero";
import Categories from "../../../features/home/Categories/Categories";
import FeaturedProducts from "../../../features/home/FeaturedProducts/FeaturedProducts";
import TodaysDeals from "../../../features/home/TodaysDeals/TodaysDeals";
import PopularFarmers from "../../../features/home/PopularFarmers/PopularFarmers";
import TopProducts from "../../../features/home/TopProducts/TopProducts";
import Reviews from "../../../features/home/Reviews/Reviews";
import Statistics from "../../../features/home/Statistics/Statistics";
import Newsletter from "../../../features/home/Newsletter/Newsletter";

function Home() {
  return (
    <>
      <Hero />

      <Categories />

      <FeaturedProducts />

      <TodaysDeals />

      <PopularFarmers />

      <TopProducts />

      <Reviews />

      <Statistics />

      <Newsletter />
    </>
  );
}

export default Home;