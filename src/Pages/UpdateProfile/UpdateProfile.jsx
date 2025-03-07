import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { fullName, image } = data;
    updateUserProfile(fullName, image).then(() => {
      toast.success("Updated Your Profile");
    });
  };

  return (
    <div className="max-w-7xl flex items-center justify-center mx-auto py-24">
      <Helmet>
        <title>EasyDeals - Update Profile</title>
      </Helmet>

      
      <div className="border border-[#303c4c4b] shadow-xl rounded-lg p-6 lg:w-1/3 md:w-2/3">
       
       <h2 className="font-bold text-3xl text-[#000000c2] mb-6">Update Profile</h2>
        <div className="flex items-center justify-center">
          <img
            className=" flex justify-center w-28 h-28 rounded-full border-4"
            src={user.photoURL}
            alt=""
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className=" pt-10">
          <label className="font-bold text-[#000000b0]" htmlFor="">Name</label>
          <br />
          <input
            type="text"
            placeholder="name"
            defaultValue={user.displayName}
            className="input input-bordered w-full "
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span>This field is required</span>}
          <br />
          <br />

          <label className="font-bold text-[#000000b0]" htmlFor="">email</label>
          <br />
          <input
            type="email"
            placeholder="email"
            defaultValue={user.email}
            className="input input-bordered w-full "
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <br />
          <br />
          <label htmlFor="">Photo</label>
          <br />
          <input
            type="text"
            placeholder="photo"
            defaultValue={user.photoURL}
            className="input input-bordered w-full "
            {...register("image")}
          />

          <br />
          <br />

          <button type="submit" className="btn w-full text-white bg-[#303C4C]">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
