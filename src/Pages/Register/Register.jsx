import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto flex justify-center">
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
          className="btn w-full bg-green-600"
          value="Register"
        />

        <p>
          <Link to={"/login"} className="text-blue-600 font-bold">
            go login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
