import { writable } from "svelte/store";

function createColorMode() {
    const windowLocalStorage = window.localStorage;
    const documentElements = document.documentElement;

    // Local Storage Color Mode
    const currentColorMode = windowLocalStorage.getItem("color-mode");

    // If first time visit, get OS Color Mode
    const osColorMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const setColorMode = osColorMode ? "dark" : "light"

    // Init Color Mode
    let initColorMode;

    if (currentColorMode == null) {
        windowLocalStorage.setItem("color-mode", setColorMode);
        initColorMode = setColorMode;
    } else {
        initColorMode = currentColorMode;
    }

    const { subscribe, set, update } = writable(initColorMode);

    return {
        subscribe,
        toggle: () => update((prev) => {
            const isDarkMode = prev === "dark";

            if (isDarkMode) {
                documentElements.classList.remove("dark");
                windowLocalStorage.setItem("color-mode", "light");
            } else {
                documentElements.classList.add("dark");
                windowLocalStorage.setItem("color-mode", "dark");
            }

            return isDarkMode ? "light" : "dark";
        }),
    }
}

export const colorMode = createColorMode();
