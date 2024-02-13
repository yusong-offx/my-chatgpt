<script>
    import Navigator from "$lib/components/layout/Navigator.svelte";
</script>

<svelte:head>
    <title>My App</title>
</svelte:head>

<Navigator />
<h1>This is header</h1>

<style>
    :global(*) {
        transition: all 1s;
    }

    /* light mode */
    :global(html) {
        background-color: #fff;
        color: #000;
        --test-color: red;
    }

    /* dark mode */
    :global(html.dark) {
        background-color: #000;
        color: #fff;
    }
</style>
