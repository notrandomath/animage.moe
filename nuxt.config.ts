// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "nuxt-icon"],
  googleFonts: {
    families: {
      Rubik: [300, 600],
    },
    inject: true
  },
})