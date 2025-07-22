"use client";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="bg-[#1C1C1C] text-white">
			<div className="w-full h-[90vh] flex flex-col justify-center items-center text-center px-4">
				<div className=" ">
					<h1 className="text-6xl font-bold text-[#136ffa] mb-4">404</h1>
					<p className="text-xl mb-6">Упс! Страница не найдена</p>
					<Link
						href="/"
						className="inline-block bg-[#5813fa] hover:bg-[#7f5cff] text-white  font-normal py-2 px-4 rounded transition duration-300">
						Вернуться на главную
					</Link>
				</div>
			</div>
		</div>
	);
}
