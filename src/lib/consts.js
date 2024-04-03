import.meta.env.MODE

export const DEVELOPMENT = import.meta.env.MODE !== 'release'

const baseUrl = new Map([
    [true, "ctrlblk.dev"],
    [false, "ctrlblk.com"],
]).get(DEVELOPMENT);

export const getAdReportsURL = `https://ad-reports.workers.${baseUrl}/adreports`;
//export const getAdReportsURL = "http://localhost:8787/adreports";

export const CWS_DOWNLOAD_URL = "https://chromewebstore.google.com/";

export const SUPPORT_EMAIL = `info@${baseUrl}`;

export const RECOMMEND_EMAIL = `recommend@${baseUrl}`;