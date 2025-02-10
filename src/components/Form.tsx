"use client";
import { GoogleIcon } from "@/utils/icons";
import { useState } from "react";
import Image from "next/image";

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        if (!emailRegex.test(email)) {
            setError("Invalid email format");
            return;
        }

        if (password.length < 6) {
            setError("Password must have a minimum of 6 characters");
            return;
        }

        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "/dashboard";
    };

    return (
        <div className="py-[30px]">
            <div className="max-w-[1440px] ml-auto px-[27px] max-lg:px-[35px]">
                <div className="flex justify-end xl:gap-[120px] gap-20 max-lg:justify-center">
                    <div className="lg:pt-5">
                        <Image className="max-md:pb-[90px] pointer-events-none pb-[138.9px]" src="/assets/images/page-logo.webp" alt="page-logo" width={163} height={61.71} />
                        <form onSubmit={handleSubmit} className="max-w-[456px]">
                            <h2 className="font-semibold text-3xl leading-[58.45px] text-custom-black">Welcome Back</h2>
                            <p className="text-sm leading-[30px] text-custom-gray pb-[31px]">Welcome back! Please enter your details.
                            </p>
                            <div className="pb-[18px]">
                                <label htmlFor="email" className="font-medium leading-5 pb-[6px] block text-deep-black">Email
                                </label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-[14px] py-[19.2px] outline-none md:w-[456px] text-gray placeholder:text-gray rounded-lg border border-custom-white max-md:w-[320px]" placeholder="Email" />
                            </div>
                            <div>
                                <label htmlFor="password" className="font-medium leading-5 pb-[6px] block text-deep-black">Password </label>
                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-[14px] py-[19.2px] outline-none md:w-[456px] text-gray placeholder:text-gray rounded-lg border border-custom-white max-md:w-[320px]" placeholder="••••••••" />
                            </div>
                            <div className="flex md:items-center justify-between pt-[18px] max-md:flex-col max-md:gap-[14px]">
                                <label htmlFor="remember" className="inline-flex items-center gap-3">
                                    <input type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded text-indigo-600" />
                                    <span className="inter leading-6 text-custom-slate">Remember for 30 days</span>
                                </label>
                                <p className="text-custom-blue inter leading-6 text-base">Forgot password</p>
                            </div>
                            {error && <p className="text-red-500 pt-6">{error}</p>}
                            <button type="submit" className="pt-[9px] pb-[10px] bg-custom-black text-white w-full mt-6 hover:bg-custom-blue transition-all duration-300 rounded-[9px]">Sing In</button>
                            <div className="pt-2 pb-[9px] bg-white w-full mt-[6px] rounded-[9px] border border-custom-white flex items-center gap-[10px] justify-center">
                                <GoogleIcon />
                                <p>Sign in with Google</p>
                            </div>
                            <p className="inter leading-6 text-base md:text-center pt-[18px] text-custom-slate">Don’t have an account?
                                <span className="text-custom-blue"> Sign up</span>
                            </p>
                        </form>
                    </div>
                    <Image className="max-lg:hidden pointer-events-none" src="/assets/images/form-img.webp" alt="" width={759} height={899} />
                </div>
            </div>
        </div>
    );
};

export default Form;