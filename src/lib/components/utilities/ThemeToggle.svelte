<script lang="ts">
    import { onMount } from 'svelte';

    function toggleCurrentTheme() {
        // If on the server
        if (typeof window === 'undefined') return;

        localStorage.theme = localStorage.theme === 'light' ? 'dark' : 'light';
        updateBrowserTheme();
    }

    function updateBrowserTheme() {
        // If on the server
        if (typeof window === 'undefined') return;

        let isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    onMount(updateBrowserTheme);
</script>

<button on:click={toggleCurrentTheme} type="button">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 stroke-neutral-900 dark:stroke-neutral-200"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
    </svg>
</button>
