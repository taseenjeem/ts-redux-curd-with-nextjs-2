"use client";

import React from "react";
import { store } from "../libs/redux/store.ts";
import { Provider } from "react-redux";

const ReduxStoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxStoreProvider;
