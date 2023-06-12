import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import Image from "next/image";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    status: "",
    message: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <section className="gradient-form h-[100vh] bg-neutral-100 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full max-w-sm">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800 p-5">
              <div className="my-5">
                <Image
                  className="mx-auto mb-10"
                  src={LogoSTP}
                  alt="Inkubator Solo Techno"
                  width={120}
                  height={60}
                />
              </div>

              <form>
                {/* form username */}
                <div className="relative mb-4" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="w-full rounded-md border py-1 px-2 mb-5"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="flex justify-between items-center mb-5 gap-4">
                    <div className="w-full">
                      <OutsideClickHandler
                        onOutsideClick={() => {
                          setIsShow(false);
                        }}
                      >
                        <input
                          type={isShow ? "text" : "password"}
                          className="w-full rounded-md border py-1 px-2"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </OutsideClickHandler>
                    </div>
                    <div
                      className="bg-gray-100 p-2 rounded-md hover:bg-gray-50 cursor-pointer transition-all"
                      onClick={() => setIsShow(!isShow)}
                    >
                      {isShow ? (
                        <AiOutlineEye size={24} />
                      ) : (
                        <AiOutlineEyeInvisible size={24} />
                      )}
                    </div>
                  </div>
                  <button
                    className="w-full bg-primary-100 text-white font-medium py-1 rounded-md hover:opacity-50 transition-all"
                    onClick={handleLogin}
                  >
                    {isLoading ? "Loading ..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
