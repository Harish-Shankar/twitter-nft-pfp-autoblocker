import React from "react";
import { render } from "react-dom";
import { Settings, settingsDefaults } from "../settingTypes";
import App from "./App";

chrome.storage.sync.get((settings) => {
  const root = document.querySelector("#root");

  render(
    <App initialSettings={{ ...settingsDefaults, ...settings } as Settings} />,
    root
  );
});
