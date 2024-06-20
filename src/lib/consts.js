import.meta.env.MODE

export const DEVELOPMENT = import.meta.env.MODE !== 'release'

const baseUrl = new Map([
    [true, "ctrlblk.dev"],
    [false, "ctrlblk.com"],
]).get(DEVELOPMENT);

export const GET_ADREPORTS_URL = `https://api.${baseUrl}/adreports`;

export const CWS_DOWNLOAD_URL = "https://chromewebstore.google.com/detail/ctrlblock/gaccmpadgpjgakodbmbjmefanhjppepj";
export const CWS_REVIEW_URL = `${CWS_DOWNLOAD_URL}/reviews`;

export const GITHUB_URL = "https://github.com/ctrlblk";

export const BLOG_URL = "https://blog.ctrlblk.com/";

export const SUPPORT_EMAIL = `info@${baseUrl}`;

export const RECOMMEND_EMAIL = `recommend@${baseUrl}`;
