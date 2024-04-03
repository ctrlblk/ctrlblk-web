<script>
    import { Heading } from 'flowbite-svelte';

    import { page } from '$app/stores';

    import AdReports from './AdReports.svelte';
    import ChangeLog from './ChangeLog.svelte';
    import SupportCTA from './SupportCTA.svelte';

    let params = {};

    $: {
        const urlParams = $page.url.searchParams
        for (let [key, value] of urlParams.entries()) {
            if (key === "matchingAdReports") {
                params[key] = urlParams.getAll(key);
            } else {
                params[key] = value;
            }
        }
    };
</script>

<div class="mx-auto max-w-screen-xl my-8 space-y-8">

    <Heading tag="h1" customSize="text-2xl font-bold">CtrlBlock has been updated to version {params.to}.</Heading>

    <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 space-y-8">
            <AdReports matchingAdReports={params.matchingAdReports || []} />
            <ChangeLog versionFrom={params.from} versionTo={params.to}/>
        </div>
        <div>
            <SupportCTA />
        </div>
    </div>
</div>