import LandingApp from "@/components/landing/App";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Gocker</title>
			</Head>
			<LandingApp />
		</>
	);
}
