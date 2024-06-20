<script>
    import '../app.pcss';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
    import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';

    import GitHub from '../components/icons/GitHub.svelte';

    import {
        DEVELOPMENT,
        CWS_DOWNLOAD_URL,
        GITHUB_URL,
        BLOG_URL,
     } from '$lib/consts.js';
</script>

<Navbar class="bg-gray-100 sm:px-8 py-4">
    <NavBrand href="/">
        <img src="/images/ctrlblk_logo.svg" class="me-3 h-6 sm:h-9" alt="CtrlBlk Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CtrlBlk</span>
    </NavBrand>
    <div class="flex md:order-2">
        <Button target="_blank" href="{CWS_DOWNLOAD_URL}" size="sm">Download</Button>
    </div>

    <NavUl >
        <NavLi href="/">Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="{BLOG_URL}" target="_blank">Blog</NavLi>
        <NavLi href="{GITHUB_URL}" target="_blank"><GitHub /></NavLi>
    </NavUl>
</Navbar>

<div class="max-w-full">
    <slot />
</div>

<Footer class="bg-gray-200 py-8">
  <FooterLinkGroup ulClass="flex flex-wrap items-center justify-center mb-3 text-sm text-gray-500 dark:text-gray-400">
    <FooterLink href="/imprint">Imprint</FooterLink>
    <FooterLink href="/privacy">Privacy Policy</FooterLink>
    <FooterLink href="/contact">Contact</FooterLink>
  </FooterLinkGroup>
  <FooterCopyright href="/" by="CtrlBlk" year={2024} />

  {#if DEVELOPMENT}
    <div class="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
      <span>Development</span>
    </div>
  {/if}
</Footer>
