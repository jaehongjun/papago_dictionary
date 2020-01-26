export const TRANSLATE = "translate/TRANSLATE";
export const TRANSLATE_REQUESTED = "translate/TRANSLATE_REQUESTED";
export const TRANSLATE_SUCCEEDED = "translate/TRANSLATE_SUCCEEDED";
export const TRANSLATE_FAILED = "translate/TRANSLATE_FAILED";

export const actions = {
  index: payload => {
    console.log("index payload : ", payload);
    return {
      type: TRANSLATE,
      payload
    };
  }
};
