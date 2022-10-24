<script lang="ts">
    import '../app.css';
    import { fly } from 'svelte/transition';
    import type { PageData } from './$types';
    import Navigator from '$lib/components/Navigator.svelte';
    import ThemeToggle from '$lib/components/utilities/ThemeToggle.svelte';

    export let data: PageData;
</script>

<svelte:head>
    <title>Auros | Software Developer</title>
</svelte:head>

<div class="transition duration-150">
    {#if data.pathName !== '/'}
        <Navigator />
    {/if}
    <div class="fixed top-16 right-0 m-4 z-50 sm:top-0">
        <ThemeToggle />
    </div>
    {#key data.pathName}
        <div
            in:fly={{ duration: 400, delay: 400 }}
            class="m-4 text-neutral-900 dark:text-white space-y-4 selection:bg-cyan-400 dark:selection:bg-purple-600 selection:text-black dark:selection:text-white"
        >
            <slot />
        </div>
    {/key}
</div>

<style>
    :global(html) {
        background-color: #f5f5f5;
        transition: background-color 0.15s;
    }
    :global(html.dark) {
        background-color: #1c1917;
    }
</style>
