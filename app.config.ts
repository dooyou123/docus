export default defineAppConfig({
  docus: {
    title: 'Splaisir MD',
    description: 'The best place to start your documentation.',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    image: '/public/image.png',
    socials: {
      twitter: 'nuxt_js',
      github: 'dooyou123/docus',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'docus',
      owner: 'dooyou123',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      title: 'Splaisir MD',
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
