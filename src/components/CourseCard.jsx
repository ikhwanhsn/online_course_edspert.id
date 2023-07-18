import { json, useNavigate } from "react-router-dom";
import CourseImg from "../../public/img/course.png";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";

const CourseCard = ({title, desc, batch, mentor1, mentor2, profesi1, profesi2, price}) => {
    const navigate = useNavigate();

    const clickCourse = () => {
        const dataCourse = {
            title,
            desc,
            batch,
            mentor1,
            mentor2,
            profesi1,
            profesi2,
            price
        }
        const data = localStorage.setItem("data course", JSON.stringify(dataCourse));
        navigate('/detail');
    }

    return ( 
        <div className="relative flex flex-col w-full transition-all bg-white rounded-lg shadow-lg cursor-pointer md:h-72 h-[19rem] hover:scale-105 hover:shadow-xl" onClick={() => clickCourse()}>
            <img src={CourseImg} alt="course" className="rounded-t-lg bg-cyan-950"/>
            <div className="m-3 text-left ">
                <h2 className="text-lg font-bold">{title}</h2>
                <h3 className="mt-1 font-bold text-md">{desc}</h3>
                <div className="flex gap-1 mt-3 text-sm">
                    <p>Batch :</p>
                    <p>{batch}</p>
                </div>
                <div className="flex gap-1 mt-1 mb-5 text-sm">
                    <p>Mentor :</p>
                    <p>{mentor1}</p>
                </div>
                <div className="absolute flex gap-2 md:gap-1 bottom-3 right-3">
                    <p className="line-through">{(parseInt(price)+200000).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</p>
                    <p className="text-lg font-bold text-green-500">{(parseInt(price)).toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</p>
                </div>
            </div>
        </div>
     );
}
 
export default CourseCard;