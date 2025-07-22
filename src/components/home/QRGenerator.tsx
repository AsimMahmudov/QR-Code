// components/QRGenerator.tsx
"use client";
import { useRef, useState } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator() {
	const [value, setValue] = useState("");
	const [showQR, setShowQR] = useState(false);
	const [fgColor, setFgColor] = useState("#000000");
	const [bgColor, setBgColor] = useState("#ffffff");
	const qrRef = useRef<HTMLDivElement | null>(null);

	const downloadQR = () => {
		const svg = qrRef.current;
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
			alert("Пожалуйста, введите ссылку или текст");
			return;
		}
		setShowQR(true);
	};

	return (
		<div className="p-6 max-w-xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>

			<input
				type="text"
				placeholder="Введите ссылку или текст"
				className="border p-2 w-full mb-4 text-black"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			<div className="flex gap-2">
				<button
					onClick={handleGenerate}
					className="bg-blue-500 text-white px-4 py-2 rounded">
					Сгенерировать
				</button>
				<button
					onClick={() => {
						setValue("");
						setShowQR(false);
					}}
					className="bg-gray-400 text-white px-4 py-2 rounded">
					Очистить
				</button>
			</div>

			{showQR && (
				<div className="flex gap-4 mb-4">
					<div>
						<label className="block text-sm font-medium mb-1">Цвет кода</label>
						<input
							type="color"
							value={fgColor}
							onChange={(e) => setFgColor(e.target.value)}
						/>
					</div>
					<div>
						<label className="block text-sm font-medium mb-1">Фон</label>
						<input
							type="color"
							value={bgColor}
							onChange={(e) => setBgColor(e.target.value)}
						/>
					</div>
				</div>
			)}

			{showQR && (
				<div className="mt-6 bg-white p-4 rounded shadow flex justify-center">
					<QRCode
						value={value}
						bgColor={bgColor}
						fgColor={fgColor}
					/>
				</div>
			)}

			{showQR && (
				<div className="mt-4 text-center">
					<button
						onClick={downloadQR}
						className="bg-green-500 text-white px-4 py-2 rounded">
						Скачать QR
					</button>
				</div>
			)}
		</div>
	);
}
