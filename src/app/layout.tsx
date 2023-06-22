import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "He",
	description: "Creating by Revchenko Dmitry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className + " text-gray-700"}>
				<Header />
				<div className="max-w-[1180px] mx-auto px-2 pt-5">{children}</div>
			</body>
		</html>
	);
}
