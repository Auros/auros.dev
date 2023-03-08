<script>
    import Project from '$lib/components/Project.svelte';
    import AIVMedia from '$lib/videos/aiv.mp4';
    import FluxMedia from '$lib/videos/flux.mp4';
    import HiveMedia from '$lib/images/hive.png';
    import HeptaMedia from '$lib/videos/hepta.mp4';
    import WeaverMedia from '$lib/videos/weaver.mp4';
    import ActionsVideo from '$lib/videos/actions.mp4';
    import ElysiumMedia from '$lib/images/elysium.gif';
    import SoriginMedia from '$lib/images/sorigin.jpg';
    import VRAtlasMedia from '$lib/images/vratlas.png';
    import SiraQualMedia from '$lib/videos/siraqual.mp4';
    import SiraUtilMedia from '$lib/images/sirautil.png';
    import AurosDevMedia from '$lib/images/auros.dev.png';
    import ReflectorMedia from '$lib/images/reflector.png';
    import EmoteCoreMedia from '$lib/images/emote-core.png';
    import BeatmapRefMedia from '$lib/images/beatmapref.png';
    import SmartImageMedia from '$lib/images/smartimage.gif';
    import ContainerViewMedia from '$lib/videos/container.mp4';
    import LunacultureMedia from '$lib/images/lunaculture.png';
    import ImageFactoryMedia from '$lib/videos/imagefactory.mp4';
    import BeatSaverSharperMedia from '$lib/images/beatsaversharper.png';
</script>

<div class="container mx-auto flex flex-col justify-left items-top pt-32 space-y-6">
    <h1 class="text-[40px]">Projects</h1>

    <h2 class="text-[30px]">Applications</h2>
    <hr />
    <Project
        title="Weaver"
        description="A three dimensional representation of a git repository over time.
    It loads a repository from the file system and generates a tree where each
    cluster of entities acts as a directory, and each entity within it acts as a file."
        source="https://github.com/Auros/Weaver"
        media={WeaverMedia}
    />
    <Project
        title="Lunaculture"
        description="A game made in 72 hours for the Ludum Dare (52) game jam with my friends and fellow developers VRBobbie and Caeden117."
        source="https://github.com/Auros/Lunaculture"
        live="https://ldjam.com/events/ludum-dare/52/lunaculture"
        media={LunacultureMedia}
    />
    <Project
        title="Flux"
        description="A simple application used to load and preview .vrm avatar files."
        source="https://github.com/Auros/Flux"
        media={FluxMedia}
    />

    <br />
    <h2 class="text-[30px]">Websites and APIs</h2>
    <hr />
    <Project
        title="VR Atlas" 
        description="A service which allows people to find events and meet people in virtual reality."
        source="https://github.com/Auros/VRAtlas.API"
        live="https://vratlas.io"
        media={VRAtlasMedia}
    />
    <Project
        title="Emote Core"
        description="A website and API built using SvelteKit which is designed to allow users to upload arbuituary emotes. Built for the companion Beat Saber mod, Emoter."
        source="https://github.com/Auros/emote-core"
        live="https://emote-core.auros.dev"
        media={EmoteCoreMedia}
    />
    <Project
        title="auros.dev"
        description="This website! I spent a few hours learning Tailwind CSS to create this over a weekend. Built primarily as a showcase, but to also experiment with the release candidate version of SvelteKit."
        source="https://github.com/Auros/auros.dev"
        live="https://auros.dev"
        media={AurosDevMedia}
    />
    <Project
        title="Hive"
        description="An ASP.NET Core backend built by a group of modders from the Beat Saber community sponsored by Atlas Rhythm. It is a highly customizable mod hosting repository built with a permission system, plugin system, and more."
        source="https://github.com/Atlas-Rhythm/Hive"
        media={HiveMedia}
    />
    <Project
        title="Sorigin"
        description="An authentication server designed to simplfy application development when trying to authenticate Beat Saber players."
        source="https://github.com/ProjectSIRA/Sorigin"
        media={SoriginMedia}
    />
    <Project
        title="ContainerView"
        description="A Blazor WASM website and companion mod which generates and displays the Beat Saber's dependency container hierarchy and provides modders with an easy way to search for dependencies within the game's dependency injection library, Zenject."
        source="https://github.com/ProjectSIRA/ContainerTree"
        media={ContainerViewMedia}
    />
    <Project
        title="SiraQual" 
        description="A qualifier system designed for the Vision Block 2020 Beat Saber Tournament. The goal was to build a backend where people are time constrained to play the map, not giving them enough time to practice beforehand, and flagging users who tried to abuse the system."
        media={SiraQualMedia}
    />

    <br />
    <h2 class="text-[30px]">AuraImageVariants</h2>
    <hr />
    <Project
        title="AuraImageVariants" 
        description="An Azure Function which can generate multiple image variants during a blob storage upload. The user can customize the varaints that get generated, and it ensures that images aren't unscaled to save on function execution time."
        source="https://github.com/Auros/AuraImageVariants"
        media={AIVMedia}
    />
    <Project
        title="SmartImage" 
        description="A library for Unity which simplifies the process of dynamically loading one or a large set of images, and provides support for animated images (gifs)."
        source="https://github.com/Auros/SmartImage"
        media={SmartImageMedia}
    />
    <Project
        title="Elysium" 
        description="A library for Unity which allows MVVM-like bindings through GameObjects. Paired with a source generator, I used this library to build Flux, my VRM viewer."
        source="https://github.com/Auros/Elysium"
        media={ElysiumMedia}
    />
    <Project
        title="BeatSaverSharper" 
        description="A .NET Standard 2.0 library for interacting with the BeatSaver.com API."
        source="https://github.com/Auros/BeatSaverSharper"
        media={BeatSaverSharperMedia}
    />

    <br />
    <h2 class="text-[30px]">Mods</h2>
    <hr />
    <Project
        title="SiraUtil" 
        description="A powerful utility-like framework mod which provides more tools to Beat Saber modders. One of the essential mods powering the Beat Saber Modding Community to this day."
        source="https://github.com/Auros/SiraUtil"
        media={SiraUtilMedia}
    />
    <Project
        title="ImageFactory" 
        description="Allows Beat Saber players to add images to their game which can appear and disappear on customizable conditions. Great for social media branding, watermarking, practice, and fun."
        source="https://github.com/Auros/ImageFactory"
        media={ImageFactoryMedia}
    />
    <Project
        title="Actions" 
        description="Allows Beat Saber players generate macros for commands and messages in their Twitch chat which they can easily execute through an in game menu."
        source="https://github.com/Auros/Actions"
        media={ActionsVideo}
    />
    <Project
        title="ChromaToggle" 
        description="A mod which expanded the base gamemodes by introducing more note and saber types and new rulesets."
        media={HeptaMedia}
    />

    <br />
    <h2 class="text-[30px]">Other</h2>
    <hr />

    <Project
        title="Reflector" 
        description="A discord bot which automatically downloads and sends Twitch clips sent in a channel. Designed for archival purposes when Twitch started to auto-hide all clips from muted VODs."
        source="https://github.com/Auros/Reflector"
        media={ReflectorMedia}
    />
    <Project
        title="BeatmapRef.cs" 
        description="Compact a *constrained* map reference from BeatSaver into a ulong to be used as a database key"
        source="https://gist.github.com/Auros/87d919ad5250f62ba5c76edf68622f52"
        media={BeatmapRefMedia}
    />

    <br />
    <br />
    <br />
</div>
