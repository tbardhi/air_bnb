import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Search from "../SearchPage/Search";
import { useHistory } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          variant="outlined"
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <div className="banner__info">
        <h1>Get out and strech your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
