<script>
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import Navigator from "$lib/components/layout/Navigator.svelte";
</script>

<div class="main_layout_container">
    <div>
        <Header />
        <Navigator />
    </div>

    <main><slot /></main>

    <Footer />
</div>

<style>
    .main_layout_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
    }
</style>
