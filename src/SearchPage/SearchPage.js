import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import logo1 from "./SearchResultPhotos/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg";
import logo2 from "./SearchResultPhotos/585029a0dd0895bc548b4b8b.jpg";
import logo3 from "./SearchResultPhotos/airbnb-plus-london.jpg";
import logo4 from "./SearchResultPhotos/Airbnb-rental-tips.jpg";
import logo5 from "./SearchResultPhotos/fit.jpg";
import logo6 from "./SearchResultPhotos/images.jpeg";
import logo7 from "./SearchResultPhotos/Untitled-design-8.jpg";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>

      <SearchResult
        img={logo1}
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />

      <SearchResult
        img={logo2}
        location="Private room in center of London"
        title="Independant luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />

      <SearchResult
        img={logo3}
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img={logo4}
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img={logo5}
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
      <SearchResult
        img={logo6}
        location="Private room in center of London"
        title="The Blue Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img={logo7}
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£90 / night"
        total="£650 total"
      />
    </div>
  );
}

export default SearchPage;
