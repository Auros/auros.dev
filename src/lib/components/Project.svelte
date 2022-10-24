<script lang="ts">
    import Button from './Button.svelte';
    import image from '$lib/images/16by9.jpg';

    export let title = 'Title';
    export let description = 'Description';
    export let source: string | undefined = undefined;
    export let live: string | undefined = undefined;
    export let media: string | undefined = undefined;

    $: isVideo = media?.endsWith("mp4");

</script>

<div class="flex flex-col space-y-4 items-center md:items-start">
    <h1 class="text-2xl font-bold">{title}</h1>
    <div class="flex md:flex-row flex-col md:space-x-4 space-y-4 items-center">
        <div class="box-border sm:w-1/2 w-full">
            {#if media}
                {#if isVideo}
                    <!-- svelte-ignore a11y-media-has-caption -->
                    <video autoplay playsinline loop volume={0} muted src={media}></video>
                {:else}
                    <img class="object-cover" src={media} alt="Project Preview" />
                {/if}
            {:else}
                <img class="object-cover" src={image} alt="Project Preview" />
            {/if}
        </div>
        <div class="flex flex-col justify-center space-y-6 sm:w-1/2 w-full">
            <p class="text-xl">{description}</p>
            <div class="flex md:justify-start justify-center space-x-2">
                {#if source}
                    <Button text="View Source Code" href={source} />
                {/if}
                {#if live}
                    <Button text="View Live Deployment" href={live} />
                {/if}
            </div>
        </div>
    </div>
</div>
