import { Description } from "@/components/ui/text/Description";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#1f1f1f] sticky top-0 left-0 w-full border-transparent border border-t-[#424242] py-3">
			<div className="container flex justify-center items-center">
				<Description className="  flex items-center gap-2 bg-[#2b2b2b] text-[16px]  text-white px-5 py-2 rounded-lg shadow-sm shadow-transparent  border border-[#424242]   duration-200 transform hover:-translate-y-0.5  ">
					Разработал Асим Махмудов
				</Description>
			</div>
		</footer>
	);
};

export default Footer;
