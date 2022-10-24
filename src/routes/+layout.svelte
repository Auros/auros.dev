<script>
    import '../app.css';
    import { fly } from 'svelte/transition';
    import ThemeToggle from '$lib/components/utilities/ThemeToggle.svelte';
</script>

<svelte:head>
    <title>Auros | Software Developer</title>
</svelte:head>

<div class="w-screen h-screen bg-neutral-100 dark:bg-stone-900 transition duration-150">
    <div class="fixed top-0 right-0 m-4">
        <ThemeToggle />
    </div>
    <div in:fly="{{ y: -50, duration: 250, delay: 300 }}" out:fly="{{ y: -50, duration: 250 }}">
        <slot />
    </div>
</div>