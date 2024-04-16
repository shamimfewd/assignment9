import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-around max-w-7xl mx-auto bg-black text-white">
      <div>
        <h2 className="text-3xl">About</h2>
        <h2 className="text-3xl">name:</h2>
        <h2 className="text-3xl">email:</h2>
        <hr />
        <h2 className="text-3xl">description:</h2>
      </div>

      <form className=" mt-10">
        <img src={user.photoURL} alt="" />
        <label htmlFor="">Name</label>
        <br />
        <input
          type="text"
          placeholder="name"
          defaultValue={user.displayName}
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />

        <label htmlFor="">email</label>
        <br />
        <input
          type="email"
          placeholder="email"
          defaultValue={user.email}
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <br />
        <label htmlFor="">Mobile</label>
        <br />
        <input
          type="number"
          placeholder="number"
          defaultValue={user.phoneNumber}
          className="input input-bordered w-full max-w-xs"
        />
      </form>
    </div>
  );
};

export default About;
