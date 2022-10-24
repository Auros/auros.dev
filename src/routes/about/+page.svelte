<script lang="ts">
    import Navigator from "$lib/components/Navigator.svelte";

    // To avoid scrapers immediately picking up my email.
    let handle = ''    
    $: email = handle + '@gmail.com'

    function toggleEmail() {
        handle = handle === '' ? 'aurosnex' : ''
    }
</script>

<Navigator />

<div class="container mx-auto flex h-screen justify-center items-top pt-32">
    <div class="flex flex-col w-1/2 h-96 align-middle justify-top text-neutral-900 dark:text-white space-y-4 selection:bg-cyan-400 dark:selection:bg-purple-600 selection:text-black dark:selection:text-white">
        <h1 class="text-2xl font-bold">About</h1>
        <h1 class="text-lg font-bold">Who Am I?</h1>
        <p>Hello, I am Auros. I am a software developer who specializes in anything .NET and Unity.</p>
        <h1 class="text-lg font-bold">Skillset</h1>
        <ul class="list-disc ml-5">
            <li>Modern .NET (Core 3.1, 5, 6)</li>
            <li>.NET Framework 4.X.X</li>
            <li>ASP.NET Core</li>
            <li>Unity</li>
            <li>Application Development (Avalonia, WPF)</li>
            <li>Entity Framework and Entity Framework Core</li>
            <li>PostgreSQL</li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Azure</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>HTML, CSS, and JavaScript</li>
            <li>Web Frameworks (Svelte, Vue)</li>
            <li>Github Actions</li>
            <li>Docker</li>
        </ul>
        <h1 class="text-lg font-bold">Interests</h1>
        <ul class="list-disc ml-5">
            <li>Virtual Reality</li>
            <li>Software Development</li>
            <li>Grand Strategy Games (Civilization, etc)</li>
            <li>Simulation Games (Cities: Skylines, Frostpunk, etc)</li>
            <li>Rhythm Games (Beat Saber, WACCA, etc)</li>
            <li>3D Modeling</li>
        </ul>
        <h1 class="text-lg font-bold">Contact Me</h1>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p>Need to contact me? Reach out to me <b class="cursor-pointer text-cyan-600 dark:text-purple-400" on:click={toggleEmail}><u>here</u></b>.</p>
        {#if handle !== ''}
            <p class="m-7">{email}</p>
        {/if}
    </div>
</div>