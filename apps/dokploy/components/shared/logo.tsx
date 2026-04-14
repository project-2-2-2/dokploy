import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	logoUrl?: string;
}

export const Logo = ({ className = "size-14", logoUrl }: Props) => {
	if (logoUrl) {
		return (
			// biome-ignore lint/performance/noImgElement: this is for dynamic logo loading
			<img
				src={logoUrl}
				alt="Organization Logo"
				className={cn(className, "object-contain rounded-sm")}
			/>
		);
	}

	return (
		// biome-ignore lint/performance/noImgElement: this is the default Gocker logo
		<img
			src="/gocker-logo.png"
			alt="Gocker Logo"
			className={cn(className, "object-contain rounded-sm")}
		/>
	);
};
