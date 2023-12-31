import i18next from "i18next";

export const ChangeLanguageDocumentAttributes = () => {
	document.documentElement.dir = i18next.dir();
	document.documentElement.lang = i18next.language;
};
export const ChangeLanguage = (langKey =  "ar" | "en") => {
	i18next
		.changeLanguage(langKey)
		.then(() => ChangeLanguageDocumentAttributes());
};