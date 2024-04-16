import { useEffect, useState } from "react";
import Estate from "./Estate";
// import { useLoaderData } from "react-router-dom";
const Estates = () => {
  const [estates, setEstates] = useState([]);
  useEffect(() => {
    fetch("property.json")
      .then((res) => res.json())
      .then((data) => setEstates(data));
  }, []);
  //   const estates = useLoaderData();
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-24">Our Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate} />
        ))}
      </div>
    </>
  );
};

export default Estates;
