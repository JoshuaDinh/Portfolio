import { TOGGLE_ABOUT_ME_MODAL } from "../constants";
import { MOBILE_NAV } from "../constants";

export const toggleAboutMeModal = () => {
  return {
    type: TOGGLE_ABOUT_ME_MODAL,
  };
};

export const mobileNav = () => {
  return {
    type: MOBILE_NAV,
  };
};
