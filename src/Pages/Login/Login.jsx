import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInUser, signInGoogle, gitHubLeLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // ------------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // -----------------------------------

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;

  //   signInUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       e.target.reset();

  //       // navigate-----------
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  // google login
  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
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
  return (
    <>
      <div className="mx-auto flex justify-center">
        <Helmet>
          <title>EasyDeals - Login</title>
        </Helmet>

        <div className="border rounded-xl p-4 w-1/3 my-10">
          {/* onSubmit={handleLogin} */}
          <form onSubmit={handleSubmit(onSubmit)} className="  ">
            <h2 className="text-3xl font-bold">Login Here</h2>
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full "
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
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
            onClick={handleGoogleLogin}
            className="btn w-full text-lg bg-[#2B3440] text-white"
          >
            <FcGoogle className="text-4xl" />
            <span>LogIn with Google</span>
          </button>
          <br />
          <button
            onClick={handleGitHubLogin}
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
