import { useState, Suspense } from "react";
import i18n from "i18next";
// import { useTranslation, initReactI18next, Trans } from "react-i18next";
import { initReactI18next, useTranslation, Trans } from "react-i18next";
import "./App.css";

const translationsEn = {
  welcome: "Welcome!!",
  sample: "Sample <bold><italics>text</italics></bold>.",
  changed: "You habe changed the language {{count}} time",
  changed_plural: "You habe changed the language {{count}} times",
};
const translationsFr = {
  welcome: "Bienvenue!!",
  sample: "Sample <bold><italics>FR</italics></bold>.",
  changed: "You habe changed the language {{count}} time",
};
const translationsKr = { welcome: "안녕하세요!!" };

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationsEn },
    fr: { translation: translationsFr },
    ko: { translation: translationsKr },
  },
  lng: "ko",
  fallbackLng: "ko",
  interpolation: { escapeValue: false },
});
// const translationsEn = {
//   welcome: "Welcome!",
//   "sample-text": "Sample <bold><italic>text</italic></bold>.",
//   changed: "You have changed the language {{count}} time",
//   changed_plural: "You have changed the language {{count}} times",
// };

// const translationsFr = {
//   welcome: "Bienvenue!",
//   "sample-text": "Exemple de <bold><italic>texte</italic></bold>.",
//   changed: "Vous avez changé la langue {{count}} fois",
// };

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources: {
//       en: { translation: translationsEn },
//       fr: { translation: translationsFr },
//     },
//     lng: "en",
//     fallbackLng: "en",
//     interpolation: { escapeValue: false },
//   });

const App = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <Suspense fallback="Loading">
      <div className="App">
        <header className="App-header">
          <h1>{t("welcome")}</h1>
          <p>
            <Trans components={{ bold: <strong />, italics: <i /> }}>
              sample
            </Trans>
          </p>

          <p>{t("changed", { count })}</p>
          <select name="language" onChange={onChange}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="ko">한국어</option>
          </select>
        </header>
      </div>
    </Suspense>
  );
};

export default App;
