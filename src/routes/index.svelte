<script context="module">
    export const hydrate = false;
</script>

<script lang="ts">
    import Icon from '$lib/components/media/Icon.svelte';
    import Sia from '$lib/images/sia.png';
</script>

<div class="flex items-center justify-center h-screen">
    <div class="grid grid-flow-row place-items-center text-center space-y-5">
        <img src={Sia} alt="This is Sia (my OC)" class="w-72 rounded-full" />
        <h1 class="text-white text-7xl">Auros Nexus</h1>
        <p class="text-gray-400">
            <i>Programmer and VR Enthusiast</i> ⬤ <i>Beat Saber Modder</i> ⬤
            <i>.NET Core and Unity Developer</i>
        </p>
        <div class="items-center justify-center space-x-4">
            <Icon
                icon="logo-github"
                href="https://github.com/Auros"
                colors="transition text-white hover:hover:text-gray-700"
            />
            <Icon
                icon="logo-twitter"
                href="https://twitter.com/AurosVR"
                colors="transition text-white hover:hover:text-blue-400"
            />
            <Icon
                icon="logo-twitch"
                href="https://twitch.tv/aurosvr"
                colors="transition text-white hover:hover:text-purple-700"
            />
            <Icon
                icon="cafe"
                href="https://ko-fi.com/auros"
                colors="transition text-white hover:text-yellow-600"
            />
        </div>
    </div>
</div>

<svelte:head>
    <title>Auros | Developer</title>
</svelte:head>
