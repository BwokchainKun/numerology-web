<template>
  <div class="numerology-app">
    <div class="header">
      <h1>Chaldean Numerology & Zodiac Calculator</h1>
      <p>Discover your Destiny, Soul Urge, Dream Numbers, and Zodiac Sign.</p>
    </div>

    <form class="numerology-form" @submit.prevent="calculateResults">
      <label for="fullname">Enter Your Full Name:</label>
      <br />
      <input
        id="fullname"
        v-model="fullName"
        placeholder="Type your full name here..."
        required
      />
      <br />

      <label for="birthdate">Enter Your Birthdate:</label>
      <br />
      <input id="birthdate" type="date" v-model="birthDate" required />
      <br />

      <button type="submit">Calculate</button>
    </form>

    <div v-if="isLoading" class="loading">
      <div class="spinner"></div>
      <p>Calculating your results...</p>
    </div>

    <div v-else-if="result" class="result">
      <h2>Your Results</h2>
      <p><strong>Full Name:</strong> {{ fullName }}</p>
      <p><strong>Birthdate:</strong> {{ birthDate }}</p>
      <h3>Numerology</h3>
      <p><strong>Life Number:</strong> {{ result.lifeNumber }} ({{ result.lifeTitle }})</p>
<p><strong>Life Number Description:</strong> {{ result.lifeDescription }}</p>

<p><strong>Soul Urge Number:</strong> {{ result.soulUrgeNumber }}</p>
<p><strong>Soul Urge Description:</strong> {{ result.soulUrgeDescription }}</p>

<p><strong>Dream Number:</strong> {{ result.dreamNumber }}</p>
<p><strong>Dream Description:</strong> {{ result.dreamDescription }}</p>
      <h3>Zodiac Sign</h3>
      <p><strong>Zodiac Sign:</strong> {{ zodiacSign?.title }}</p>
      <p><strong>Element:</strong> {{ zodiacSign?.element }}</p>
      <p><strong>Ruling Planet:</strong> {{ zodiacSign?.rulingPlanet }}</p>
      <img
        v-if="zodiacSign?.url"
        :src="zodiacSign.url"
        :alt="zodiacSign.title"
        class="zodiac-image"
      />
      <p>{{ zodiacSign?.description }}</p>
      <p><strong>Zodiac Best Partner:</strong> {{ zodiacSign?.partner }}</p>
    </div>
  </div>
</template>

<script>
import { ZodiacData } from '@/ZodiacData'
import { Chaldean } from '@/Chaldean'

export default {
  data () {
    return {
      fullName: '',
      birthDate: '',
      isLoading: false,
      result: null,
      zodiacSign: null
    }
  },
  methods: {
    calculateResults () {
      if (!this.birthDate || !this.fullName) {
        alert('Please provide both birthdate and full name.')
        return
      }
      this.isLoading = true
      this.result = null
      this.zodiacSign = null

      setTimeout(() => {
        // Numerology Calculations
        const lifeNumber = this.calculateLifeNumber(this.fullName)
        const soulUrgeNumber = this.calculateSoulUrgeNumber(this.fullName)
        const dreamNumber = this.calculateDreamNumber(this.fullName)

        const lifeData = Chaldean.find(entry => entry.LifeNumber === lifeNumber)
        const soulUrgeData = Chaldean.find(entry => entry.LifeNumber === soulUrgeNumber)
        const dreamData = Chaldean.find(entry => entry.LifeNumber === dreamNumber)

        this.result = {
          lifeNumber,
          soulUrgeNumber,
          dreamNumber,
          lifeTitle: lifeData?.title || 'Unknown',
          lifeDescription: lifeData?.destiny || 'No description available.',
          soulUrgeDescription: soulUrgeData?.soulurge || 'No description available.',
          dreamDescription: dreamData?.dreamnums || 'No description available.'
        }

        // Zodiac Sign Calculation
        this.calculateZodiac()

        this.isLoading = false
      }, 1500)
    },

    calculateLifeNumber (name) {
      const chaldeanMap = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 8,
        G: 3,
        H: 5,
        I: 1,
        J: 1,
        K: 2,
        L: 3,
        M: 4,
        N: 5,
        O: 7,
        P: 8,
        Q: 1,
        R: 2,
        S: 3,
        T: 4,
        U: 6,
        V: 6,
        W: 6,
        X: 5,
        Y: 1,
        Z: 7
      }
      const sum = name
        .toUpperCase()
        .replace(/[^A-Z]/g, '')
        .split('')
        .reduce((total, char) => total + (chaldeanMap[char] || 0), 0)

      return this.reduceToSingleDigit(sum)
    },

    calculateSoulUrgeNumber (name) {
      const chaldeanMap = { A: 1, E: 5, I: 1, O: 7, U: 6 }
      const vowels = 'AEIOU'

      const sum = name
        .toUpperCase()
        .split('')
        .filter((char) => vowels.includes(char))
        .reduce((total, char) => total + (chaldeanMap[char] || 0), 0)

      return this.reduceToSingleDigit(sum)
    },

    calculateDreamNumber (name) {
      const chaldeanMap = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 8,
        G: 3,
        H: 5,
        I: 1,
        J: 1,
        K: 2,
        L: 3,
        M: 4,
        N: 5,
        O: 7,
        P: 8,
        Q: 1,
        R: 2,
        S: 3,
        T: 4,
        U: 6,
        V: 6,
        W: 6,
        X: 5,
        Y: 1,
        Z: 7
      }
      const vowels = 'AEIOU'

      const sum = name
        .toUpperCase()
        .split('')
        .filter((char) => !vowels.includes(char))
        .reduce((total, char) => total + (chaldeanMap[char] || 0), 0)

      return this.reduceToSingleDigit(sum)
    },

    reduceToSingleDigit (num) {
      while (num > 9 && num !== 11 && num !== 22) {
        num = num
          .toString()
          .split('')
          .reduce((a, b) => a + parseInt(b, 10), 0)
      }
      return num
    },

    calculateZodiac () {
      const date = new Date(this.birthDate)
      const month = date.getMonth() + 1
      const day = date.getDate()
      this.zodiacSign = null

      for (const sign of ZodiacData) {
        const { zodiacdate } = sign
        const [start, end] = zodiacdate.split(' - ')
        const [startMonth, startDay] = this.parseMonthDay(start)
        const [endMonth, endDay] = this.parseMonthDay(end)

        if (startMonth === null || endMonth === null) {
          console.error('Failed to parse zodiac date range:', zodiacdate)
          continue
        }

        const isNormalRange =
          startMonth < endMonth &&
          ((month > startMonth || (month === startMonth && day >= startDay)) &&
            (month < endMonth || (month === endMonth && day <= endDay)))

        const isYearCrossingRange =
          startMonth > endMonth &&
          ((month > startMonth || (month === startMonth && day >= startDay)) ||
            (month < endMonth || (month === endMonth && day <= endDay)))

        if (isNormalRange || isYearCrossingRange) {
          this.zodiacSign = sign
          break
        }
      }

      if (!this.zodiacSign) {
        console.warn('No zodiac sign matched for the provided birthdate:', this.birthDate)
        alert('Unable to determine your zodiac sign. Please check your birthdate and try again.')
      }
    },

    parseMonthDay (dateString) {
      const [monthName, day] = dateString.split(' ')
      if (!monthName || isNaN(day)) {
        console.error('Invalid date string:', dateString)
        return [null, null]
      }
      const monthIndex = new Date(`${monthName} 1`).getMonth() + 1
      return [monthIndex, parseInt(day, 10)]
    }
  }
}
</script>
<style scoped>
.numerology-app {
  font-family: 'Georgia', serif;
  color: #333;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  background: linear-gradient(135deg, #fdfcfb, #e2d1c3);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5em;
  color: #704214;
}

.header p {
  font-size: 1.2em;
  color: #5c3e1b;
}

.numerology-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
}

.numerology-form input {
  padding: 10px;
  width: 70%;
  border: 2px solid #704214;
  border-radius: 5px;
  font-size: 1em;
  margin-bottom: 10px;
}

.numerology-form button {
  padding: 10px 20px;
  background: #704214;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease;
}

.numerology-form button:hover {
  background: #5c3e1b;
}

.loading {
  font-size: 1.5em;
  color: #704214;
}

.spinner {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #704214;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.result {
  text-align: left;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.result h2 {
  color: #704214;
  text-align: center;
  margin-bottom: 15px;
}

.result h3 {
  color: #5c3e1b;
  margin-top: 20px;
  text-decoration: underline;
}

.result p {
  font-size: 1em;
  color: #333;
  margin-bottom: 10px;
}

.zodiac-image {
  display: block;
  margin: 10px auto;
  width: 250px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #704214;
}

@media screen and (max-width:600px){
  .zodiac-image {
  display: block;
  margin: 10px auto;
  width: 150px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #704214;
}
}
</style>
