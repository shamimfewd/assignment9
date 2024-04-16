import { useParams, useLoaderData, Link } from "react-router-dom";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPricetags } from "react-icons/io";

const PropertyDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const parsId = parseInt(id);

  const currentProperty = data.find((item) => item.id === parsId);
  const {
    image,
    estate_title,
    price,
    description,
    area,
    location,
    segment_name,
    status,
    facilities,
  } = currentProperty;
  return (
    <div
      className="bg-cover  w-full bg-repeat bg-center bg-gradient-to-r from-sky-500 to-indigo-500"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center pt-16 pb-16">
        <div className="">
          <div className=" grid lg:grid-cols-2  border-8 border-red-50 rounded-none bg-base-100 p-6">
            <div>
              <figure className="w-full">
                <img className="h-[70vh] " src={image} alt="" />
              </figure>
            </div>

            <div className="pl-6 space-y-4">
              <h2 className="card-title">{estate_title}</h2>
              <p className="flex items-center gap-x-2 font-bold text-2xl">
                <IoIosPricetags />${price}
              </p>
              <hr />
              <p>
                <span className="font-bold">Description:</span>
                {""}
                {description}
              </p>
              <hr />
              <p className="flex gap-x-1 items-center">
                <CiLocationOn className="text-lg" />
                {location}
              </p>
              <p>
                <span>Area:</span> {area}
                <sup>sq.ft</sup>{" "}
              </p>
              <p>
                {" "}
                <span>Status:</span>
                {status}
              </p>
              <p>
                <span>Segment: </span> {segment_name}
              </p>
              <ul>
                <h3 className="text-xl ">Features:</h3>
                {facilities.map((item, index) => (
                  <li key={index} className="flex items-center text-green-600">
                    <IoCheckmarkCircle />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="card-actions justify-end">
                <Link to={"/"}>
                  <button className="btn">Go Back</button>
                </Link>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
