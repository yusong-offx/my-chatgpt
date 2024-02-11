<script>
    import "$lib/tailwind.css";
    import { colorModetoggle, colorMode } from "$stores/ColorMode";

    if ($colorMode) {
        document.documentElement.classList.add("dark");
    }
</script>

<div>
    <button on:click={colorModetoggle}>
        Mode Change; Current mode is {$colorMode}
    </button>
</div>
