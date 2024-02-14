import Link from "next/link";

export default function Footer({t}: {t: any}) {
  return (
    <div className="mx-auto w-full pt-12 mb-8">
      <div className="flex items-center space-x-5">
        <div className="flex-1 h-px bg-white/20"></div>
        <div className="text-3xl font-bold text-primary uppercase">NullMan</div>
        <div className="flex-1 h-px bg-white/20"></div>
      </div>
      <div className="col-span-4 text-center flex flex-col lg:flex-row justify-between items-center mt-4">
        <p className="text-zinc-300 font-normal">© {new Date().getFullYear()} nullman.dev {t("footer.desc")}</p>
        <p className="text-zinc-400 font-normal">
          {t("footer.made")}
        </p>
      </div>
    </div>
  );
}
