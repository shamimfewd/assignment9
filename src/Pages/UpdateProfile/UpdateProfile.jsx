import { useContext, useRef } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  
  const inputRef = useRef();
 

  return (
    <div className="max-w-7xl flex items-center justify-center mx-auto my-24">
      <div className="border rounded-lg p-6">
        <div className="flex items-center">
          <img className=" flex justify-center" src={user.photoURL} alt="" />
          <input
            ref={inputRef}
            className="pl-6"
            type="file"
            placeholder="Choose a image"
            name=""
            id=""
          />
        </div>
        <h1>user update</h1>

        <form className=" mt-10">
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
        </form>

        <button>button</button>
      </div>
    </div>
  );
};

export default UpdateProfile;
