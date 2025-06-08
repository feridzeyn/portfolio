import me from "../assets/images/Me.jpg"
export default function About() {
	return (
		<>
		<div className="border-4 border-red-900 flex items-center justify-evenly ">
			<div className="w-[500px]">
				<p className="text-red-400 text-2xl py-8">
					Mən Fərid Zeynalzadə, Azərbaycan Texniki Universitetinin məzunuyam. 2024-cü ilin iyun ayından etibarən frontend sahəsində inkişaf etməyə başlamışam. Bu yolda mənə əsas bilikləri qazandıran və istiqamət göstərən müəllimim <a className="underline hover:no-underline" target={"_blank"} href={"https://e-mammadli.com/about"}>
					Elgün Məmmədli
				</a>  olub.
					Öyrənmə prosesimi yalnız kursla məhdudlaşdırmamış, self-study vasitəsilə öz üzərimdə daim çalışaraq biliklərimi genişləndirmişəm. Təcrübəmi "MyMentor Internship and Development Agency"-də keçmişəm. Orada bir neçə kiçik və bir böyük komanda layihəsində iştirak etmişəm. Bu layihələr mənə real iş mühiti, komanda işi və layihə idarəçiliyi sahəsində mühüm təcrübə qazandırıb.

					Hazırda frontend texnologiyalarında biliklərimi daha da dərinləşdirir və istifadəçi yönümlü, funksional veb interfeyslər yaratmaq üçün daim öyrənməyə davam edirəm.
				</p>
			</div>
			<div className="border-4 border-red-500 w-[500px] h-[500px] flex items-center justify-center">
				<img src={me} alt="myPicture" className="rounded-full w-[400px] h-[400px] hover:w-[480px] hover:h-[480px] transition-hover duration-1000" />
			</div>
		</div>
		</>
	)
}
