import React, { useState, useEffect  } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLayout from "@/layouts/authlayout";
import Auth from "@/components/ui/auth";
import Button from "@/components/ui/Button";
import Google from "@/assets/images/icon/google.svg";
import InputContent from "@/components/ui/InputContent";
import IputeEmail from "@/components/ui/inputEmail"; 
import { useRouter } from 'next/navigation';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
 
  useEffect(() =>{
    const auth = localStorage.getItem('user');
    if(auth){
      router.push('/auth')
    }
  }, [])

 
  const handleSubmit = async () => {
    let result = await fetch('http://localhost:5000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-type': 'application/json'
      }
    })
    result = await result.json()  
    console.warn(result);
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result));
      router.push("/auth");
    }else{
      alert("hello....")
    }
  }
 
  return (
    <AuthLayout className={"flex justify-center"}>
      <div className="w-full max-w-[680px] sm:pt-[186px] sm:pb-[100px] py-[100px]">
        <Auth className={"md:relative !top-0"}>
          <div className="pt-5 flex items-center flex-col">
            <h2 className="text-2xl font-semibold pb-2 text-blacklight">
              Log in
            </h2>
            <p className="text-sm text-black/40 ">
              Continue to your Becho Store
            </p>
            <Button
              outline={"true"}
              secondary={"true"}
              className="flex items-center !py-1 px-2 text-sm my-[30px]"
            >
              <div className="p-[7px] mr-1">
                <Image src={Google} className="w-4 h-4" alt="" />
              </div>
              <span className="text-black">Continue with Google</span>
            </Button>
            <div className="relative flex items-center">
              <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
              <p className="px-[21px] text-xs leading-[18px] whitespace-nowrap text-blacklight">
                Or with Email
              </p>
              <span className="sm:w-[136px] w-[75px]  h-[1px] bg-black/10"></span>
            </div>
            <div className="my-[30px] w-full max-w-[388px]">
            <IputeEmail className={"!py-2.5 dark:bg-white dark:border-black/10"}  onChange={(e) => {
                    setEmail(e.target.value);
                  }} value={email} placeholder="Email" inputStyle={" dark:text-blacklight"}/>
              <InputContent
                className={`!py-2.5 !mb-2  dark:bg-white dark:border-black/10 `}
              >
                <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  className="text-sm w-full dark:bg-transparent text-blacklight"
                />
              </InputContent>
              <Link
                href={"/auth/forgot-password"}
                className="block text-right text-trinary-bule"
              >
                Forgot Password?
              </Link>
            </div>
            <Link href={"#0"} className="flex justify-center w-full">
              <Button
                name={"Sign In"}
                onClick={handleSubmit}
                secondary={"true"}
                color={"blacklight"}
                className={
                  "!text-lg mb-4 !py-2 w-full max-w-[388px] dark:!text-white dark:!bg-blacklight"
                }
              />
            </Link>
            <p className="text-sm text-black/80">
              New to Becho?
              <Link href={""} className="text-trinary-bule ml-[3px]">
                Get Started
              </Link>
            </p>
          </div>
        </Auth>
      </div>
    </AuthLayout>
  );
}
export default Login;
