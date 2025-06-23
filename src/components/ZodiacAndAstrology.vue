<template>
  <!-- Zodiac Photo Collections -->
    <div class="container">
      <h1>The 12 Zodiac Signs</h1>
      <div class="gallery">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="img-box"
          :style="{ backgroundImage: `url(${image.url})` }"
        >
        <router-link :to="image.desti" style="display:flex;flex-direction: column;">
            <h2 style="color:black" class="namezodiac">{{ image.title }} <br>{{ image.zodiacdate }}</h2>
        </router-link>
        </div>
      </div>
    </div>
    <!-- Photo Collections End -->
     <!-- Zodiac Finder Section Start -->
    <div class="zodiac-calculator">
    <h2>✨ Find out your Zodiac SIgn</h2>

    <label for="birthdate">Enter your birthdate:</label>
    <input type="date" v-model="birthdate" />

    <!-- Finder Button -->
    <button @click="calculateZodiac" :disabled="loading">Identificate your Zodiac</button>

    <!-- Zodiac Sign Result -->
    <div v-if="zodiacSign" class="zodiac-result">
      <h3>Your Zodiac Sign is: <strong>{{ zodiacSign.title }}</strong></h3>
      <img :src="zodiacSign.url" :alt="zodiacSign.title" class="zodiac-image" />
      <p><strong>Element:</strong> {{ zodiacSign.element }}</p>
      <p><strong>Ruling Planet:</strong> {{ zodiacSign.rulingPlanet }}</p>
      <button @click="goToPage(zodiacSign.desti)">Read Your Zodiac Details</button>
    </div>

    <!-- Loading Spinner -->
    <div v-if="loading" class="spinner-container">
      <div class="spinner"></div>
      <p>Loading your Zodiac Sign...</p>
    </div>
  </div>
  <!-- Zodiac FInder ENDS -->
   <!-- Zodiac For Reading Contents -->
  <div class="container-content" >
    <header>
      Explore the Zodiac Signs
    </header>

    <div class="container-zodiac">
      <h1 style="color:wheat;" >Zodiac Constellation</h1>
      <p style="color:aliceblue;">
        The zodiac is an ancient system of astrology that divides the sky into 12 sections, each associated with a constellation. These 12 zodiac signs serve as a framework to understand personalities, relationships, and even life predictions. Rooted in both astronomy and mythology, the zodiac has been a guide for self-awareness and cosmic insight for centuries.
      </p>
      <br>
      <h1 style="color:wheat;">What Is the Zodiac?</h1>
      <p style="color:aliceblue;">
        The term "zodiac" comes from the Greek word <em>zōidiakos kyklos</em>, meaning "circle of animals." This celestial belt lies along the path of the Sun, the Moon, and the planets as seen from Earth, called the ecliptic. The zodiac signs are derived from 12 constellations that align with this path. Each zodiac sign corresponds to specific dates and is believed to influence a person’s character and destiny based on their birthdate. These signs are used in astrology to interpret individual traits and cosmic influences.
      </p>
      <br>
      <h1 style="color:wheat;">The Role of Astrology in Personality and Life Predictions</h1>
      <div class="card">
        <h2 style="color:wheat;">1. Personality Traits</h2>
        <br>
        <p style="color:aliceblue;">
          Each zodiac sign has distinct characteristics, shaped by their element (fire, earth, air, or water) and modality (cardinal, fixed, or mutable). Examples include:
        </p>
        <br>
        <ul style="color:aliceblue; margin-left:30px;">
          <li><strong>Aries (March 21 - April 19):</strong>Bold and adventurous, Aries are natural leaders who thrive on challenges.</li>
          <li><strong>Taurus (April 20 - May 20):</strong> Practical and dependable, Taurus values stability and enjoys life's comforts.</li>
          <li><strong>Gemini (May 21 - June 20):</strong> Curious and sociable, Geminis are adaptable and thrive on intellectual stimulation.</li>
          <li><strong>Cancer (June 21 - July 22):</strong> Nurturing and intuitive, Cancer deeply values family and emotional security.</li>
          <li><strong>Leo (July 23 - August 22):</strong> Confident and charismatic, Leos enjoy the spotlight and inspire those around them.</li>
          <li><strong>Virgo (August 23 - September 22):</strong> Analytical and detail-oriented, Virgos are perfectionists with a strong sense of duty.</li>
          <li><strong>Libra (September 23 - October 22):</strong> Diplomatic and charming, Libras seek harmony and balance in all aspects of life.</li>
          <li><strong>Scorpio (October 23 - November 21):</strong> Passionate and resourceful, Scorpios are known for their intensity and determination.</li>
          <li><strong>Sagittarius (November 22 - December 21):</strong> Adventurous and optimistic, Sagittarians are seekers of truth and knowledge.</li>
          <li><strong>Capricorn (December 22 - January 19):</strong> Ambitious and disciplined, Capricorns are goal-oriented and value hard work.</li>
          <li><strong>Aquarius (January 20 - February 18):</strong> Visionary and independent, Aquarians are forward-thinkers who embrace change.</li>
          <li><strong>Pisces (February 19 - March 20):</strong> Compassionate and artistic, Pisces are dreamers with a deep connection to their emotions.</li>
        </ul>
      </div>
      <br>
      <div class="card">
        <h2 style="color:wheat;">2. Life Path Predictions</h2>
        <br>
        <p style="color:aliceblue;">
          Astrology also examines how planetary movements (such as transits, retrogrades, and alignments) interact with a person’s zodiac sign to predict opportunities, challenges, or growth periods. For example:
        </p>
        <br>
        <ul style="color:aliceblue; margin-left: 40px;">
          <li>A Mercury retrograde might bring communication challenges but also an opportunity to reassess and refine.</li>
          <li>A Jupiter transit often signifies expansion, good fortune, or new opportunities.</li>
        </ul>
        <br>
      </div>
      <div class="card">
        <h2 style="color:wheat;">3. Relationships and Compatibility</h2>
        <p style="color:aliceblue;">
          The zodiac is often used to assess compatibility between signs, providing insight into friendships, partnerships, and romantic connections. For instance:
        </p>
        <br>
        <ul style="color:aliceblue; margin-left: 40px;">
          <li>Fire signs (Aries, Leo, Sagittarius) often have dynamic and passionate relationships with each other.</li>
          <li>Earth signs (Taurus, Virgo, Capricorn) value stability and tend to build strong, enduring bonds.</li>
          <li>Air signs (Gemini, Libra, Aquarius) thrive on intellectual connection and shared ideas.</li>
          <li>Water signs (Cancer, Scorpio, Pisces) prioritize emotional depth and intuitive understanding.</li>
        </ul>
      </div>

      <h1 style="color:wheat;">Elements of the Zodiac</h1>
      <p style="color:aliceblue;">
        Each zodiac sign belongs to one of four elements, influencing their energy and traits:
      </p>
      <br>
      <ul style="color:aliceblue;">
        <li><strong>Fire (Aries, Leo, Sagittarius):</strong> Energetic, enthusiastic, and action-oriented.</li>
        <li><strong>Earth (Taurus, Virgo, Capricorn):</strong> Grounded, practical, and dependable.</li>
        <li><strong>Air (Gemini, Libra, Aquarius):</strong> Intellectual, curious, and communicative.</li>
        <li><strong>Water (Cancer, Scorpio, Pisces):</strong> Emotional, intuitive, and empathetic.</li>
      </ul>
      <br>
      <h1 style="color:wheat;">Modalities of the Zodiac</h1>
      <p style="color:aliceblue;">
        Each sign also falls under one of three modalities, reflecting their approach to life:
      </p>
      <br>
      <ul style="color:aliceblue;">
        <li><strong>Cardinal (Aries, Cancer, Libra, Capricorn):</strong> Leaders and initiators, driven to take action.</li>
        <li><strong>Fixed (Taurus, Leo, Scorpio, Aquarius):</strong> Steady and reliable, with a focus on perseverance.</li>
        <li><strong>Mutable (Gemini, Virgo, Sagittarius, Pisces):</strong> Adaptable and flexible, thriving on change and variety.</li>
      </ul>
      <br>
      <p>
        The zodiac is more than just a collection of signs; it’s a rich system that connects the cosmos to human life. Whether exploring personality traits, predicting life paths, or fostering deeper relationships, the zodiac offers timeless wisdom and guidance for understanding ourselves and the world around us.
      </p>
    </div>
  </div>
    </template>

<script>
import { ZodiacData } from '@/ZodiacData'
export default {
  data () {
    return {
      images: ZodiacData,
      birthdate: null,
      zodiacSign: null,
      loading: false
    }
  },
  methods: {
    calculateZodiac () {
      if (!this.birthdate) return
      this.loading = true

      setTimeout(() => {
        const date = new Date(this.birthdate)
        const month = date.getMonth() + 1
        const day = date.getDate()
        this.zodiacSign = null

        for (const sign of ZodiacData) {
          const { zodiacdate } = sign
          const [start, end] = zodiacdate.split(' - ')
          const [startMonth, startDay] = this.parseMonthDay(start)
          const [endMonth, endDay] = this.parseMonthDay(end)
          const isInRange =
        (startMonth < endMonth &&
          ((month > startMonth || (month === startMonth && day >= startDay)) &&
            (month < endMonth || (month === endMonth && day <= endDay)))) ||
        (startMonth > endMonth &&
          ((month > startMonth || (month === startMonth && day >= startDay)) ||
            (month < endMonth || (month === endMonth && day <= endDay))))

          if (isInRange) {
            this.zodiacSign = sign
            break
          }
        }

        this.loading = false

        if (!this.zodiacSign) {
          console.warn('No zodiac sign matched for the provided birthdate:', this.birthdate)
        }
      }, 1500)
    },
    parseMonthDay (dateString) {
      const [monthName, day] = dateString.split(' ')
      const monthIndex = new Date(`${monthName} 1`).getMonth() + 1
      return [monthIndex, parseInt(day)]
    },
    goToPage (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
/* For Zodiac Calculator */
.zodiac-calculator {
  background-color: #111;
  color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.7);
  max-width: 500px;
  margin: 30px auto;
  text-align: center;
}

input[type="date"] {
  padding: 10px;
  border: 1px solid #fff;
  background-color: #333;
  color: white;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
}

button {
  background-color: #ffcc00;
  color: #111;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;
  margin-bottom: 20px;
}

button:hover {
  background-color: #f0b800;
}

button:disabled {
  background-color: #777;
  cursor: not-allowed;
}

.zodiac-result {
  margin-top: 20px;
}

.zodiac-image {
  width: 150px;
  height: auto;
  margin: 10px auto;
}

.spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner {
  border: 4px solid transparent;
  border-top: 4px solid #ffcc00;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

p {
  font-size: 20px;
  color: aliceblue;
}

ul{
  font-size: 20px;
}

strong {
  color: #ffcc00;
}
/* The end Zodiac Calculator */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .constela{
    width: 600px;
    margin-left: 20px;
  }

  .explanation {
    margin: 25px 0 0 5%;
  }

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: Arial, sans-serif;
    padding: 20px;
  }

  h1 {
    font-family: "Dancing Script", cursive;
    margin-bottom: 20px;
    color:aliceblue;
  }

  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .img-box {
    width: 100px;
    height: 300px;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: width 0.4s;
  }

  .img-box h2 {
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
    margin: 0;
    padding: 10px;
    font-size: 14px;
    transition: bottom 0.4s, opacity 0.4s;
    opacity: 0;
  }

  .img-box:hover {
    width: 250px;
  }

  .img-box:hover h2 {
    bottom: 10px;
    opacity: 1;
  }

  /* Zodiac Explanation Start */
  header {
  background: linear-gradient(90deg, #000428, #004e92);
  color: wheat;
  text-align: center;
  padding: 20px 0;
  font-size: 2em;
}

.container-zodiac{
  margin-top: 20px;
  margin-left: 50px;
}

  /* Zodiac Explanation End */

  @media screen and (max-width: 600px) {
    .constela{
        margin: 0;
        width: 90vw;
    }
    .gallery {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
    .img-box {
      width: 70vw;
      height: 90px;
      transition: all 0.4s ease-in-out;
    }

    .img-box:hover {
        width: 70vw;
      height: 250px;
    }

    .namezodiac {
      font-size: 12px;
      transition: all 0.4s ease-in-out;
    }

    .container-zodiac{
  margin-top: 20px;
  margin-left: 5vw;
  margin-right: 5vw;
  justify-content: center;
  align-items: center;}
  }
  </style>
