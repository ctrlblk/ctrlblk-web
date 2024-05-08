import { GET_ADREPORTS_URL } from "$lib/consts.js";

function adReportFromData(adReport) {
    const url = new URL(adReport.data.page.url);

    const pageSlug = url.hostname;
    const pageLink = url.href;
    const issueSlug = adReport.github?.number ? `#${adReport.github?.number}` : undefined;
    const issueLink = adReport.github?.url;
    const screenshot = adReport.data.screenshot;
    const datetime = adReport.data.page.datetime;

    return {
        pageSlug,
        pageLink,
        issueSlug,
        issueLink,
        screenshot,
        datetime,
    };
}

export async function getAdReports(uuids) {
    let adReports = [];
    for (let uuid of uuids) {
        let response;
        try {
            response = await fetch(`${GET_ADREPORTS_URL}/${uuid}`);
        } catch (error) {
            continue;
        }

        if (response.ok) {
            const adReport = await response.json();
            adReports.push(await adReportFromData(adReport));
        }
    }
    return adReports;
}