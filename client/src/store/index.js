import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
export const GlobalStoreContext = createContext({});
export const GlobalStoreActionType = {
  CHANGE_LISTING_NAME: "CHANGE_LISTING_NAME",
  CLOSE_CURRENT_LISTING: "CLOSE_CURRENT_LISTING",
  CREATE_NEW_LISTING: "CREATE_NEW_LISTING",
  OPEN_A_LIST: "OPEN_A_LIST",
  CLOSE_A_LIST: "CLOSE_A_LIST",
  CHANGE_VIEW: "CHANGE_VIEW",
  CHANGE_SORT_ORDER: "CHANGE_SORT_ORDER",
};
