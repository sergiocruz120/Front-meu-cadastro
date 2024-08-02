<template>
  <div id="app">
    <!-- <span class="pi pi-whatsapp"></span>
    <span class="pi pi-facebook"></span>
    <span class="pi pi-linkedin"></span> -->
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

/* .home {
  color: rgb(210, 210, 210);
  font-size: 2rem;
  position: absolute;
  left: 20px;
  top: 20px;
  font-family: serif;
  cursor: pointer;
} */
/* .home2 {
  color: rgb(210, 210, 210);
  font-size: 2rem;
  position: absolute;
  left: 120px;
  top: 20px;
  font-family: serif;
  cursor: pointer;
}
.home3 {
  color: rgb(210, 210, 210);
  font-size: 2rem;
  position: absolute;
  left: 300px;
  top: 20px;
  font-family: serif;
  cursor: pointer;
}
.home4 {
  color: rgb(210, 210, 210);
  font-size: 2rem;
  position: absolute;
  left: 410px;
  top: 20px;
  font-family: serif;
  cursor: pointer;
} */

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
  /* background: linear-gradient(#0f0c29, #302b63, #24243e); */
  min-height: 100vh;
  
}

nav {
  padding: 30px;
}

/* nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
