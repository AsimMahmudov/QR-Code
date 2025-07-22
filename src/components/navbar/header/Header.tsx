import { TitleComponent } from "@/components/ui/text/TitleComponent";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
	return (
		<header className="bg-[#1f1f1f] sticky top-0 left-0 w-full border-transparent z-50 border border-b-[#424242] py-3">
			<div className="container flex justify-between items-center">
				<TitleComponent className="text-white md:text-[24px] text-[22px] ">
					Asim<span className="text-blue-500 ">Dev</span>
				</TitleComponent>

				<Link href={"https://t.me/MahmudovAsim"} target={"_blank"}>
					<button className="bg-blue-600 flex items-center gap-2 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-transparent hover:shadow-lg hover:shadow-sky-500   duration-200 transform hover:-translate-y-0.5  ">
						Связаться <FaTelegramPlane size={18} />
					</button>
				</Link>
			</div>
		</header>
	);
};

export default Header;
