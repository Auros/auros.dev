<script>
    import { onMount } from 'svelte';
    import 'iconify-icon';
    import '../app.css';
    import ThemeToggle from '$lib/components/utilities/ThemeToggle.svelte';

    onMount(updateBrowserTheme);

    function toggleCurrentTheme() {
        // If on the server
        if (typeof window === 'undefined')
            return;

        localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light'
        updateBrowserTheme()
    }

    function updateBrowserTheme() {
        // If on the server
        if (typeof window === 'undefined')
            return;

        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

</script>

<div class="w-screen h-screen bg-white dark:bg-stone-900 transition duration-150">
    <div class="fixed top-0 right-0 m-4">
        <ThemeToggle />
    </div>
    <slot />
</div>
