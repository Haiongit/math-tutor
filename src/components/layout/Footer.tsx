"use client";

import { Information } from "@/config/information";
import { Routes } from "@/lib/routes/routes";
import { Location, Sms } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer bg-white border-[1px] border-[#919EAB3D]">
      <div className="md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto pt-16 pb-8 px-6 text-white">
        <div className="grid lg:grid-cols-6 gap-1 grid-cols-1 md:grid-cols-3 gap-y-6">
          <div className="col-span-1 md:col-span-3 lg:max-w-2/3">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={182}
              height={48}
            />
            <div className="mt-8 text-base">
              {t("footer.description")}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-xl font-semibold">{t("footer.account")}</div>
            <Link href={Routes.home} className="md:mt-6 cursor-pointer hover:text-primary-main hover:underline text-zinc-400">
              {t("footer.explore")}
            </Link>
            <Link href={Routes.home} className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400">
              {t("footer.cart")}
            </Link>
            <Link href={Routes.home} className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400">
              {t("footer.favorites")}
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-xl font-semibold">MathTutor</div>
            <Link href={Routes.contact} className="md:mt-6 cursor-pointer hover:text-primary-main hover:underline text-zinc-400">
              {t("footer.contact")}
            </Link>
            <Link href={Routes.instructors} className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400">
              {t("footer.instructors")}
            </Link>
            <Link href={Routes.faq}  className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400">
              {t("footer.faq")}
            </Link>
            <Link href={Routes.abouts} className="cursor-pointer hover:text-primary-main hover:underline text-zinc-400">
              {t("footer.aboutUs")}
            </Link>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="text-xl font-semibold">{t("footer.contact")}</div>
            <div className="md:mt-6">
              <div className="text-xs text-zinc-400">{t("footer.phone")}</div>
              <Link href="tel:+84 345 622 999" className="text-lg font-semibold">{Information.phone}</Link>
            </div>
            <div className="flex gap-2 items-center w-[217px]">
              <Sms size="18" color="#0F46C4" variant="Bold" />
              <div className="w-max">{Information.email}</div>
            </div>
            <div className="flex gap-2 items-center w-[217px]">
              <Location size="18" color="#0F46C4" variant="Bold" />
              <div>{Information.address}</div>
            </div>
          </div>
        </div>
        <div className="my-8 w-full h-[1px] bg-[#919EAB3D]"></div>
        <div className="lg:flex items-center justify-between">
          <div className="text-sm">{t("footer.copyright")} © 2025 <span className="font-semibold">MathTutor</span>. All Rights Reserved</div>
          <div className="text-zinc-400 text-sm">
            <Link href={Routes.termOfUse} className="hover:text-primary-main hover:underline">{t("footer.termsOfUse")}</Link>
            <Link href={Routes.policy} className="ml-8 hover:text-primary-main hover:underline">{t("footer.privacyPolicy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
