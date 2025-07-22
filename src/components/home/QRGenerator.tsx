"use client";
import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import { IoQrCodeOutline } from "react-icons/io5";
import { TitleComponent } from "../ui/text/TitleComponent";
import { IoMdClose } from "react-icons/io";
import { MdOutlineQrCode } from "react-icons/md";
import { Description } from "../ui/text/Description";
import scss from "./QRGenerator.module.scss";
import { toast, Toaster } from "sonner";

export default function QRGenerator() {
	const [value, setValue] = useState("");
	const [showQR, setShowQR] = useState(false);
	const [fgColor] = useState("#000000");
	const [bgColor] = useState("#ffffff");
	const qrRef = useRef<HTMLDivElement | null>(null);

	const downloadQR = () => {
		if (!qrRef.current) return;

		const svg = qrRef.current.querySelector("svg");
		if (!svg) return;

		const serializer = new XMLSerializer();
		const svgString = serializer.serializeToString(svg);
		const svgBlob = new Blob([svgString], {
			type: "image/svg+xml;charset=utf-8",
		});
		const url = URL.createObjectURL(svgBlob);

		const link = document.createElement("a");
		link.href = url;
		link.download = "qr-code.svg";
		link.click();

		URL.revokeObjectURL(url);
	};

	const handleGenerate = () => {
		if (!value.trim()) {
			toast.error("Пожалуйста, введите ссылку или текст");
			return;
		}
		setShowQR(true);
	};

	return (
		<div className={scss.Welcome}>
			<Toaster position="top-center" />
			<div className="container">
				<div className="flex relative py-10 z-30 flex-col md:flex-row items-center justify-between md:gap-5 gap-10">
					<div className="flex flex-col items-start gap-5 w-full max-w-[550px]">
						<TitleComponent className="text-[30px] md:text-[45px] text-color-pulse">
							Добро пожаловать!
						</TitleComponent>
						<Description className="text-white leading-[145%]">
							Создавайте уникальные QR-коды за считанные секунды. Введите текст,
							ссылку или любую другую информацию — и мгновенно получите
							результат. Сохраните QR-код или используйте его прямо на сайте.
						</Description>

						<div className="flex justify-start items-center w-full max-w-[470px] bg-[#202020] rounded-[20px] py-2 px-2 border border-[#3a3a3a]">
							<input
								type="text"
								placeholder="Введите ссылку или текст"
								className="w-full  px-2   bg-transparent   text-white shadow-sm outline-none     transition-all duration-200"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
							<button
								onClick={() => {
									setValue("");
									setShowQR(false);
								}}
								className="  px-2 py-2 bg-[#4643d4] rounded-[500%]   text-white shadow-sm outline-none    transition-all duration-200">
								<IoMdClose />
							</button>
						</div>

						<button
							onClick={handleGenerate}
							className="bg-blue-600 w-full  md:max-w-[200px] max-w-full flex justify-center items-center gap-2 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-transparent hover:shadow-lg hover:shadow-sky-500 duration-200 transform hover:-translate-y-0.5">
							Сгенерировать <MdOutlineQrCode />
						</button>
					</div>

					{showQR && (
						<div className="flex flex-col items-center">
							<div
								ref={qrRef}
								className="mt-5 bg-white p-4 rounded-xl shadow-lg flex justify-center">
								<QRCode value={value} bgColor={bgColor} fgColor={fgColor} />
							</div>

							<div className="mt-4 text-center">
								<button
									onClick={downloadQR}
									className="bg-green-600 flex items-center gap-2 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm shadow-transparent hover:shadow-md hover:shadow-green-400 duration-200 transform hover:-translate-y-0.5">
									Скачать QR
								</button>
							</div>
						</div>
					)}

					{!showQR && (
						<div className="w-full flex justify-center items-center max-w-[250px] h-[250px] relative p-5">
							<div className="absolute rounded-sm top-0 left-0 w-14 h-14 border-t-2 border-l-2 border-white"></div>
							<div className="absolute rounded-sm top-0 right-0 w-14 h-14 border-t-2 border-r-2 border-white"></div>
							<div className="absolute rounded-sm bottom-0 left-0 w-14 h-14 border-b-2 border-l-2 border-white"></div>
							<div className="absolute rounded-sm bottom-0 right-0 w-14 h-14 border-b-2 border-r-2 border-white"></div>

							<div className="bg-white rounded-md">
								<h1 className="text-[200px] text-black ">
									<IoQrCodeOutline />
								</h1>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
