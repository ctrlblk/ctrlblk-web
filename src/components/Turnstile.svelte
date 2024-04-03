<script>
	import { onMount, onDestroy } from "svelte";

    import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

    export let callback;

    let turnstileWidgetId = "";

    onMount(async () => {
        turnstileWidgetId = turnstile.render('#turnstile-container', {
            sitekey: PUBLIC_TURNSTILE_SITE_KEY,
            callback: function(token) {
                callback(["cf-turnstile-response", token])
            },
        });
    });

    onDestroy(() => {
        turnstile.remove(turnstileWidgetId);
    });
</script>

<div id="turnstile-container"></div>