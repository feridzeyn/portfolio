import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: ['az', 'en', 'cz'],
		debug: false,
		backend: {
			loadPath: '/locales/{{lng}}.json', // public/locales/en.json və s.
		},

	});

export default i18n;
