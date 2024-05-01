<script>
const logo = new URL('../assets/images/logo.png', import.meta.url).href

export default {
  data() {
    return {
      logo
    }
  }
}
</script>

<template>
<nav class="nav-bar">
  <div class="logo">
<img :src="logo" alt="logo" class="App-logo">
<h2 class="text-3xl font-bold">Space Travelers&apos; Hub</h2>
  </div>
  <ul class="links">
    <li><router-link to="/">Rockets</router-link> </li>
    <li><router-link to="/missions">missions</router-link> </li>
    <span class="separator">|</span>
    <li><router-link to="/myprofile">My profile</router-link> </li>

  </ul>
</nav>

</template>

<style scoped>
.nav-bar {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  margin: 0 2rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo img {
  width: 2.5rem;
  height: 2.5rem;
}

.links {
  display: flex;
  list-style-type: none;
  gap: 1rem;
 
}

.links a {
  text-decoration: none;
  color: blue;
}

.router-link-active{
  text-decoration: underline;
  border-bottom: 2px solid blue;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
}
</style>