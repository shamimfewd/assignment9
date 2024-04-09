import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [successRegister, SteSuccessRegister] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    setRegisterError("");
    SteSuccessRegister("");

    createUser(email, password)
      .then((result) => {
        SteSuccessRegister(result);
        toast.success(
          "Congratulations! Your account has been successfully created🎉"
        );
      })
      .catch((error) => {
        setRegisterError(error);
        toast("This Email Already Exist. Please Login");
      });
  };
  return (
    <div className="mx-auto flex justify-center">
      <Helmet>
        <title>EasyDeals - Register</title>
      </Helmet>
      <form
        onSubmit={handleRegister}
        className="border p-4 rounded-xl my-10 w-1/3"
      >
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full "
          name="name"
          required
        />
        <br />
        <br />
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
        <label htmlFor="photo">Photo</label>
        <br />
        <input
          type="text"
          placeholder="Photo"
          className="input input-bordered w-full "
          name="photo"
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
