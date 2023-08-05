export default defineAppConfig({
  docus: {
    title: 'Splaisir MD',
    description: 'The best place to start your documentation.',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-92fNF1pm-5aAvZjhUeHuNdqO2_TbTFW1vA&usqp=CAU',
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
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
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
