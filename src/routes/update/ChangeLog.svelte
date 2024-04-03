<script>
    import { A, List, Li, Heading } from 'flowbite-svelte';
    import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    import GitHub from '../../components/icons/GitHub.svelte';

    import { formatDistanceToNow } from 'date-fns';

    import changelogData from './changelogData.json';

    import semver from 'semver';

    let filteredChangelogData = [];

    export let versionFrom;
    export let versionTo;

    function formatDate(dateString) {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    }

    // Filter and sort the changelog data to only include entries between the specified versions
    function filterChangelogData(data, from, to) {
        return data.filter((entry) => {
            try {
                return semver.gte(entry.version, from) && semver.lte(entry.version, to);
            } catch (e) {
                // we may encounter invalid version strings in either the changelog data or the input from/to
                // in which case we just ignore the entry
                return false;
            }
        }).sort((a, b) => semver.rcompare(a.version, b.version)); // everything left has a valid version string
    }

    $: filteredChangelogData = filterChangelogData(changelogData, versionFrom, versionTo);

</script>

<div>
    <Heading tag="h2" customSize="text-xl font-semibold my-4">
        {#if versionFrom == versionTo }
            Changelog v{versionFrom}
        {:else}
            Changelog v{versionFrom} - v{versionTo}
        {/if}
    </Heading>

    <Timeline>
        {#each filteredChangelogData as entry}
        <TimelineItem title="CtrlBlk v{entry.version}" date="{formatDate(entry.date)}">
            <List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400 my-4">
                {#each entry.changes as change}
                <Li>{change.description} <A href="{change.issueLink}" target="_blank" class="text-gray-700">{change.issueSlug}</A></Li>
                {/each}
            </List>
            <Button href="{entry.githubLink}" color="alternative">
                Learn more &nbsp;
                <GitHub size="md" />
            </Button>
        </TimelineItem>
        {/each}
    </Timeline>
</div>