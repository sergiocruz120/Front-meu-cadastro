<template>
  <div id="app">
    <nav>
        <router-view />
    </nav>
    
  </div>
</template>

<style scoped>
.pi-whatsapp {
  position: absolute;
  color: rgb(40, 216, 46);
  margin-top: 20px;
  font-size: 1.7rem;
  left: 1460px;
  cursor: pointer;
}

.pi-linkedin {
  position: absolute;
  color: rgb(0, 106, 255);
  margin-top: 23px;
  font-size: 1.5rem;
  left: 1420px;
  cursor: pointer;
}

.pi-facebook {
  position: absolute;
  color: rgb(0, 4, 255);
  margin-top: 20px;
  font-size: 1.7rem;
  left: 1380px;
  cursor: pointer;
}

body {
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  
}

nav {
  padding: 30px;
}

</style>
