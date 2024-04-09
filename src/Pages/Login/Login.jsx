import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signInUser, signInGoogle, gitHubLeLogin } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubLogin = () => {
    gitHubLeLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto flex justify-center">
      <div className="border rounded-xl p-4 w-1/3 my-10">
        <form onSubmit={handleLogin} className="  ">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full "
            name="email"
            required
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full "
            name="password"
            required
          />
          <br />
          <br />
          <input type="submit" className="btn w-full" value="Login" />
          <p>
            <Link to={"/register"} className="text-blue-600 font-bold">
              go register
            </Link>
          </p>
        </form>
        <button onClick={handleGoogleLogin} className="btn">
          Google
        </button>
        <button onClick={handleGitHubLogin} className="btn">
          github
        </button>
      </div>
    </div>
  );
};

export default Login;
