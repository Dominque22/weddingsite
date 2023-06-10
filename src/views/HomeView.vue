<template>
  <div class="home">
    <img  class="logo" alt="Title" src="../assets/titlenameTest.png">
    <HelloWorld/>
    <Timeline/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import Timeline from   '../components/TimelineCom.vue'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Timeline
  },
  setup () {
      const { name } = useDisplay()

      const height = computed(() => {
        // name is reactive and
        // must use .value
        switch (name.value) {
          
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
          case 'xxl': return 1200
        }

        return undefined
      })

      return { height }
    },
}
</script>
<style lang="scss">
 .logo {
    max-width: 100%;
   // width: intrinsic;
    /* Portrait */
  }
@media all 
  and (max-device-width: 400px)
  and (min-device-width: 220px) { 
    .logo {
      max-width: 80%;
      min-width: 60%;
   // width: intrinsic;
    /* Portrait */
  }
}
</style>
