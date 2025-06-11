import {useTranslation} from "react-i18next";

export default function Languages() {
	const {t} = useTranslation();
	return (
		<>
			<section>
				<p className="text-red-400 flex justify-center items-center font-semibold text-2xl mb-12">
					{t('languagesIKnow')}
				</p>
				<table>
					<tbody className="flex flex-col gap-y-6 text-left">
					<tr className="flex gap-x-[200px]">
						<th className="text-red-400 text-2xl font-normal block w-[180px]">{t('languageLevels.english')}</th>
						<td className="text-red-400 text-2xl">
							{t('languageLevels.b2')}
						</td>
					</tr>
					<tr className="flex gap-x-[200px]">
						<th className="text-red-400 text-2xl font-normal block w-[180px]">
							{t('languageLevels.czech')}
						</th>
						<td className="text-red-400 text-2xl">
							{t('languageLevels.b1')}
						</td>
					</tr>
					<tr className="flex gap-x-[200px]">
						<th className="text-red-400 text-2xl font-normal block w-[180px]">
							{t('languageLevels.turkish')}
						</th>
						<td className="text-red-400 text-2xl">
							{t('languageLevels.c1')}
						</td>
					</tr>
					<tr className="flex gap-x-[200px]">
						<th className="text-red-400 text-2xl block w-[180px]  font-normal">
							{t('languageLevels.azerbaijani')}
						</th>
						<td className="text-red-400 text-2xl">
							{t('languageLevels.motherTongue')}
						</td>
					</tr>
					</tbody>
				</table>
			</section>
		</>
	)
}
