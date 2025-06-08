
import next from "../../../assets/images/nextjs-icon.svg";
import typescript from "../../../assets/images/Typescript_logo.svg.png";

export default function CurrentlyLearning() {
	return (
		<>

			<section className="">
				<p className="text-red-400  text-2xl mb-12">Hal-hazırda
					inkişaf etdirdiklərim və öyrəndiklərim :</p>
				<div className="">
					<p className="flex items-center gap-x-6 mb-8">
						<img src={next} alt="Tailwind CSS" className="w-12 h-12"/>
						<span className="text-red-400 text-3xl">Next.js</span></p>
					<p className="flex items-center gap-x-6 my-6">
						<img src={typescript} alt="Tailwind CSS" className="w-12 h-12"/>
						<span className="text-red-400 text-3xl">Advanced TypeScript</span>
					</p>
				</div>

			</section>
		</>
	)
}
