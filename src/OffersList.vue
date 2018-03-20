<template>
  <div id="offers-list">
    <h1>
      Offres
    </h1>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'offers-list',
    created() {
      const axiosInstance = axios.create({
        baseURL: 'http://192.168.11.30/',
        headers: {
          'Authorization': 'Bearer goodToken',
        },
      });
      
      axiosInstance.get('/v2/companies/123456789/offers').then((res) => {
        console.log('res', res);
      }).catch((err) => {
        console.error('error', err);
      });
    },
    data() {
      return {
        requestData: null,
      };
    },
  };
</script>

<style lang="scss" scoped>
</style>

