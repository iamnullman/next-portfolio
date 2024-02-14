import "../assets/css/index.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "components/Layout";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useEffect } from "react";
import 'tippy.js/dist/tippy.css';
import "swiper/css";
import "swiper/css/pagination";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("../assets/locales/en.json")
      },
      tr: {
        translation: require("../assets/locales/tr.json")
      },
      "TR-tr": {
        translation: require("../assets/locales/tr.json")
      }
    },
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });
export default function App({ Component, pageProps }: AppProps) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <main>
      <Layout t={t} i18n={i18n}>
        <Component {...pageProps} t={t} />
      </Layout>
    </main>
  );
}
