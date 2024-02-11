<script>
    import "$lib/tailwind.css";
    import { colorModetoggle, colorMode } from "$stores/ColorMode.js";
</script>

<svelte:window />
<svelte:document />
<div>
    <button on:click={colorModetoggle}>
        Mode Change; Current mode is {$colorMode}
    </button>
</div>
