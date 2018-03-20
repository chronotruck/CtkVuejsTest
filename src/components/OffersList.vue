<template>
  <div>{{offersList}}</div>
</template>

<script>
  export default {
    name: 'OffersList',
    data () {
      return {
        offersList: null
      }
    },
    http: {
      root: '192.168.1.7',
      headers: {
        Authorization: 'Bearer goodToken'
      }
    },
    created () {
      this.$http.get('http://192.168.1.7:1234/v2/companies/123456789/offers', {headers: {Authorization: 'Bearer goodToken'}}).then(response => {
        this.offersList = response.body
      }, response => {
        console.log('error', response)
      })
    }
  }
</script>
