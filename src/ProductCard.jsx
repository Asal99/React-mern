import { Link } from "react-router-dom";

export const ProductCard = ({ item, showPrice = true }) => {
  return (
    <Link to={`${item._id}`}>
      <div className="border border-red-400 rounded-2xl overflow-hidden">
        <div className="w-full h-48">
          {/* {showImage && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover block"
            />
          )} */}
          <img src={item.urlToImage} alt={item.title} />
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-3">
            {item.description}
          </p>
          {showPrice && <h4 className="mt-2 font-semibold">${item.price}</h4>}
        </div>
      </div>
    </Link>
  );
};
