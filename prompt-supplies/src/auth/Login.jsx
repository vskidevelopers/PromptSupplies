/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/videos/background.mp4";
import { useAuth } from "../utils/firebase";
import SnackBar from "../components/SnackBar";

function Login() {
  const { login, authError } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  const { register, handleSubmit } = useForm();

  const loading = false;

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);
    try {
      await login(data.email, data.password);
      localStorage.setItem("isAuth", true);
    } catch (error) {
      if (authError) {
        console.log("Auth Error:", authError);
      }
      console.log("The following error occured >>", error);
    }
    navigate("/admin");
  };

  // if (user) {
  //   return <Navigate to="/admin" />;
  // }
  return (
    <div>
      <div className="pt-16 relative">
        <div className="absolute inset-0 h-full w-full">
          <video
            src={background}
            className={!isLoading ? "w-full h-full object-cover" : "hidden"}
            onLoadedData={handleVideoLoad}
            autoPlay
            loop
            muted
          />
        </div>

        <section className="relative w-full  h-screen flex justify-end ">
          <div
            className="bg-black/80 w-full md:max-w-md h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-start text-[#FDB715]"
          >
            <div className="w-full h-100">
              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Log in to your account
              </h1>
              {authError === "auth/user-not-found" && (
                <SnackBar status="User Does Not Exist" />
              )}
              {/*{user && <SnackBar status={user.email} />} */}

              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block ">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-900 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                  />
                </div>

                <div className="mt-4">
                  <label className="block ">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Enter Password"
                    minlength="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-900 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="text-right mt-2">
                  <Link
                    to=""
                    className="text-sm font-semibold text-white hover:text-blue-700 focus:text-blue-700"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                  disabled={loading}
                >
                  {loading ? "Sending" : "Log In"}
                </button>
              </form>

              <hr className="my-6 border-gray-300 w-full" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
