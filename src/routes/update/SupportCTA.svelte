<script>
  import { A, P, Heading, Tabs, TabItem, Rating } from 'flowbite-svelte';
  import { WalletOutline, UserAddOutline, StarOutline } from 'flowbite-svelte-icons';

  import Recommend from './Recommend.svelte';

  import { CWS_REVIEW_URL } from '$lib/consts.js';
</script>


<div class="space-y-4">
    <Heading tag="h2" customSize="text-lg font-semibold">Support #CtrlBlk</Heading>

    <P class="text-sm">We hope you're enjoying CtrlBlock. If you are, please consider supporting us by becoming a supporter, recommending us to a friend, or rating us on the Chrome Web Store.</P>

    <Tabs style="underline">
        <TabItem>
            <div slot="title" class="flex items-center gap2">
                <WalletOutline size="sm" class="mr-2" />
                <span>Support</span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Become a supporter</b>

                Become a supporter and help maintain and improve CtrlBlk.

                Coming soon!
            </p>
        </TabItem>
        <TabItem open>
            <div slot="title" class="flex items-center gap2">
                <UserAddOutline size="sm" class="mr-2" />
                <span>Recommend</span>
            </div>

            <Recommend />
        </TabItem>
        <TabItem>
            <div slot="title" class="flex items-center gap2">
                <StarOutline size="sm" class="mr-2" />
                <span>Rate</span>
            </div>

            <div class="text-sm space-y-2">
                <p>Rating CtrlBlk helps other users to find it on the Chrome Web Store.</p>

                <A href="{CWS_REVIEW_URL}"
                    target="_blank" class="text-gray-700">Rate #CtrlBlk on the Chrome Web Store</A>

                <a href="{CWS_REVIEW_URL}" target="_blank">
                    <Rating id="example-1b" total={5} size={40} rating={4.5} />
                </a>
            </div>


        </TabItem>
      </Tabs>
</div>