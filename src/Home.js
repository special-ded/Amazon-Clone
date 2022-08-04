import React from "react";
import './Home.css'
import Product from "./Product";
import LightImg from "./images/light.jpg"
import CoffeeMaker from "./images/coffee-maker.jpg"
import Asus from "./images/asus.jpg"
import tv from "./images/tv.jpg"
import dumbbell from "./images/dumbbell.jpg"
import rog from "./images/rog.jpg"
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The Brighter the Light Kindle Edition. Dual Heating System, Advanced Latte System & 
            Hot Water Spout for Americano Coffee or Tea"
            price={29.99}
            image={LightImg}
            rating={5}
          />
          <Product
            id="45868785"
            title="De'Longhi EC9335R La Specialista Espresso Machine with 
            Sensor Grinder, Dual Heating System, Advanced Latte System & 
            Hot Water Spout for Americano Coffee or Tea, Stainless Steel, Red"
            price={720.38}
            image={CoffeeMaker}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="47767235"
            title="ASUS ZenBook Pro Duo 15 OLED UX582 Laptop,
             15.6” OLED 4K UHD Touch Display, Intel Core i7-10870H, 16GB RAM, 
             1TB SSD, GeForce RTX 3070"
            price={2360.00}
            image={Asus}
            rating={5}
          />          <Product
            id="45968785"
            title="SAMSUNG 40-inch Class LED Smart FHD TV 1080P (UN40N5200AFXZA, 2019 Model)"
            price={690.38}
            image={tv}
            rating={5}
          />
          <Product
            id="45848685"
            title="Bowflex SelectTech 552 Adjustable Dumbbell"
            price={239.38}
            image={dumbbell}
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="45848685"
            title="ASUS ROG Strix Scar 15 (2022) Gaming Laptop, 15.6” 300Hz IPS FHD Display, NVIDIA GeForce RTX 3070 Ti,Intel Core i9 12900H, 16GB DDR5, 1TB SSD, Per-Key RGB Keyboard, Windows 11 Home, G533ZW-AS94"
            price={2469.99}
            image={rog}
            rating={5}
          />
        </div>
      </div>

    </div>
  )
}