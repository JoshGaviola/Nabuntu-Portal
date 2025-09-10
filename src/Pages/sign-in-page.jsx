import nabunturanlogo from "../images/nabunturanlogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignInPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const date = new Date();
  const year = date.getFullYear();

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="flex-1 flex items-center px-4 sm:px-8 md:pl-28 py-6 md:py-0">
        <div className="text-sm space-y-2">
          <div>
            Welcome to University of Nabunturan!
            <br />
            The first in leadership education
          </div>
          <div>
            Connect to UM Alumni - Tagum Campus{" "}
            <span className="text-orange-500 underline cursor-pointer">
              click here
            </span>
          </div>
          <div>
            Greetings! We are conducting an Alumni Tracer Study to update our
            database which will subsequently be used to assess graduate
            employability and mobility towards improving the course offerings of
            your alma mater...
          </div>
          <div>Thank you!!</div>
          <div>
            For New Student Registration{" "}
            <span className="text-orange-500 underline cursor-pointer">
              click here
            </span>
            <br />
            Hi, NIgga Registering with UM opens the doors to globally recognized
            quality, affordable, and open education...
          </div>
          <div>See you at UM!</div>
          <div>
            For Document Request{" "}
            <span className="text-orange-500 underline cursor-pointer">
              click here
            </span>
            <br />
            Hi, Ga! Document Request is now online.
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center py-4 md:py-0">
        <img
          src={nabunturanlogo}
          className="h-24 sm:h-32 md:h-40 object-contain"
          alt="Nabunturan Logo"
        />
      </div>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-sm md:max-w-md border border-gray-300 rounded shadow-2xl bg-white flex flex-col items-center px-6 py-8">
          {/* Welcome & Form */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-orange-500 font-bold text-2xl mb-2 mt-2">
              Welcome Back
            </h2>
            <span className="text-gray-700 text-sm mb-3 text-center">
              Sign in to your student account to continue learning
            </span>
            <form onSubmit={handleSignIn} className="w-full space-y-5 mt-5">
              <input
                type="text"
                name="email"
                placeholder="student@university.edu"
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none"
              />
              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-orange-500" />
                  Remember Me
                </label>
                <span className="text-orange-500 underline cursor-pointer">
                  Forgot Password?
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-orange-500 text-white rounded font-medium mt-2 hover:bg-orange-400"
              >
                Sign In
              </button>
            </form>
            <div className="mt-2 text-sm text-center">
              New Student?{" "}
              <span className="text-orange-500 underline cursor-pointer">
                Contact your Administrator
              </span>
            </div>
          </div>
          {/* Footer */}
          <footer className="mt-6 w-full text-xs text-gray-400 text-center border-t pt-2">
            {year} NabuntuPortal. All rights reserved.
            <br />
            <span className="underline mr-2 cursor-pointer">Privacy Policy</span>
            <span className="underline mr-2 cursor-pointer">
              Terms of Service
            </span>
            <span className="underline cursor-pointer">Support</span>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default SignInPage;
