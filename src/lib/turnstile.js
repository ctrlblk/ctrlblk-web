import { PRIVATE_TURNSTILE_SECRET_KEY } from '$env/static/private';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';


export async function turnstileVerify(response, remoteip) {
    let formData = new FormData();

	formData.append('secret', PRIVATE_TURNSTILE_SECRET_KEY);
	formData.append('response', response);
	formData.append('remoteip', remoteip);

	const result = await fetch(TURNSTILE_VERIFY_URL, {
		body: formData,
		method: 'POST',
	});

	const outcome = await result.json();

	if (outcome.success) {
        return true;
	}

    console.log('Turnstile verification failed', outcome);

    throw new Error('Turnstile verification failed');
}