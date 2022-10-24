<script lang="ts">
    export let bold = false;
    export let text = 'Button';
    export let href: string | undefined = undefined;

    $: newTab = href?.startsWith('http');
</script>

{#if href}
    <a
        {href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noreferrer' : undefined}
        on:click
        class="rounded-full bg-cyan-300 dark:bg-purple-800 pl-8 pr-8 pt-2 pb-2 hover:ring-2 hover:ring-offset-0 ring-cyan-400 dark:ring-purple-800"
        type="button"
    >
        <p class:font-bold={bold} class="select-none">{text}</p>
    </a>
{:else}
    <button
        on:click
        class="rounded-full bg-cyan-300 dark:bg-purple-800 pl-8 pr-8 pt-2 pb-2 hover:ring-2 hover:ring-offset-0 ring-cyan-400 dark:ring-purple-800"
        type="button"
    >
        <p class:font-bold={bold} class="select-none">{text}</p>
    </button>
{/if}
