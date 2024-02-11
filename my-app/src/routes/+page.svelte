<script>
    import "$lib/tailwind.css";
    import ColorModeToggleButton from "$components/ColorModeToggleButton.svelte";
    import BaseContainer from "$lib/layout/BaseContainer.svelte";
</script>

<BaseContainer>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <a href="/login">/login</a>
    <div class="grid grid-cols-5 gap-5">
        <img src="https://picsum.photos/536/354" alt="tmpimage" />
        <img src="https://picsum.photos/536/344" alt="tmpimage" />
        <img src="https://picsum.photos/536/344" alt="tmpimage" />
        <img src="https://picsum.photos/536/344" alt="tmpimage" />
        <img src="https://picsum.photos/536/344" alt="tmpimage" />
        <img src="https://picsum.photos/536/334" alt="tmpimage" />
    </div>
    <div
        class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
        <h3
            class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
        >
            Writes Upside-Down
        </h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
        </p>
    </div>
</BaseContainer>

<style>
</style>
