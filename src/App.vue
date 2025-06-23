<template>
    <div id="app">
      <!-- Navbar Component -->
      <AppNavbar />
      <section class="wrapper">
        <div v-for="i in starCount" :key="i" :class="'stars' + i" :style="getStarStyle(i)"></div>
    </section>

      <!-- Router View -->
      <router-view />
    </div>
    <section class="wrapper">
        <div v-for="i in starCount" :key="i" :class="'stars' + i" :style="getStarStyle(i)"></div>
    </section>
    <br>
    <br>
    <br>
    <!-- Footer Section -->
    <div class="footer">
      &copy; 2024 The Mystic | All Rights Reserved
    </div>
  </template>

<script>
import AppNavbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  data () {
    return {
      starCount: 3,
      starStyles: [
        { width: '1px', height: '1px', animationDuration: '50s' },
        { width: '2px', height: '2px', animationDuration: '100s' },
        { width: '3px', height: '3px', animationDuration: '150s' }
      ]
    }
  },
  methods: {
    generateBoxShadow (index) {
      const starCount = 500
      const color = '#fff'

      const shadows = []
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * window.innerWidth * 2 - window.innerWidth
        const y = Math.random() * window.innerHeight * 2
        shadows.push(`${x}px ${y}px ${color}`)
      }
      return shadows.join(', ')
    },
    getStarStyle (index) {
      const starStyle = this.starStyles[index - 1]
      return {
        width: starStyle.width,
        height: starStyle.height,
        animation: `animStar ${starStyle.animationDuration} linear infinite`,
        background: '#fff',
        boxShadow: this.generateBoxShadow(index)
      }
    }
  }
}
</script>

  <style>
  /* Background Starry Skyvue */
  html, body {
      height: 100%;
      margin:  0;
      background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  }

  .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
  }

  .stars {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      animation: animStar linear infinite;
      min-height: 100vh;
  }

  .stars:after {
      content: '';
      position: absolute;
      top: 2000px;
      width: 100%;
      height: 100%;
      background: transparent;
  }

  .stars2 {
      animation-duration: 100s;
  }

  .stars3 {
      animation-duration: 150s;
  }

  @keyframes animStar {
      from {
          transform: translateY(0);
      }
      to {
          transform: translateY(-2000px);
      }
  }

  .footer {
    position: relative;
    background-color: #1e2a2f;
  text-align: center;
  color: aliceblue;
  padding: 10px;
  margin-top: 50px;
  margin-bottom: -10;
}
  </style>
