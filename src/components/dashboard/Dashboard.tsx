"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DASHBOARD_BUTTON_LIST } from "@/utils/helper";
import Link from "next/link";
import Calendly from "./Calendly";
import QuestionOne from "./QuestionOne";
import UploadImage from "./UploadImage";

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const page = searchParams.get("page");

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            router.push("/");
        }
    }, [router]);
    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        router.push("/");
    };

    return (
        <div className="min-h-screen relative">
            <div className="bg-blue-500 max-md:flex max-md:items-center max-md:gap-5 min-h-20 py-5 px-3 w-full z-20 fixed top-0">
                <button onClick={() => setOpen(Open => !Open)} className="md:hidden max-md:w-6 max-md:h-4 relative max-md:flex max-md:justify-between max-md:flex-col overflow-hidden">
                    <span className={`flex w-6 h-0.5 transition-all duration-300 bg-white ${open === true ? "translate-x-10" : ""}`}></span>
                    <span className={`flex w-6 h-0.5 transition-all duration-300 relative bg-white after:absolute after:w-full after:h-full after:bg-white after:left-0 after:top-0 after:transition-all after:duration-300 ${open === true ? "rotate-45 after:rotate-90" : ""}`}></span>
                    <span className={`flex w-6 h-0.5 transition-all duration-300 bg-white ${open === true ? "-translate-x-10" : ""}`}></span>
                </button>
                <h2 className="text-white font-semibold font-inter text-3xl max-md:text-2xl">Welcome to Dashboard</h2>
            </div>
            <div className="flex w-full md:pl-[300px] relative">
                <div className={`flex flex-col pb-10 pt-24 px-5 bg-black z-10 text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between max-md:w-full transition-all duration-300 ${open === true ? "max-md:left-0" : "max-md:-left-full"}`}>
                    <div className="flex flex-col gap-2 relative">
                        {DASHBOARD_BUTTON_LIST.map((item, index) => (
                            <Link href={`/dashboard?page=${item.toLowerCase().replace(" ", "-")}`} key={index} onClick={() => setOpen(false)} className={`${page === item.toLowerCase().replace(" ", "-") && "!bg-blue-500 text-white"} py-2 px-3 bg-white rounded-lg cursor-pointer transition-all duration-300 text-black font-medium`}>{item}</Link>
                        ))}
                    </div>
                    <button onClick={handleLogout} className="bg-white py-2 px-3 rounded-lg text-black font-medium">Log out</button>
                </div>
                <div className="w-full pt-24 px-6">
                    {page === "question-1" ? (
                        <QuestionOne />
                    ) : page === "question-2" ? (
                        <Calendly />
                    ) : page === "question-3" ? (
                        <UploadImage />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
