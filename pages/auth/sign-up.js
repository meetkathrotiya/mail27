import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import PasswordStrengthBar from "react-password-strength-bar";
import InputContent from "@/components/ui/InputContent";
import Eyeslash from "@/assets/images/icon/eyeslash.svg";
import Eye from "@/assets/images/icon/eyeopen.svg";
import Image from "next/image";
import CheckBox from "@/components/ui/CheckBox";
import Google from "@/assets/images/icon/google.svg";
import Button from "@/components/ui/Button";
import IputeEmail from "@/components/ui/inputEmail"; 
import { useRouter } from 'next/navigation';

function Signup() {
  const [loginerror, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const router = useRouter();

  const collectData = async () => {
    // Basic client-side validation
    if (!email || !password || !confirmPassword) {
      alert("Please enter both email and password.");
      return;
    }
  
    try {
      let result = await fetch('http://localhost:5000/register', {
        method: 'post',
        body: JSON.stringify({ email, password, confirmPassword}),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      result = await result.json();
  console.log(result)
      if (result.errors) {        
        
        // Clear previous error messages
        document.getElementById("emailInput").classList.remove("!border-red-600");
        document.getElementById("emailErrorMessage").innerText = "";
        document.getElementById("passwordInput").classList.remove("!border-red-600");
        document.getElementById("passwordErrorMessage").innerText = "";
        document.getElementById("confirmPasswordInput").classList.remove("!border-red-600");
        document.getElementById("confirmPasswordError").innerText = "";
  
        result.errors.forEach(error => {
          console.log("error", error)         
          if (error.field == 'email') {            
            document.getElementById("emailInput").classList.add("!border-red-600");
            document.getElementById("emailErrorMessage").innerText = error.message;
            
          } else if (error.field == 'password') {            
            document.getElementById("passwordInput").classList.add("!border-red-600");
            document.getElementById("passwordErrorMessage").innerText = error.message;

          } else if (error.field == 'confirmPassword') {            
            document.getElementById("confirmPasswordInput").classList.add("!border-red-600");
            document.getElementById("confirmPasswordError").innerText = error.message;
          }
        });
      } else {
        // Clear errors and proceed with successful registration
        document.getElementById("emailInput").classList.remove("!border-red-600");
        document.getElementById("emailErrorMessage").innerText = "";
        document.getElementById("passwordInput").classList.remove("!border-red-600");
        document.getElementById("passwordErrorMessage").innerText = "";
        document.getElementById("confirmPasswordInput").classList.remove("!border-red-600");
        document.getElementById("confirmPasswordError").innerText = "";
  
        localStorage.setItem("user", JSON.stringify(result));
        router.push("/auth/sign-up");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // alert("An error occurred during registration.");
    }
  };
  
  return (
    <AuthLayout className={"flex justify-center"}>
    <div className="flex justify-center w-full max-w-[680px] sm:pt-[186px] sm:pb-[100px] py-[100px] mx-auto">
      <Auth className={"!top-0 md:relative "}>
        <div className="pt-2.5 flex items-center flex-col">
          <h2 className="text-2xl font-semibold pb-2 text-blacklight">
            Sign up
          </h2>
          <p className="text-sm text-black/40 ">
            Start your free trial with Becho
          </p>
          <Button
            outline={"true"}
            className="flex items-center !py-1 px-2 text-sm my-[30px]"
          >
            <div className="p-[7px] mr-1">
              <Image src={Google} className="w-4 h-4" alt="" />
            </div>
            <span className="text-blacklight">Continue with Google</span>
          </Button>
          <div className="relative flex items-center">
            <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
            <p className="px-[21px] text-xs leading-[18px] whitespace-nowrap text-black/40">
              Or with Email
            </p>
            <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
          </div>
          <div className="w-full max-w-[388px] mt-[34px]">            
            <div className="mb-5">
            <input
                // type={passwordView}
                id="emailInput"
                type="email"
                placeholder="email"
                value={email}
                className="text-sm w-full placeholder:text-black/20 text-blacklight dark:bg-transparent border rounded-[6px] py-3 px-3 focus:!border-[#e5e5e5] mb-2"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            <p className="text-red-600" id="emailErrorMessage"></p>
            </div>
            <div>
              <div className="mb-5">
              <input
                id="passwordInput"
                type="password"
                  // type={passwordView}
                  placeholder="Password"
                  value={password}
                  className="text-sm w-full font-medium placeholder:text-black/20 text-blacklight dark:bg-transparent border rounded-[6px] py-3 px-3 focus:!border-[#e5e5e5] mb-2"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <p className="text-red-600" id="passwordErrorMessage"></p>
              </div>
              <div className="mb-5">
              <input
                id="confirmPasswordInput"
                type="password"
                  // type={passwordView}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  className="text-sm w-full font-medium placeholder:text-black/20 text-blacklight dark:bg-transparent border rounded-[6px] py-3 px-3 focus:!border-[#e5e5e5] mb-2"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <p className="text-red-600" id="confirmPasswordError"></p>
              </div>
            </div>          
             
                     
          </div>
          <div className="w-full max-w-[388px]">
            {/* <InputContent
              className={"!py-2.5 !mb-0 dark:bg-white dark:border-black/10"}
            >
              <input
                type="password"
                placeholder="Repeat Password"
                className="text-sm w-full placeholder:text-black/20 text-blacklight bg-transparent"
              />
            </InputContent> */}
            {/* <label className="flex mt-4 mb-7">
              <CheckBox
                name={"select all"}
                className={"passowordcheck"}
              ></CheckBox>
              <p className="text-black/80 cursor-auto">
                I Agree with
                <Link href={""} className="text-trinary-bule mx-[3px]">
                  Terms of use
                </Link>
                &
                <Link href={""} className="  text-trinary-bule ml-[3px]">
                  Privacy policy
                </Link>
              </p>
            </label> */}
          </div>
          <Link href={"#"} className="w-full flex justify-center">
            <Button
              name={"Sign In"}
              secondary={"true"}
              color={"blacklight"}
              onClick={collectData}
              className={
                "!text-lg mb-4 !py-2 w-full max-w-[388px] !bg-blacklight !text-white"
              }
            />
          </Link>
          <span className="text-black/80">
            Already have an Account?
            <Link href={""} className="text-trinary-bule ml-1 text-sm">
              Sign in
            </Link>
          </span>
        </div>
      </Auth>
    </div>
  </AuthLayout>
  );
}
export default Signup;
