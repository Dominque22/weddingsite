<template>
  <v-timeline align="start">
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :dot-color="year.color"
      size="small"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold`"
          :style="{color: years[i].color}"
          v-text="year.year"
        ></div>
      </template>
      <div>
        <h2 :class="`mt-n1 headline font-weight-light mb-4`"
        :style="{color: years[i].color}">
          {{years[i].title}}
        </h2>
        <div>
          {{years[i].text}}        
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      years: [
        {
          color: '#FFCC99',
          year: '1960',
          text: '1 Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          title: 'One',
        },
        {
          color: '#AB1150',
          year: '1970',
          text: '2 Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          title: 'two',
        },
        {
          color: '#FFCC99',
          year: '1980',
          text: '3 Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          title: 'three',
        },
        {
          color: '#AB1150',
          year: '1990',
          text: '4 Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          title: 'four',
        },
        {
          color: '#FFCC99',
          year: '2000',
          text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
          title: 'five',
        },
      ],
    }),
  }
</script>