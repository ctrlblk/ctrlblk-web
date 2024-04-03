<svelte:head>
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" async defer></script>
</svelte:head>

<script>

    import { Spinner, Button, Input, Textarea, Label } from 'flowbite-svelte';

    import { enhance } from '$app/forms';

    import Turnstile from '../../components/Turnstile.svelte';

    // Available states:
    // - "compose"
    // - "captcha"
    // - "sending"
    // - "sent"
    // - "error"
    let state = "compose"

    let form;

    let turnstileDone = false;

    function handleSubmit({ formElement, cancel }) {
        form = formElement;

        // Advance state to compose on first submit
        if (state == "compose") {
            state = "captcha";
        }

        // Check if turnstile has finished verififying the user
        // If not, cancel the form submission. It will be resubmitted
        // in turnstileHandler below once the turnstile is done
        if (!turnstileDone) {
            cancel();
            return;
        }
        
        return async ({ result }) => {
            if (result.type == "success") {
                // Advance state to sent to show success method
                // We don't call update because we want to show the success message
                // and users typically don't need to contact us multiple times in a row
                state = "sent";
            } else {
                // Otherwhise show an error
                state = "error";
            }
        };
    }

    async function turnstileHandler([name, token]) {
        // Advance state to sending to show the spinner
        state = "sending";

        // Indicate that the turnstile verification is finished
        turnstileDone = true;

        // Resubmit the form
        form.requestSubmit();
    }
</script>


<p class="text-sm text-gray-500 dark:text-gray-400 my-4">
    <span>Recommend to a friend</span>
</p>

<form method="POST" id="the-form" use:enhance={handleSubmit}>
    <div class="{ state == "compose" ? "visible": "hidden" }">

        <Input type="hidden" id="type" name="type" value="email" required />

        <Label for="email" class="mb-2">Email address</Label>
        <Input type="email" id="email" name="email" placeholder="john.doe@company.com" required />

        <Label for="textarea-id" class="mb-2">Your message</Label>
        <Textarea id="textarea-id" placeholder="Your message" rows="4" name="message" />

        <Label for="name" class="mb-2">Your name</Label>
        <Input type="text" id="name" name="name" placeholder="John Doe" required />

        <Button type="submit" size="sm" class="mt-4">Send</Button>
    </div>
    {#if state == "captcha"}
        <p class="text-sm text-gray-500 dark:text-gray-400">
            <span>Are you human?</span>
        </p>
        <Turnstile callback={turnstileHandler} />
    {:else if state == "sending"}
        Sending ... <Spinner />

    {:else if state == "sent"}
        <p class="text-sm"><span class="text-semibold">Done</span>, thanks for recommending CtrlBlk!</p>
    {:else if state == "error"}
        <p class="text-sm"><span class="text-semibold">Failure</span>, something went wrong. Please try again later!</p>
    {/if}
</form>
