import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoIosPricetags } from "react-icons/io";

const Estate = ({ estate }) => {
  const {
    id,
    image,
    estate_title,
    price,
    description,
    area,
    location,
    facilities,
  } = estate;

  return (
    <div data-aos="fade-up"  data-aos-delay="300">
      <div className="card h-[35rem] bg-base-100 shadow-xl rounded-none p-4">
        <figure>
          <img className="h-[25rem]" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#000000dc] font-bold">
            {estate_title}
          </h2>
          <p className="flex items-center gap-x-2 font-bold text-[#000000dc] text-lg">
            <IoIosPricetags />${price}
          </p>
          <p className="flex gap-x-1 items-center text-[#000000dc]">
            <CiLocationOn className="text-lg" />
            {location}
          </p>

          <div>
            <ul className="text-[#000000dc]">
              <h3 className="text-lg font-bold">Features:</h3>
              {facilities.map((item, index) => (
                <div key={index}>
                  <li className="flex items-center ">
                    <IoCheckmarkCircle />
                    {item}
                  </li>
                </div>
              ))}
            </ul>
          </div>

          {/* {description.length > 100 ? (
            <p>{description.slice(0, 100)}</p>
          ) : (
            description
          )} */}

          <Link className="" to={`/estate/${id}`}>
            <button className="btn w-full bg-[#2B3440] text-white ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Estate;
