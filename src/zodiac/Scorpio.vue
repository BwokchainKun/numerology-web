<template>
  <div class="zodiac-about">
    <!-- On the left content -->
    <div class="zodiac-image">
      <h1>{{ scorpio.title }}</h1>
      <img :src="scorpio.url" :alt="scorpio.title" class="zodiac-image">
    </div>
    <!-- Left Content End -->
     <!-- For Right Content -->
    <div class="description">
      <p style="color:wheat;" ><strong>Dates:</strong> {{ scorpio.zodiacdate }}</p>
    <p style="color:wheat;"><strong>Element:</strong> {{ scorpio.element }}</p>
    <p style="color:wheat;"><strong>Ruling Planet:</strong> {{ scorpio.rulingPlanet }}</p>
    <p style="color:wheat;" v-if="scorpio.description"><strong>Description:</strong> {{ scorpio.description }}</p>
    <p style="color:wheat;"><strong>Best Matches Partner:</strong> {{ scorpio.partner }}</p>
    </div>
  </div>
</template>

<script>
import { ZodiacData } from '../ZodiacData'

export default {
  name: 'ScorpioAbout',
  data () {
    return {
      scorpio: ZodiacData.find(z => z.title === 'Scorpio')
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
