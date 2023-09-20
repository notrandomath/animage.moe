// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "nuxt-icons"],
  googleFonts: {
    families: {
      Rubik: [600],
    },
    inject: true
  },
})