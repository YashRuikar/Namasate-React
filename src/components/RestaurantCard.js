import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const ResturantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext)

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    aggregatedDiscountInfoV3,
  } = resData?.info;

  return (
    <div className="m-6 p-4 w-[250px] min-h-[500px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

// input - RestaurantCard => output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      aggregatedDiscountInfoV3,
    } = resData?.info;
    return (
      <div>
        <div className="bg-black text-white m-2 p-2 rounded-lg mt-14 ">
          <label>Promoted</label>
        </div>
        <div className="bg-black text-white m-2 p-2 rounded-lg inline-block">{aggregatedDiscountInfoV3?.header}</div>
        <div className="bg-black text-white m-2 p-2 rounded-lg inline-block">{aggregatedDiscountInfoV3?.subHeader}</div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
