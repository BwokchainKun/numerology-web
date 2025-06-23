<template>
  <header class="navbar">
    <div class="container">
      <div class="logo">
        <img src="../assets/imglogo.png" alt="The Mystic Logo">
        <h1>The Mystic</h1>
      </div>
      <button class="hamburger" @click="toggleMenu">
        ☰
      </button>
      <nav :class="{ open: isMenuOpen }">
        <ul>
          <li><router-link to="/">Home Page</router-link></li>
          <li><router-link to="/numerologyCalculator">Numerology Calculator</router-link></li>
          <li><router-link to="/zodiac&astrology">Zodiac and Astrology</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
  watch: {
    $route (to, from) {
      this.isMenuOpen = false
    }
  }
}
</script>

<style>
.logo {
  align-items: center;
  display: flex;
  flex-direction: row;
}

img {
  width: 40px;
  height: auto;
  margin-right: 20px;
}

body {
  margin: 0;
  font-family: "Dancing Script";
}

.navbar {
  background-color: #333;
  color: white;
  padding: 40px 40px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
}

nav {
  display: flex;
  gap: 20px;
}

nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 30px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
}

nav ul li a:hover {
  text-decoration: underline;
}

.hamburger {
  display: none; /* Hide by default */
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10; /* Ensure it is above the menu */
}

@media (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #333;
    border-radius: 5px;
    padding: 10px 0;
    width: 200px;
  }

  nav.open {
    display: flex;
  }

  nav ul {
    flex-direction: column;
    gap: 10px;
  }

  .hamburger {
    display: block;
    position: relative; /* Ensure it remains positioned correctly */
  }
}
</style>
