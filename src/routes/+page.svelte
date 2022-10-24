<script lang="ts">
    import Button from '$lib/components/Button.svelte';
</script>

<div class="container mx-auto flex h-screen justify-center items-center">
    <div class="flex flex-col text-center w-1/2 h-96 align-middle justify-center text-neutral-900 dark:text-white">
        <h1 class="font-bold select-none 2xl:text-[100px] xl:text-[80px] lg:text-[60px] md:text-[60px] sm:text-[50px] text-[40px]">Auros Nexus</h1>
        <div class="flex flex-row justify-center 2xl:space-x-12 space-x-2 mt-4 mb-8">
            <Button text="About" bold={true} href="/about" />
            <Button text="Projects" bold={true} href="/projects" />
            <Button text="GitHub" bold={true} href={"https://github.com/Auros"} />
            <Button text="Blog" bold={true} href={"https://blog.auros.dev"} />
        </div>
        <div class="text-black dark:text-neutral-400 selection:bg-cyan-400 dark:selection:bg-purple-600 selection:text-black">
            <p>Software Developer</p>
            <p>Virtual Reality Enthusiast</p>
            <p>.NET and Unity</p>
            <p>Game Modder</p>
        </div>
    </div>
</div>