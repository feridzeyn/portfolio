import CodeTypingEffect from "./CodeTypingEffect.tsx";

export default function HomeHeader() {
	return (
		<>

			<div className="flex flex-col md:flex-row justify-between items-center h-[400px]">
				<div>
					<p className="text-3xl md:text-4xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-400 text-center leading-snug">Front-End <br/> Developer
					</p>
				</div>
				<div>
					<CodeTypingEffect/>
				</div>
			</div>
		</>
	)
}
