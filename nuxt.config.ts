// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          title: 'My App',
          meta: [
            // 
            { name: 'description', content: 'My amazing site.' }
          ],
        }
      },
    
    typescript: {
        shim: false,
    },

    modules: [
      // ...
      '@pinia/nuxt',
    ],
    
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      
    
      

})
