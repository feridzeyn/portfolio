
export default function Languages() {
	return (
		<>
			<section>
				<p className="text-red-400 flex justify-center items-center font-semibold text-2xl mb-12">
					Bildiyim dillər
				</p>
				<table>
					<tbody className="flex flex-col gap-y-6">
					<tr className="flex gap-x-[150px]">
						<th className="text-red-400 text-2xl font-normal block w-[150px]">English</th>
						<td className="text-red-400 text-2xl">
							B2
						</td>
					</tr>
					<tr className="flex gap-x-[150px]">
						<th className="text-red-400 text-2xl font-normal block w-[150px]">
							Czech
						</th>
						<td className="text-red-400 text-2xl">
							B1
						</td>
					</tr>
					<tr className="flex gap-x-[150px]">
						<th className="text-red-400 text-2xl font-normal block w-[150px]">
							Turkish
						</th>
						<td className="text-red-400 text-2xl">
							C1
						</td>
					</tr>
					<tr className="flex gap-x-[150px]">
						<th className="text-red-400 text-2xl block w-[150px]  font-normal">
							Azerbaijani
						</th>
						<td className="text-red-400 text-2xl">
							Mother Tongue
						</td>
					</tr>
					</tbody>
				</table>
			</section>
		</>
	)
}
