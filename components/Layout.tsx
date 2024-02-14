import Footer from "./Navigation/Footer";
import Header from "./Navigation/Header";
export default function Layout({ children, t, i18n }: { children: React.ReactNode, t: any, i18n: any}) {
  return (
    <div className="w-full h-full transition-all duration-300 sm:px-32 mx-auto overflow-hidden">
      <Header t={t} i18n={i18n}/> {children} <Footer t={t}/>
    </div>
  );
}
