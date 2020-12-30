import { schemaHeaderData } from "./schemaHeaderData";
import { schemaFooterData } from "./schemaFooterData";

import { schemaContentBanner01 } from "./content/schemaContentBanner01";
import { schemaContentCard4 } from "./content/schemaContentCard4";
import { schemaContentTextBox01 } from "./content/schemaContentTextBox01";
import { schemaContentLogin } from "./content/schemaContentLogin";
import { schemaContentTextBox02 } from "./content/schemaContentTextBox02";
import { schemaContentTextBox03 } from "./content/schemaContentTextBox03";
import { schemaContentTextBox04 } from "./content/schemaContentTextBox04";
import { schemaContentTestimonial01 } from "./content/schemaContentTestimonial01";
import { schemaContentStatistic01 } from "./content/schemaContentStatistic01";
import { schemaContentLogos01 } from "./content/schemaContentLogos01";
import { schemaContentBannerNews01 } from "./content/schemaContentBannerNews01";
import { schemaContentBannerNews02 } from "./content/schemaContentBannerNews02";

export const schemaHeader = schemaHeaderData;

export const schemaContent = [
  schemaContentBanner01,

  schemaContentTextBox01, //СӨХ-ийн текст

  schemaContentLogin, //СӨХ болон Оршин суугч Login-дох

  schemaContentTextBox02, //СӨХ-ийн портал

  schemaContentTextBox03, //Бид юу хийдэг вэ?

  schemaContentCard4, //4 карт хэлбэртэй текст

  schemaContentTestimonial01, //Эмэгтэйн хэлж буй үг

  schemaContentStatistic01, //Тоонууд

  schemaContentLogos01, //Логонууд

  schemaContentBannerNews01,

  schemaContentTextBox04,

  // schemaContentBannerNews02,
];

export const schemaFooter = schemaFooterData;
