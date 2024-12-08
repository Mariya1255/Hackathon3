import React from "react";
import  Header  from "../components/Header";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories"
import Month from "../components/Month";
import HeroBanner from "../components/HeroBanner";
import LeatestProducts from "../components/LatestProducts";
import FeaturedProducts from "../components/FeaturedProduct";
import ShopexOffer from "../components/ShopexOffer";
import UniqueFeatured from "../components/Unique-Featured";
import TrendingProducts from "../components/TrendingProducts";
import Discount from "../components/Discount";
import TopCategories from "../components/TopCategories";
import Newslater from "../components/Newslater";
import Live from "../components/Live";
import Blog from "../components/Blog";
import Footer from "../components/Footer"
import GridDefault from "../components/About/Grid-Default";
import ShopBanner from "../components/About/ShopBanner";
import EcommerceA from "../components/About/Ecommerce-A";
 import EcommerceProducts from  "../components/About/EcommerceProduct"
import Live1 from "../components/About/Live1";
import FooterCopy from "../components/About/FooterCopy";
import Shop from "../components/ShopList/Shop";
import Shop1Banner from "../components/ShopList/Shop1Banner";
import EcommerceA1 from "../components/ShopList/Ecommerce-A1";
import Shop1 from "../components/ShopList/Shop1";
import Live2 from "../components/ShopList/Live2";
import FooterCopy1 from "../components/ShopList/FooterCopy1";
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
      <FooterCopy />
      {/* 3 Page */}
      <Shop />
      <Shop1Banner />
      <EcommerceA1 />
      <Shop1/>
      <Live2 />
      <FooterCopy1 />
    </div>
  );
}


