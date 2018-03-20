<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{employees}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'CtkVuejsTest',
      employees: [
        {id: 1, name: 'Loïc', age: 28, sport: 'Football'},
        {id: 2, name: 'Aurélien', age: '28', sport: 'Basket'},
        {id: 3, name: 'Melwin', age: '25', sport: 'Ski'},
        {id: 4, name: 'Sophie', age: '34', sport: 'Snowboard'},
        {id: 5, name: 'Martin', age: '40', sport: 'Poker'},
        {id: 6, name: 'Jeremy', age: '35', sport: 'Danse'},
        {id: 7, name: 'Maxime', age: '26', sport: 'Football'},
        {id: 8, name: 'Matthieu', age: '30', sport: 'Football'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
