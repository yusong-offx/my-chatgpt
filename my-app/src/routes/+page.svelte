<script>
    import "../app.css";

    $: a = 1;
    const myFunction = () => {
        a += 1;
    };
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<div class="grid grid-cols-5 gap-5">
    <img src="https://picsum.photos/536/354" alt="tmp image" />
    <img src="https://picsum.photos/536/344" alt="tmp image" />
    <img src="https://picsum.photos/536/344" alt="tmp image" />
    <img src="https://picsum.photos/536/344" alt="tmp image" />
    <img src="https://picsum.photos/536/344" alt="tmp image" />
    <img src="https://picsum.photos/536/334" alt="tmp image" />
</div>
<h2>Number is {a}</h2>
<button on:click={myFunction}>Click Me!</button>
<p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
</style>
