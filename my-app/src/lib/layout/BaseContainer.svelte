<script>
    import "$lib/tailwind.css";
    import ColorModeToggleButton from "$lib/components/ColorModeToggleButton.svelte";
    import { colorMode } from "$stores/ColorMode.js";
</script>

<svelte:window />
<div class="p-20">
    <ColorModeToggleButton />
    <h1>{$colorMode}</h1>
    <slot />
</div>
