<script>
    import "$lib/tailwind.css";
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import { colorMode } from "$lib/stores/ColorMode.js";
    import { onMount } from "svelte";

    onMount(() => {
        $colorMode
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
    });
</script>

<Header />
<h1>This layout</h1>
<main>
    <slot />
</main>
<Footer />

<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: all 0.1ms;
    }
    :global(html) {
        font-size: 16px;
        font-family: "Inter", sans-serif;
        color: #000;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
    }
    main {
        width: 100%;
        height: 100%;
    }
</style>
