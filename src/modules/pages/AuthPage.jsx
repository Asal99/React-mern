import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:8000/auth/login", {
          email: data.email,
          password: data.password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Login successful");
      } else {
        await axios.post("http://localhost:8000/auth/register", {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
        });

        alert("Signup successful, now login!");
        setIsLogin(true);
      }

      reset();
    } catch (error) {
      alert(error.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div data-aos="zoom-in" className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 mb-2"
                {...register("fullName", {
                  required: "Full name is required",
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.fullName.message}
                </p>
              )}
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-2"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-2"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-2">
              {errors.password.message}
            </p>
          )}

          <button className="w-full bg-blue-500 text-white p-2 mt-2">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => {
              setIsLogin(!isLogin);
              reset();
            }}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};
