export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path == '/discord') {
      return navigateTo('https://discord.gg/pkC2d4yk9c', {
        external: true
      })
    }
    if (to.path == '/instagram') {
        return navigateTo('https://www.instagram.com/animagenetwork/', {
          external: true
        })
      }
      if (to.path == '/email') {
        return navigateTo('https://forms.gle/LXENcsJsR8k3XD2E9', {
          external: true
        })
      }
      if (to.path == '/drive') {
        return navigateTo('https://drive.google.com/drive/folders/1dUDgzFSfjFInY6i3J-MO3w4XOWtjBzeC?usp=sharing', {
          external: true
        })
      }
  })