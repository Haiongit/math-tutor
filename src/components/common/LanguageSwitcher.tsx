"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { ArrowDown2 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: "vi", name: t("language.vietnamese"), flag: "/vietnam.svg" },
    { code: "en", name: t("language.english"), flag: "/united-states.svg" },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-2 hover:bg-transparent">
          <div className="flex items-center gap-2">
            <Image
              src={currentLanguage.flag}
              alt={currentLanguage.name}
              width={28}
              height={20}
              className="rounded-sm"
            />
            <ArrowDown2 size={12} color="#71717B" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Image
              src={language.flag}
              alt={language.name}
              width={20}
              height={14}
              className="rounded-sm"
            />
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

