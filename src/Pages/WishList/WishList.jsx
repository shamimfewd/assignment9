import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getDataFromLocalStorage } from "../../Utils/LocalStorage";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const WishList = () => {
  const wishProperty = useLoaderData();
  const [showProperty, setShowProperty] = useState([]);

  useEffect(() => {
    const storedProperty = getDataFromLocalStorage();
    if (wishProperty.length > 0) {
      const displayProperty = [];
      for (const id of storedProperty) {
        const property = wishProperty.find((item) => item.id === id);
        if (property) {
          displayProperty.push(property);
        }
      }
      setShowProperty(displayProperty);
    }
  }, [wishProperty]);
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="wish list"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {showProperty.map((property, index) => (
              <div key={index}>
                <div className="card h-[35rem] bg-base-100 shadow-xl rounded-none">
                  <figure>
                    <img className="h-[25rem]" src={property.image} alt="" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{property.estate_title}</h2>
                    <p className="flex items-center gap-x-2 font-bold">
                      <IoIosPricetags />${property.price}
                    </p>
                    <p className="flex gap-x-1 items-center">
                      <CiLocationOn className="text-lg" />
                      {property.location}
                    </p>

                    <div>
                      <ul>
                        <h3 className="text-lg">Features:</h3>
                        {property.facilities.map((item, index) => (
                          <div key={index}>
                            <li className="flex items-center text-green-600">
                              <IoCheckmarkCircle />
                              {item}
                            </li>
                          </div>
                        ))}
                      </ul>
                    </div>

                    <Link className="" to={`/`}>
                      <button className="btn w-full bg-[#2B3440] text-white ">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
       
      </div>
    </div>
  );
};

export default WishList;
