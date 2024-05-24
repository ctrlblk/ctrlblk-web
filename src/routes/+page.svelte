<script>
  import {
    Button,
    Card,
    Carousel,
    Heading,
    Rating,
  } from 'flowbite-svelte';
  import {
    FeatureDefault,
    FeatureItem,
    HeroHeader,
    Section,
  } from 'flowbite-svelte-blocks';
  import {
    AnnotationSolid,
    ArrowRightSolid,
    BrainSolid,
    CheckSolid,
    LandmarkSolid,
    RocketSolid,
    ShieldCheckSolid,
  } from 'flowbite-svelte-icons';

  import {
	  CWS_DOWNLOAD_URL,
  } from '$lib/consts.js';

  export const images = [
    {
      alt: 'Blocking ads on a website',
      src: '/images/carousel/blocking-ads-on-a-website.jpg',
      title: 'Blocking ads on a website'
    },
    {
      alt: 'Blocking popups on a website',
      src: '/images/carousel/blocking-popups-on-a-website.jpg',
      title: 'Blocking ads on a website'
    },
    {
      alt: 'Blocking video ads on youtube',
      src: '/images/carousel/blocking-video-ads-on-youtube.jpg',
      title: 'Blocking ads on a website'
    },
    {
      alt: 'Sending an AdReport',
      src: '/images/carousel/sending-an-ad-report.jpg',
      title: 'Blocking ads on a website'
    },
  ];

  export const testimonialData = [
    {
      name: 'John Doe',
      rating: 5,
      text: 'I love this app! It\'s so easy to use and it really works. I can finally browse the web without being bombarded by ads.',
    },
    {
      name: 'Jane Doe',
      rating: 4,
      text: 'I\'ve been using this app for a few weeks now and I\'m really happy with it. It\'s made my browsing experience so much better.',
    },
    {
      name: 'John Smith',
      rating: 5,
      text: 'I can\'t believe I didn\'t start using this app sooner. It\'s made such a difference to my browsing experience.',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      text: 'I\'ve been using this app for a few weeks now and I\'m really happy with it. It\'s made my browsing experience so much better.',
    },
  ]
</script>

<div class="">
  <Section name="ctawithimg">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid grid-cols-2 sm:py-16 lg:px-6">

      <div class="mt-4 md:mt-0">
        <Heading tag="h2" class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Take #CtrlBlk of your browsing experience.</Heading>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Enjoy an Ad free browsing experience, without Video Ads or Popups. Stop Ads from manipulating you, protect your data and experience a faster web.</p>
        <a href="{CWS_DOWNLOAD_URL}" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
          Download now
          <ArrowRightSolid size="md" class="ml-2 -mr-1" />
        </a>
      </div>

      <Carousel {images} imgClass="object-contain h-full w-fit" duration="5000" />
    </div>
  </Section>

  <Section name="feature" sectionClass="bg-gray-100">
    <HeroHeader class="max-w-screen-md mb-8 lg:mb-16" h2Class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-xl dark:text-gray-400">
      <svelte:fragment slot="h2">Browse the web <span class="italic">you</span> want, <span class="text-gray-500">not the one we've got!</span></svelte:fragment>
      <svelte:fragment slot="paragraph">Take #CtrlBlk of your browsing experience. Block ads, video ads, popups and other unwanted distractions!</svelte:fragment>
    </HeroHeader>
    <FeatureDefault divClass="grid grid-cols-3 gap-12">
      <FeatureItem>
        <svelte:fragment slot="icon"><ShieldCheckSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
        <svelte:fragment slot="h3">Ad free browsing experience</svelte:fragment>
        <svelte:fragment slot="paragraph">Surf the web without annoying distractions.</svelte:fragment>
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"><CheckSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
        <svelte:fragment slot="h3">No Video Ads</svelte:fragment>
        <svelte:fragment slot="paragraph">No more unskipapple Video Ads. Enjoy your favorite video content without interruptions.</svelte:fragment>
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"><AnnotationSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
        <svelte:fragment slot="h3">No popups - direct access</svelte:fragment>
        <svelte:fragment slot="paragraph">Block annoying Popups that get into the way between you and the content you want to see.</svelte:fragment>
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"><BrainSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
        <svelte:fragment slot="h3">Stop being manipulated</svelte:fragment>
        <svelte:fragment slot="paragraph">Advertisers trick and manipulate you into liking their products more by exploiting cognetive biases. Prevent being manipulated by blocking ads.</svelte:fragment>
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"><LandmarkSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
        <svelte:fragment slot="h3">Keep your data safe</svelte:fragment>
        <svelte:fragment slot="paragraph">Block advertiser from collecting your data and following you arround on the web.</svelte:fragment>
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"><RocketSolid class="text-primary-600 dark:text-primary-300" /></svelte:fragment>
        <svelte:fragment slot="h3">Faster surfing</svelte:fragment>
        <svelte:fragment slot="paragraph">Enjoy a more snappy browsing experience. Websites without ads load up to 10x faster, content no longer jumps arround by slow loading Ads!</svelte:fragment>
      </FeatureItem>
    </FeatureDefault>

    <div class="my-8 text-center">
      <Button href="{CWS_DOWNLOAD_URL}" target="_blank">
        Download now!
        <ArrowRightSolid size="md" class="ml-2 -mr-1" />
      </Button>
    </div>
  </Section>


  <Section name="testimonial">
    <HeroHeader class="max-w-screen-md mx-auto mb-8 lg:mb-16" h2Class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white" pClass="text-gray-500 sm:text-lg dark:text-gray-400">
      <svelte:fragment slot="h2">Total rating 4.7/5</svelte:fragment>
      <svelte:fragment slot="paragraph">More than 1.000 app reviews.</svelte:fragment>
    </HeroHeader>

    <div class="grid grid-cols-3 text-left gap-8">
      {#each testimonialData as testimonial}
        <Card>
          <Heading tag="h3" class="mb-2 text-xl font-semibold">{testimonial.name}</Heading>
          <Rating id="example-1b" total={5} size={30} rating={testimonial.rating} />
          <p class="my-4">{testimonial.text}</p>
        </Card>
      {/each}
    </div>

    <div class="my-8">
      <Button href="{CWS_DOWNLOAD_URL}" target="_blank">
        Try for yourself!
        <ArrowRightSolid size="md" class="ml-2 -mr-1" />
      </Button>
    </div>
  </Section>

</div>