<template>
  <div >
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, 
body {
  background-color: #fff7ef;
}
nav {
  padding-bottom: 30px;
  text-align: right;

  a {
    color: #FFCC99;
    margin-right: 8px;
    text-decoration: none;

    
    

    &.router-link-exact-active {
      //color: #944610; //titlename.png
        color: #AB1150; //titlenamePeach.png
    }
  }
}
</style>
