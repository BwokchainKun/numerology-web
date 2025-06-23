<template>
  <div class="homepage">
    <header class="hero-section">
      <h1>Welcome to the Mystical World of Numerology</h1>
      <p>Unlock the secrets of your life path, personality, and destiny through numbers!</p>
      <router-link to="/numerologyCalculator"><u style="color:#fff;" >Calculate your Chaldean Numerology here!</u></router-link>
    </header>

    <section id="numerology-overview">
      <h2>🔢 What is Numerology?</h2>
      <p>
        Numerology is the study of the spiritual and mystical significance of numbers. It’s believed that numbers carry
        energy and vibrations that shape our personalities, decisions, and life paths. Discover how numbers can provide
        profound insights into your hidden potential.
      </p>
    </section>

    <section id="chaldean-numerology">
      <h2>🌌 What is Chaldean Numerology?</h2>
      <p>
        Chaldean Numerology is one of the oldest numerology systems, originating in Babylon. Unlike the more popular
        Pythagorean system, it assigns numbers to letters based on their vibrational frequencies, creating a deeper
        connection between names and destinies. Dive into this ancient wisdom and see how it resonates with your life.
      </p>
    </section>

    <section id="how-to-calculate">
      <h2>🧮 How to Calculate Chaldean Numerology</h2>
      <p>Follow these steps to uncover your core numbers:</p>
      <ol>
        <li>Assign numerical values to each letter in your name using the Chaldean chart.</li>
        <li>Add the numbers together to get a sum.</li>
        <li>Reduce the sum to a single digit unless it’s a master number (11, 22).</li>
      </ol>
      <p>
        <strong>Example:</strong> For the name "John," J(1) + O(7) + H(5) + N(5) = 18 → 1 + 8 = 9. John’s core number is 9.
      </p>
    </section>

    <section id="brief-history">
      <h2>📜 Brief History of Numerology</h2>
      <p>
        Numerology dates back thousands of years to ancient civilizations like Babylon, Egypt, and Greece. The Chaldean
        system is one of the most respected, deeply rooted in mystical practices. Later, the Greek philosopher
        Pythagoras introduced the Western numerology system, which gained widespread popularity. Each system holds unique
        insights into the power of numbers.
      </p>
    </section>

    <section id="numbers-meanings">
      <h2>✨ The Numbers and Their Meanings</h2>
      <p>
        Every number has its own unique vibration and meaning. Explore the core numbers and discover their influence on
        your life:
      </p>
      <ul>
        <li><strong>1: The Trailblazer</strong> - Leadership, independence, and originality.</li>
        <li><strong>2: The Harmonizer</strong> - Cooperation, balance, and diplomacy.</li>
        <li><strong>3: The Creative</strong> - Creativity, expression, and optimism.</li>
        <li><strong>4: The Builder</strong> - Stability, practicality, and discipline.</li>
        <li><strong>5: The Adventurer</strong> - Freedom, adaptability, and adventure.</li>
        <li><strong>6: The Caregiver</strong> - Responsibility, care, and harmony.</li>
        <li><strong>7: The Seeker</strong> - Spirituality, introspection, and wisdom.</li>
        <li><strong>8: The Powerhouse</strong> - Power, ambition, and material success.</li>
        <li><strong>9: The Humanitarian</strong> - Compassion, humanitarianism, and idealism.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.homepage {
  margin: 0 auto;
  max-width: 900px;
  padding: 20px;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.8;
  color: #f0f0f0;
  background: transparent;
}

body {
  background: black;
  background-size: cover;
  background-attachment: fixed;
  color: #f0f0f0;
}

.hero-section {
  text-align: center;
  padding: 50px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.hero-section h1 {
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 0 2px 5px #6a11cb;
}

.hero-section p {
  font-size: 1.2rem;
  color: #cfcfcf;
}

section {
  margin: 40px 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #fff;
  border-left: 5px solid #6a11cb;
  padding-left: 10px;
}

p,
ol,
ul {
  font-size: 1rem;
  color: #cfcfcf;
}

ul,
ol {
  margin-left: 20px;
}

ul {
  list-style: disc;
}

ol {
  list-style: decimal;
}

.hero-section,
section {
  animation: fadeIn 2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.section-image {
  width: 100%;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  .hero-section p {
    font-size: 1rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}
</style>
