<script>
    import 'iconify-icon';
    import '../app.css';
    import ThemeToggle from '$lib/components/utilities/ThemeToggle.svelte';
</script>

<div class="w-screen h-screen bg-white dark:bg-stone-900 transition duration-150">
    <div class="fixed top-0 right-0 m-4">
        <ThemeToggle />
    </div>
    <slot />
</div>
