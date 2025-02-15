"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DASHBOARD_BUTTON_LIST } from "@/utils/helper";
import Link from "next/link";
import Calendly from "@/components/dashboard/Calendly";
import QuestionOne from "@/components/dashboard/QuestionOne";
import UploadImage from "@/components/dashboard/UploadImage";

const Dashboard = () => {
    const router = useRouter();
    const params = useParams();
    const { button } = params;

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        router.push("/");
    };

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            router.push("/");
        }
    }, [router]);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="flex min-h-screen w-full relative">
            <div className="relative">
                <div className="bg-indigo-500 z-50 max-md:flex max-md:items-center max-md:gap-5 min-h-20 py-5 px-3 w-full fixed top-0">
                    <button onClick={handleOpen} className="md:hidden max-md:size-6 relative !z-[51] max-md:flex max-md:justify-between max-md:flex-col overflow-hidden" >
                        <span className={`flex w-6 h-0.5 transition-all duration-300 bg-white ${open === true ? "translate-x-10" : ""}`}></span>
                        <span className={`flex w-6 h-0.5 transition-all duration-300 relative bg-white after:absolute after:w-full after:h-full after:bg-white after:left-0 after:top-0 after:transition-all after:duration-300 ${open === true ? "rotate-45 after:rotate-90" : ""}`}></span>
                        <span className={`flex w-6 h-0.5 transition-all duration-300 bg-white ${open === true ? "-translate-x-10" : ""}`}></span>
                    </button>
                    <h1 className="text-white font-semibold font-inter text-3xl max-md:text-2xl"> Welcome to Dashboard</h1>
                </div>
                <div className={`flex flex-col py-10 px-5 bg-black z-10 text-white w-[300px] fixed top-0 left-0 min-h-screen justify-between max-md:w-full transition-all duration-300 ${open === true ? "max-md:left-0" : "max-md:-left-full"}`}>
                    <div className="flex flex-col gap-2 relative">
                        <h1 className="mb-3 text-center text-4xl font-semibold">Dashboard</h1>
                        {DASHBOARD_BUTTON_LIST.map((item, index) => (
                            <Link href={`/dashboard/${item.toLowerCase().replace(" ", "-")}`} key={index} onClick={() => setOpen(false)} className={`${button === item.toLowerCase().replace(" ", "-") && "!bg-indigo-500 text-white"} py-2 px-3 rounded-lg bg-white text-black font-medium cursor-pointer transition-all duration-300`}>{item}</Link>))}
                    </div>
                    <button onClick={handleLogout} className="bg-white text-black py-2 px-3 rounded-lg font-semibold">Log out</button>
                </div>
            </div>
            <div className="w-full pt-20 md:pl-[320px]">
                {button === "question-1" ? (
                    <QuestionOne />
                ) : button === "question-2" ? (
                    <Calendly />
                ) : button === "question-3" ? (
                    <UploadImage />
                ) : null}
            </div>
        </div>
    );
};

export default Dashboard;
