import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
export const GlobalStoreContext = createContext({});
export const GlobalStoreActionType = {
  CHANGE_LISTING_NAME: "CHANGE_LISTING_NAME",
  CLOSE_CURRENT_LISTING: "CLOSE_CURRENT_LISTING",
  CREATE_NEW_LISTING: "CREATE_NEW_LISTING",
};
