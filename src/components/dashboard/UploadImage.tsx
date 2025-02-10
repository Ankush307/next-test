"use client";
import React, { useState } from "react";

const UploadImage = () => {
    const [image, setImage] = useState([]);
    const [_, setUrl] = useState(null);

    const uploadImage = (e: any) => {
        const url = URL.createObjectURL(e.target.files[0]);
        setUrl(url as any);
        setImage([...image, url] as any);
    };

    const deleteImage = () => {
        setImage([]);
    };

    return (
        <div className="p-10 shadow-2xl w-full mx-auto my-10 container max-w-[1100px]">
            <div className="flex items-center justify-center flex-col">
                <h2 className="pb-5 text-2xl font-inter font-semibold">Add Your image</h2>
                <input onChange={uploadImage} hidden type="file" id="connect" />
                <label htmlFor="connect" className="bg-custom-blue py-[10px] px-[20px] rounded text-white cursor-pointer"> Add Image </label>
                <div className="flex gap-5 flex-wrap items-center my-5">
                    {image.map((item: string, index: number) => {
                        return (
                            <div className="overflow-hidden max-w-[500px] w-full justify-center" key={index}>
                                <img className="max-w-[100%] w-full object-cover" src={item} alt="image" />
                            </div>
                        );
                    })}
                </div>
                {image.length === 0 ? (
                    <p>No data found</p>
                ) : (
                    <button onClick={deleteImage} className="bg-red-500 py-[10px] px-[20px] rounded text-white cursor-pointer"> Delete</button>
                )}
            </div>
        </div>
    );
};

export default UploadImage;
