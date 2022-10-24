<script>
    import Button from '$lib/components/Button.svelte';

</script>

<div class="container mx-auto flex h-screen justify-center items-center">
    <div class="flex flex-col text-center w-1/2 h-96 align-middle justify-center text-black dark:text-white">
        <h1 class="font-bold select-none 2xl:text-[100px] xl:text-[80px] lg:text-[60px] md:text-[60px] sm:text-[50px] text-[40px]">Auros Nexus</h1>
        <div class="flex flex-row justify-center 2xl:space-x-24 space-x-4 mt-4 mb-4">
            <Button text="About" bold={true} />
            <Button text="Projects" bold={true} />
            <Button text="GitHub" bold={true} />
            <Button text="Blog" bold={true} />
        </div>
        <div class="text-black dark:text-neutral-400 selection:bg-cyan-400 dark:selection:bg-purple-600 selection:text-black">
            <p>Software Developer</p>
            <p>Virtual Reality Enthusiast</p>
            <p>.NET and Unity</p>
            <p>Game Modder</p>
        </div>
    </div>
</div>