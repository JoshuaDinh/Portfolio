import { TOGGLE_ABOUT_ME_MODAL } from "../constants";

export const toggleAboutMeModal = () => {
  return {
    type: TOGGLE_ABOUT_ME_MODAL,
    payload: true,
  };
};
