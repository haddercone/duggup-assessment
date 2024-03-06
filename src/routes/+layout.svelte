<script>
    import "../app.css";
    import Header from "$lib/components/header.svelte";
</script>

<div class="md:mx-auto md:w-11/12 mx-2">
    <Header />
    <slot />
</div>