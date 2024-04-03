import { fail } from "@sveltejs/kit";

import { turnstileVerify } from "$lib/turnstile.js";

import { SUPPORT_EMAIL } from "$lib/consts.js";

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
        let subject = formData.get("subject");
        let message = formData.get("message");

        let body = {
            "personalizations": [{
                "to": [{
                    "email": SUPPORT_EMAIL,
                    "name": "CtrlBlk Support",
                }]}
            ],
            "from": {
                "email": SUPPORT_EMAIL,
                "name": "CtrlBlk /contact",
            },
            "subject": subject,
            "content": [{
                "type": "text/plain",
                "value": [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    "Message:",
                    message,
                ].join("\n"),
            }],
        };

        let result = await fetch("https://api.mailchannels.net/tx/v1/send", {
            "method": "POST",
            "headers": {
                "content-type": "application/json",
            },
            "body": JSON.stringify(body),
        });

        if (!result.ok) {
            console.log(JSON.stringify(body));
            console.log("fetch result", result.status, result.statusText, await result.text());
            return fail(500, "Internal Server Error");
        }

        return { success: true };
	}
};