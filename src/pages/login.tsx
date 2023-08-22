import React, { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { useSession,signIn,signOut } from "next-auth/react";
import { NextPage } from "next";

const Login: NextPage = () => {
  
  const session=useSession();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleClick=()=>{
    signIn("google")
     
    localStorage.setItem("session", JSON.stringify(session))
  }

useEffect(()=>{
    if(typeof window !== "undefined" && window){
      const session=localStorage.getItem("session")
      if(session){
        router.push("/")
        } else{
          console.log("not possible")
        } 
       
    }
},[session])

  
  
  console.log(session)

  const onsubmitHandler = (e:any) => {
    e.preventDefault();
    const user = {
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    };
    localStorage.setItem("user", JSON.stringify(user));

    router.push("/")
  }

  return (
    <div className="flex">
      {/* The Left side */}
      <div className="flex justify-center align-middle items-center  w-0 sm:w-5/12 h-screen bg-black">
        {/* The Main heading */}
        <h1 className="text-white text-7xl font-bold tracking-wider">Board.</h1>
      </div>
      {/* The Right side */}
      <div className="bg-[#F5F5F5] w-full sm:w-7/12 flex justify-center items-center">
        {/* The Login form */}
        <div>
          {/* The Main heading */}
          <h3 className="text-4xl font-bold mb-1">Sign In</h3>
          {/* The Sub-heading */}
          <p className="text-base font-normal mb-6">Sign in to your account</p>
          {/* The Social Login buttons */}
          <div className="flex mb-6 justify-between">
            <button
              className="bg-white rounded-[10px] px-6 py-2 mr-4 flex items-center"
              onClick={handleClick}
            >
              <img
                src="../assets/accessories/google-icon.svg"
                alt="google-icon"
                className="mr-3"
              />
              <p className="text-xs text-[#858585]">Sign in with Google</p>
            </button>
            <button className="bg-white rounded-[10px] px-6 py-2 flex items-center">
              <img
                src="../assets/accessories/apple-icon.svg"
                alt="apple-icon"
                className="mr-3"
              />
              <p className="text-xs text-[#858585]">Sign in with Apple</p>
            </button>
          </div>
          {/* The Fields */}
          <form className="bg-white rounded-[20px] px-8 py-6 w-[410px]" onSubmit={onsubmitHandler}>
            {/* Email Address Field*/}
            <div className="my-4">
              <p className="text-base mb-2">Email Address</p>
              <input
                type="email"
                ref={emailRef}
                placeholder="Email Address"
                className="px-4 py-2 placeholder-[#B0B0B0] text-black text-base relative bg-[#F5F5F5] rounded-[10px]  border-0 outline-none focus:outline-none w-full"
              />
            </div>
            {/* Password Field */}
            <div className="my-4">
              <p className="text-base mb-2">Password</p>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Password"
                className="px-4 py-2 placeholder-[#B0B0B0] text-black text-base relative bg-[#F5F5F5] rounded-[10px]  border-0 outline-none focus:outline-none w-full"
              />
            </div>
            {/* The Forgot password button */}
            <button className="text-base text-[#346BD5] my-2">
              Forgot Password?
            </button>
            {/* The Submit button */}
            <button
              type="submit"
              className="block w-full bg-black text-white rounded-[10px] p-2 text-base font-bold my-2"
            >
              Sign in
            </button>
          </form>
          {/* The Register link */}
          <div className="flex justify-center items-center my-2">
            <p className="text-base text-[#858585] mr-1">
              {" "}
              Don’t have an account?{" "}
            </p>
            <button className="text-base text-[#346BD5] my-2">
              {" "}
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
