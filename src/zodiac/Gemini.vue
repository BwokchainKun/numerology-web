<template>
  <div class="zodiac-about">
    <!-- On the left content -->
    <div class="zodiac-image">
      <h1>{{ gemini.title }}</h1>
      <img :src="gemini.url" :alt="gemini.title" class="zodiac-image">
    </div>
    <!-- Left Content End -->
     <!-- For Right Content -->
    <div class="description">
      <p style="color:wheat;" ><strong>Dates:</strong> {{ gemini.zodiacdate }}</p>
    <p style="color:wheat;"><strong>Element:</strong> {{ gemini.element }}</p>
    <p style="color:wheat;"><strong>Ruling Planet:</strong> {{ gemini.rulingPlanet }}</p>
    <p style="color:wheat;" v-if="gemini.description"><strong>Description:</strong> {{ gemini.description }}</p>
    <p style="color:wheat;"><strong>Best Matches Partner:</strong> {{ gemini.partner }}</p>
    </div>
  </div>
</template>

<script>
import { ZodiacData } from '../ZodiacData'

export default {
  name: 'GeminiAbout',
  data () {
    return {
      gemini: ZodiacData.find(z => z.title === 'Gemini')
    }
  }
}
</script>

<style scoped>
.description {
  margin-top:10rem;
  margin-left: 5rem;
}
.zodiac-about {
  margin-top: -50px;
  display: flex;
  padding: 20px;
  margin-left: 10px;
}

.zodiac-image {
  width: 300px;
  height: auto;
  margin: 20px 0;
}

h1 {
  font-size: 3em;
  color: aliceblue;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 1.5em;
  color: #555;
}

strong {
  font-weight: bold;
}

@media screen and (max-width: 600px) {
  .zodiac-about {
  margin-top: -50px;
  display: flex;
  margin-left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.zodiac-image {
  width: 90vw;
  height: auto;
}
.description {
  margin-top:-40px;
  margin-left: 0px;
}
}

</style>
