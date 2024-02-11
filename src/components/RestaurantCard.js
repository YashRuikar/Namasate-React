import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;

  return (
    <div className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={ CDN_URL
           +
          resData.info.cloudinaryImageId
        }
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo} Stars</h4>
      <h4>{sla?.slaString} Minutes</h4>
    </div>
  );
};

export default ResturantCard