import { TOGGLE_ABOUT_ME_MODAL } from "../constants";

const initialAboutMeState = {
  toggleAboutMeModal: false,
};

export const aboutMeReducer = (state = initialAboutMeState, action) => {
  switch (action.type) {
    case TOGGLE_ABOUT_ME_MODAL:
      return { ...state, toggleAboutMeModal: !state.toggleAboutMeModal };
    default:
      return state;
  }
};
