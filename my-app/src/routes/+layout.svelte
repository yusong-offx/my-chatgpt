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
