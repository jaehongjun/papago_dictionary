import {
  TRANSLATE,
  TRANSLATE_SUCCEEDED,
  TRANSLATE_REQUESTED,
  TRANSLATE_FAILED
} from "./action";
import { STATUS } from "../../../constants/Status";

const initTranslate = {
  srcLangType: "",
  tarLangType: "",
  translatedText: ""
};
const initialState = {
  translate: {
    status: STATUS.INDEX,
    ...initTranslate
  }
};

function translate(state = initialState, action) {
  switch (action.type) {
    case TRANSLATE_REQUESTED:
      return {
        ...state,
        translate: {
          status: STATUS.REQUESTED,
          initTranslate
        }
      };
    case TRANSLATE_SUCCEEDED:
      return {
        ...state,
        translate: { status: STATUS.SUCCEEDED, ...action.payload }
      };
    case TRANSLATE_FAILED:
      return {
        ...state,
        translate: { status: STATUS.FAILED, ...initTranslate }
      };
    default:
      return state;
  }
}

export default translate;
