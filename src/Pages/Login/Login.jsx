import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const { signInUser, signInGoogle, gitHubLeLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPas = () => {
    setShowPassword(!showPassword);
  };
  // ------------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        if (result.user) {
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // github login
  const handleGitHubLogin = () => {
    gitHubLeLogin()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(location?.state || "/");
        // navigate("/");
      }
    });
  };
  return (
    <>
      <div className="mx-auto flex justify-center">
        <Helmet>
          <title>EasyDeals - Login</title>
        </Helmet>

        <div className="border rounded-xl p-4 w-1/3 my-10">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <h2 className="text-3xl font-bold">Login Here</h2>
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />

            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full "
                {...register("password", { required: true })}
              />

              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}

              <span
                onClick={handleShowPas}
                className="cursor-pointer absolute right-4 top-3"
              >
                {showPassword ? (
                  <IoMdEye className="text-2xl" />
                ) : (
                  <IoMdEyeOff className="text-2xl" />
                )}
              </span>
            </div>

            <br />
            <br />
            <input
              type="submit"
              className="btn w-full bg-[#2B3440] text-white"
              value="Login"
            />
            <p className="my-4">
              if you do not account. Please {""}
              <Link to={"/register"} className="text-blue-600 font-bold ">
                go register
              </Link>
            </p>
          </form>
          <button
            onClick={() => handleSocialLogin(handleGoogleLogin)}
            className="btn w-full text-lg bg-[#2B3440] text-white"
          >
            <FcGoogle className="text-4xl" />
            <span>LogIn with Google</span>
          </button>
          <br />
          <button
            onClick={() => handleSocialLogin(handleGitHubLogin)}
            className="btn w-full mt-2 text-lg bg-[#2B3440] text-white"
          >
            <FaGithub className="text-4xl" /> <span>LogIn with Github</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
