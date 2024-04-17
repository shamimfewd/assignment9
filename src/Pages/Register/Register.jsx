import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
// import { LuEyeOff } from "react-icons/lu";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// import { useNavigate, useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");

  // ----------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleShowPas = () => {
    setShowPassword(!showPassword);
  };

  // update profile
  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("password should be 6 characters");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "your password should have at least one lower case character"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "your password should have at least one Uppercase character"
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUserProfile(fullName, image).then(() => {
          toast.success(
            "Congratulations! Your account has been successfully created🎉"
          );
          navigate("/");
        });
      })
      .catch((error) => {
        setRegisterError(error);
        toast("This Email Already Exist. Please Login");
      });
  };

  // ----------------------------------

  return (
    <div className="mx-auto flex justify-center">
      <Helmet>
        <title>EasyDeals - Register</title>
      </Helmet>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border p-4 rounded-xl my-10 lg:w-1/3 md:w-2/3"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#000000d5]">Register</h2>
        </div>
        <label className="font-bold text-[#000000b0]" htmlFor="name">Full Name</label>
        <br />
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full "
          {...register("fullName", { required: true })}
        />
        {errors.fullName && (
          <span className="text-red-600">This field is required</span>
        )}
        <br />
        <br />
        <label className="font-bold text-[#000000b0]" htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full "
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
        <br />
        <br />
        <label className="font-bold text-[#000000b0]" htmlFor="photo">Photo</label>
        <br />
        <input
          type="text"
          placeholder="Photo"
          className="input input-bordered w-full "
          {...register("image")}
        />

        <br />

        <br />
        <label className="font-bold text-[#000000b0]" htmlFor="password">Password</label>
        <br />

        <div className="flex relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full "
            {...register("password", { required: true })}
          />

          <span
            onClick={handleShowPas}
            className="cursor-pointer absolute right-4 top-3"
          >
            {showPassword ? (
              <IoMdEye className="text-2xl text-[#000000da]" />
            ) : (
              <IoMdEyeOff className="text-2xl text-[#000000da]" />
            )}
          </span>

          <br />
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <p className="text-orange-600 mt-2"> {registerError}</p>

        <br />
        <br />

        <input
          type="submit"
          className="btn w-full bg-[#2B3440] text-white"
          value="Register"
        />

        <p>
          if you have an account. Please {""}
          <Link to={"/login"} className="text-blue-600 font-bold">
            go login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
