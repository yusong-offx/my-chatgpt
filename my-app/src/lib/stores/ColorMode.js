import { writable } from 'svelte/store';

export const colorMode = writable(
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
);

export const colorModetoggle = () => {

    colorMode.update((mode) => {
        mode
            ? document.documentElement.classList.remove("dark")
            : document.documentElement.classList.add("dark");
        return !mode
    });
}