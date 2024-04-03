<script>
import { Section, HeroHeader } from 'flowbite-svelte-blocks';
</script>

<div class="col-span-9">
  <Section class="section">
      <HeroHeader>
          <svelte:fragment slot="h1">About</svelte:fragment>
          <svelte:fragment slot="paragraph">...</svelte:fragment>
        </HeroHeader>
  </Section>
</div>