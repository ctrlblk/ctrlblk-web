import { fail } from "@sveltejs/kit";

import { turnstileVerify } from "$lib/turnstile.js";

import {
    CWS_DOWNLOAD_URL,
    RECOMMEND_EMAIL,
 } from "$lib/consts.js";

export const actions = {
	default: async ({ request, getClientAddress }) => {
        let formData = await request.formData()

        let clientIP = getClientAddress();

        try {
            await turnstileVerify(formData.get("cf-turnstile-response"), clientIP);
        } catch (e) {
            console.log("turnstile verification failed", e);
            return fail(500, "Internal Server Error");
        }

        let name = formData.get("name");
        let email = formData.get("email");
        let message = formData.get("message");

        let body = {
            "personalizations": [{
                "to": [{
                    "email": email,
                    "name": name,
                }]}
            ],
            "from": {
                "email": RECOMMEND_EMAIL,
                "name": "CtrlBlk",
            },
            "subject": `${name} has invited you to try out CtrlBlock`,
            "content": [{
                "type": "text/plain",
                "value": [
                    "Hey",
                    "",
                    `${name} has invited you to try out CtrlBlock:`,
                    "",
                    CWS_DOWNLOAD_URL,
                    "",
                    `${name} says:`,
                    "",
                    message,
                    "",
                    "Cheers",
                    "Your CtrlBlock Team",
                ].join("\n"),
            }],
        }

        let result = await fetch("https://api.mailchannels.net/tx/v1/send", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(body),
        });

        if (!result.ok) {
            console.log("fetch result", result.status, result.statusText, await result.text());
            return fail(500, "Internal Server Error");
        }

        return { success: true };
	}
};