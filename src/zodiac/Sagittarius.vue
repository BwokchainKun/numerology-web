<template>
  <div class="zodiac-about">
    <!-- On the left content -->
    <div class="zodiac-image">
      <h1>{{ sagittarius.title }}</h1>
      <img :src="sagittarius.url" :alt="sagittarius.title" class="zodiac-image">
    </div>
    <!-- Left Content End -->
     <!-- For Right Content -->
    <div class="description">
      <p style="color:wheat;" ><strong>Dates:</strong> {{ sagittarius.zodiacdate }}</p>
    <p style="color:wheat;"><strong>Element:</strong> {{ sagittarius.element }}</p>
    <p style="color:wheat;"><strong>Ruling Planet:</strong> {{ sagittarius.rulingPlanet }}</p>
    <p style="color:wheat;" v-if="sagittarius.description"><strong>Description:</strong> {{ sagittarius.description }}</p>
    <p style="color:wheat;"><strong>Best Matches Partner:</strong> {{ sagittarius.partner }}</p>
    </div>
  </div>
</template>

<script>
import { ZodiacData } from '../ZodiacData'

export default {
  name: 'SagittariusAbout',
  data () {
    return {
      sagittarius: ZodiacData.find(z => z.title === 'Sagittarius')
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
