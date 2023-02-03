import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { restaurantList, IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestauranctMenu = () => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=229"
    );
    const json = await data?.json();
    setRestaurantDetail(json?.data);
    console.log("dataaa", restaurantDetail);
  }
  if (!restaurantDetail) {
    return <Shimmer />;
  }
  return (
    <div>
      <h1>Restaurant id:{resId}</h1>
      <h2>{restaurantDetail?.name}</h2>
      <img src={IMG_CDN_URL + restaurantDetail?.cloudinaryImageId} />
      <h3>{restaurantDetail?.area}</h3>
      <h3>{restaurantDetail?.city}</h3>
      <h3>{restaurantDetail?.avgRating} Stars</h3>
      <h3>{restaurantDetail?.costForTwoMsg}</h3>
      <div>
        <h1>Menu</h1>

        <ul>
          {Object.values(restaurantDetail?.menu?.items)?.map((items, index) => (
            <li key={items?.id}>{items?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestauranctMenu;
