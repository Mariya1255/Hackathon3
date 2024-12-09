import React from "react";
import  Header  from "../components/Home/Header";
import HeroBanner from "../components/Home/HeroBanner";
import LeatestProducts from "../components/Home/LatestProducts";
import FeaturedProducts from "../components/Home/FeaturedProduct";
import ShopexOffer from "../components/Home/ShopexOffer";
import UniqueFeatured from "../components/Home/Unique-Featured";
import TrendingProducts from "../components/Home/TrendingProducts";
import Discount from "../components/Home/Discount";
import TopCategories from "../components/Home/TopCategories";
import Newslater from "../components/Home/Newslater";
import Live from "../components/Home/Live";
import Blog from "../components/Home/Blog";
import Footer from "../components/Home/Footer"
import GridDefault from "../components/About/Grid-Default";
import ShopBanner from "../components/About/ShopBanner";
import EcommerceA from "../components/About/Ecommerce-A";
 import EcommerceProducts from  "../components/About/EcommerceProduct"
import Live1 from "../components/About/Live1";
import Footer1 from "../components/About/Footer1";
import Shop from "../components/Contact/Shop";
import Shop1Banner from "../components/Contact/Shop1Banner";
import EcommerceA1 from "../components/Contact/Ecommerce-A1";
import Shop1 from "../components/Contact/Shop1";
import Live2 from "../components/Contact/Live2";
import Footer2 from "../components/Contact/Footer2";
export default function Home() {
  
  return (  

    <div>  
      <Header />
      <HeroBanner />
      <FeaturedProducts />
      <LeatestProducts />
      <ShopexOffer />
      <UniqueFeatured />
      <TrendingProducts />
      <Discount />
      <TopCategories />
      <Newslater />
      <Live />
      <Blog />
      <Footer />
      {/*  2 page */}

      <GridDefault />
      <ShopBanner />
      <EcommerceA />
      <EcommerceProducts />
      <Live1 />
      <Footer1 />
      {/* 3 Page */}
      <Shop />
      <Shop1Banner />
      <EcommerceA1 />
      <Shop1/>
      <Live2 />
      <Footer2 />
    </div>
  );
}


