import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { restaurantList } from "../constants";
import RestauranctCard from "../components/RestaurantCard";
import Shimmer from './Shimmer';

function filterData(searchInput, allRestaurants) {
 
  const filterData = allRestaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}
const Body = () => {
    const [allRestaurants,setAllRestaurants]=useState([]);
  const [filteredRestaurants, setFilteredRestaurnats] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(()=>{
    getRestaurants();
  },[])

 async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json =await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurnats(json?.data?.cards[2]?.data?.data?.cards)
   
    console.log(json,'json')
 }
 console.log('id31',filteredRestaurants.data)
 if(!allRestaurants) return null;
  return (allRestaurants?.length===0)? <Shimmer /> :(
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            console.log("data2", data);
            setFilteredRestaurnats(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          { console.log('id31',restaurant.data.id)}
          return (
            <Link 
            to={"/restaurant/" + restaurant.data.id} 
            key={restaurant?.data?.id}
            >
            <RestauranctCard {...restaurant?.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
