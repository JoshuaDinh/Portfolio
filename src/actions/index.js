import { TOGGLE_ABOUT_ME_MODAL, MOBILE_NAV } from "../constants";

export const toggleAboutMeModal = () => {
  return {
    type: TOGGLE_ABOUT_ME_MODAL,
  };
};

export const toggleMobileNav = () => {
  return {
    type: MOBILE_NAV,
  };
};
