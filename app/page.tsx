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
import GridDefault from "../components/grid Default/Grid-Default";
import ShopBanner from "../components/grid Default/ShopBanner";
import EcommerceA from "../components/grid Default/Ecommerce-A";
import EcommerceProducts from  "../components/grid Default/EcommerceProduct"
import Live1 from "../components/grid Default/Live1";
import Footer1 from "../components/grid Default/Footer1";
import Shop from "../components/Shop List/Shop";
import Shop1Banner from "../components/Shop List/Shop1Banner";
import EcommerceA1 from "../components/Shop List/Ecommerce-A1";
import Shop1 from "../components/Shop List/Shop1";
import Live2 from "../components/Shop List/Live2";
import Footer2 from "../components/Shop List/Footer2";
import ShopLeft from "../components/Shop Left Sidebar/ShopLeft";
import ShopLeftbanner from "../components/Shop Left Sidebar/ShopLeft-banner";
import EcommerceB from "../components/Shop Left Sidebar/Ecommerce-B";
import MainLayout from "../components/Shop Left Sidebar/MainLayout";
import Live3 from "../components/Shop Left Sidebar/Live3";
import Footer3 from "../components/Home/Footer";
import Detail from "../components/Product detail/Detail";
import Detailbenner from "../components/Product detail/Detail-banner";
import ProductDetail from "../components/Product detail/Product-Detail";
import Description from "../components/Product detail/Description";
import DetailProducts from "../components/Product detail/DetailProduct";
import Live4 from "../components/Product detail/Live4";
import Footer4 from "../components/Product detail/Footer4";
import Cart from "../components/Shopping Cart/Cart";
import CartBanner from "../components/Shopping Cart/Cart-Banner";
import ShoppingCart from "../components/Shopping Cart/Shopping Cart";
import Footer5 from "../components/Shopping Cart/Footer5";
import Order from "../components/Order Complete/Order";
import Orderbanner from "../components/Order Complete/Order-banner";
import OrderCompleted from "../components/Order Complete/CompleteOrder";
import Live5 from "../components/Order Complete/Live5";
import Footer6 from "../components/Order Complete/Footer6";
import Demo from "../components/Demo/Demo";
import Demobanner from "../components/Demo/Demo-banner";
import ShippingCheckout from "../components/Demo/ShippingCheckOut";
import Footer7 from "../components/Demo/Footer7";
import Account from "../components/Account/Account";
import Accountbanner from "../components/Account/Account-banner";
import LoginForm from "../components/Account/LoginForm";
import Live6 from "../components/Account/Live6";
import Footer8 from "../components/Account/Footer8";
import Pagebanner from "../components/Blog Page/Page-banner";
import Page from "../components/Blog Page/Page";
import BlogPage from "../components/Blog Page/BlogPage";
import Live7 from "../components/Blog Page/Live7";
import Footer9 from "../components/Blog Page/Footer9";
import Single from "../components/Single Blog/Single";
import Singlebanner from "../components/Single Blog/Single-banner";
import SingleBlog from "../components/Single Blog/SingleBlog";
import Live8 from "../components/Single Blog/Live8";
import Footer10 from "../components/Single Blog/Footer10";
import About from "../components/About us/About";
import Aboutbanner from "../components/About us/About-banner";
import AboutSection from "../components/About us/AboutSection";
import AboutFeatures from "../components/About us/About-Features";
import TestimonialSection from "../components/About us/TestimonialSection";
import Footer11 from "../components/About us/Footer11";
import Contact from "../components/Contact us/Contact";
import Contactbanner from "../components/Contact us/Contact-banner";
import ContactSection from "../components/Contact us/ContactSection";
import Footer12 from "../components/Contact us/Footer12";
import NotFound from "../components/404 Not Found/NotFound";
import Notbanner from "../components/404 Not Found/Not-banner";
import Found from "../components/404 Not Found/Found";
import Live9 from "../components/404 Not Found/Live9";
import Footer13 from "../components/404 Not Found/Footer13";
import Faq from "../components/Faq/Faq";
import Faqbanner from "../components/Faq/Faq-banner";
import FaqSection from "../components/Faq/FaqSection";
import Live10 from "../components/Faq/Live10";
import Footer14 from "../components/Faq/Footer14";
import { sanityFetch } from "../sanity/lib/live";
//import { allproducts } from "../sanity/lib/queries";
import Image from "next/image";

type Product = {
  _id : string;
  name : string;
  description : string;
  price : number;
  imageUrl : string;
 
}

export default async function Home() {


  return(
    //<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      //<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       //<Image
         // className="dark:invert"
         // src="/next.svg"
         // alt="Next.js logo"
         // width={180}
         // height={38}
         // priority
        ///>
        //<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
         // <li className="mb-2">
           // Get started by editing{" "}
            //<code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            //  src/app/page.tsx
            //</code>
           // .
          //</li>
         // <li>Save and see your changes instantly.</li>
       // </ol>

        //<div className="flex gap-4 items-center flex-col sm:flex-row">
          //<a
           // className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          //  href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
           // target="_blank"
           // rel="noopener noreferrer"
         // >
           // <Image
            //  className="dark:invert"
            //  src="/vercel.svg"
            //  alt="Vercel logomark"
            //  width={20}
            //  height={20}
           // />
           // Deploy now
         // </a>
          //<a
          //  className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          //  href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          //  target="_blank"
          //  rel="noopener noreferrer"
         // >
          //  Read our docs
         // </a>
       // </div>
      //</main>
     // <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       // <a
        //  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //  href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //  target="_blank"
        //  rel="noopener noreferrer"
        //>
         // <Image
         //   aria-hidden
         //   src="/file.svg"
        //    alt="File icon"
        //    width={16}
         //   height={16}
         // />
        //  Learn
       // </a>
       // <a
       //   className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        //  href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        //  target="_blank"
        //  rel="noopener noreferrer"
        //>
         // <Image
          //  aria-hidden
          //  src="/window.svg"
          //  alt="Window icon"
          //  width={16}
          //  height={16}
         // />
         // Examples
       // </a>
       // <a
       //   className="flex items-center gap-2 hover:underline hover:underline-offset-4"
       //   href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
       //   target="_blank"
        //  rel="noopener noreferrer"
      //  >
         // <Image
          //  aria-hidden
          //  src="/globe.svg"
          //  alt="Globe icon"
          //  width={16}
          //  height={16}
         // />
        //  Go to nextjs.org →
       // </a>
     // </footer>
   //</div>
  //);
  
     
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

      {/* 4 Page */}

      <ShopLeft />
      <ShopLeftbanner />
      <EcommerceB />
      <MainLayout />
      <Live3 />
      <Footer3 />

      {/* 5 Page */}

      <Detail />
      <Detailbenner />
      <ProductDetail />
      <Description />
      <DetailProducts />
      <Live4 />
      <Footer4 />

      {/* 6 Page */}

      <Cart />
      <CartBanner />
      <ShoppingCart />
      <Footer5 />

      {/* 7 Page */}

      <Order />
      <Orderbanner />
      <OrderCompleted />
      <Live5 />
      <Footer6 />

      {/* 8 Page */}
     
      <Demo />
      <Demobanner />
      <ShippingCheckout />
      <Footer7 />

      {/* 9 Page */}

      <Account />
      <Accountbanner />
      <LoginForm />
      <Live6 />
      <Footer8 />

      {/* 10 Page */}

      <Page />
      <Pagebanner />
      <BlogPage />
      <Live7 />
      <Footer9 />

      {/* 11 Page */}

      <Single />
      <Singlebanner />
      <SingleBlog />
      <Live8 />
      <Footer10 />

      {/* 12 Page */}

      <About />
      <Aboutbanner />
      <AboutSection />
      <AboutFeatures />
      <TestimonialSection />
      <Footer11 />

      {/* 13 Page */}

      <Contact />
      <Contactbanner />
      <ContactSection />
      <Footer12 />

      {/* 14 Page */}

      <NotFound />
      <Notbanner />
      <Found />
      <Live9 />
      <Footer13 />

      {/* 15 Page */}

      <Faq />
      <Faqbanner />
      <FaqSection />
      <Live10 />
      <Footer14 />
      
    </div>

  );
}


        
  