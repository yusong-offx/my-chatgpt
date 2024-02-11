import { writable } from "svelte/store";
import { browser } from "$app/environment";

const isDarkMode = () => {
    console.log("In init", browser);
    const windowLocalStorage = window.localStorage;
    const currentColorMode = windowLocalStorage.getItem("color-mode");
    if (currentColorMode == null) {
        const osColorMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        windowLocalStorage.setItem("color-mode", osColorMode ? "dark" : "light");
        return osColorMode;
    } else {
        return currentColorMode === "dark";
    }
    // if (browser) {
    // }
    // return false;
};

export const colorMode = writable(false);

export const colorModetoggle = () => {
    colorMode.update((isDarkMode) => {
        console.log("In toggle function", browser);
        const windowLocalStorage = window.localStorage;
        const documentElements = document.documentElement;
        if (isDarkMode) {
            documentElements.classList.remove("dark");
            windowLocalStorage.setItem("color-mode", "light");
        } else {
            documentElements.classList.add("dark");
            windowLocalStorage.setItem("color-mode", "dark");
        }
        return !isDarkMode;
    });
};

