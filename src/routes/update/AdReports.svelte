<script>
    import { formatDistanceToNow } from 'date-fns';
    import { A, Heading, Button, Card, P } from 'flowbite-svelte';
    import { LinkOutline, ThumbsUpOutline, ThumbsDownOutline } from 'flowbite-svelte-icons';

    import { getAdReports } from '$lib/adReports';

    import { onMount } from 'svelte';

    export let matchingAdReports;
    
    let adReports = [];

    function formatDate(dateString) {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    }

    onMount(async () => {
        adReports = await getAdReports(matchingAdReports);
    });

</script>

{#if adReports.length > 0}
    <Heading tag="h2" customSize="text-lg font-semibold">Ad Reports</Heading>

    <div class="space-y-4">
        <P class="my-2">
            <span class="font-semibold">Good news!</span>
            <span class="italic">You've reported problems, we've fixed them.</span>
        </P>
        <P>We wen't ahead and removed any exceptions according with the websites you've reported, since they are now no longer necessary.</P>
        <P>Check out the websites below and let us know in case the problem you've experienced persists.</P>
    </div>

    <div class="grid grid-cols-2 gap-4">
        {#each adReports as adReport}
        <Card>
            <div class="mb-3">
                <a href="{adReport.pageLink}" target="_blank" class="flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
                    <Heading tag="h4">{adReport.pageSlug}</Heading>
                    <LinkOutline size="xs" class="ml-2 -mr-1" />
                </a>
            </div>

            <div class="my-3">
                <p class="float-left font-normal text-gray-700 leading-tight" title="{adReport.datetime}">{formatDate(adReport.datetime)}</p>
                <Button pill={true} outline={true} class="float-right !p-2 mx-1" title="Works for me!">
                    <ThumbsUpOutline class="w-3 h-3" />
                </Button>

                <Button pill={true} outline={true} size="lg" class="float-right !p-2 mx-1" title="Doesn't work for me!">
                    <ThumbsDownOutline class="w-3 h-3" />
                </Button>
            </div>

            <div class="h-40 overflow-hidden relative">
                <img src="{adReport.screenshot}" alt="Screenshot of {adReport.pageSlug}" class="absolute inset-0 w-full h-full object-cover" />
            </div>

            {#if adReport.issueLink}
            <div class="mt-3">
                <A href="{adReport.issueLink}" target="_blank" class="float-right text-gray-700">{adReport.issueSlug}</A>
            </div>
            {/if}
        </Card>
        {/each}
    </div>
{/if}