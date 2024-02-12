<script>
    import { colorMode } from "$lib/stores/ColorMode.js";
</script>

<div>
    <button
        type="button"
        on:click={colorMode.toggle}
        class="bg-slate-600 text-slate-950 dark:bg-white dark:text-slate-950"
    >
        Mode Change; Current mode is {$colorMode}
    </button>
</div>
