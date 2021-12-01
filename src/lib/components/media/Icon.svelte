<script lang="ts">
    export let icon: string;
    export let colors: string = 'text-white';
    export let href: string = '';

    function clicked() {
        if (href !== '') {
            window.open(href, '_blank')?.focus();
        }
    }
</script>

<ion-icon on:click={clicked} name={icon} size="large" class={colors} style="cursor: pointer;" />
