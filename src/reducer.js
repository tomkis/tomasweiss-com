import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

export const FORM_SUBMITTED = "FORM_SUBMITTED";

const submitted = (state = false, { type }) =>
  type === FORM_SUBMITTED ? true : state;

export default combineReducers({
  form,
  submitted
});
