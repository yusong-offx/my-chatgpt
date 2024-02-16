<script>
    import { onMount } from "svelte";

    let trackingNumberClass;
    let dongClass;
    let hoClass;

    onMount(() => {
        randomLocate();
    });

    const randomLocate = () => {
        trackingNumberClass.style.top = `${ranNumber()}%`;
        trackingNumberClass.style.left = `${ranNumber()}%`;
        dongClass.style.top = `${ranNumber()}%`;
        dongClass.style.left = `${ranNumber()}%`;
        hoClass.style.top = `${ranNumber()}%`;
        hoClass.style.left = `${ranNumber()}%`;
    };

    const ranNumber = () => {
        return Math.floor(Math.random() * 80);
    };
</script>

<div class="container1">
    <button on:click={randomLocate}>Relocate</button>

    <div class="mockParcel">
        <h1 bind:this={trackingNumberClass} class="trackingNumber">
            9999-9999-9999-9999
        </h1>
        <h1 bind:this={dongClass} class="dong">103동</h1>
        <h1 bind:this={hoClass} class="ho">203호</h1>
    </div>
</div>

<style>
    .container1 {
        background-color: rgb(55, 55, 148);
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: center;
    }

    button {
        margin: 1rem;
    }

    .mockParcel {
        background-color: gray;
        height: 500px;
        width: 90%;
        margin: auto;
        padding: 1rem;
        border: 1px solid red;
        display: flex;
    }

    h1 {
        display: inline-block;
        position: relative;
    }
</style>
