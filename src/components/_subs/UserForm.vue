<template>
  <div class="user-form">
    <input type="text" v-model="employee.name"> <br>
    <input type="text" v-model="employee.age"> <br>
    <input type="text" v-model="employee.sport"> <br>
    <button @click="submit(employee)">Submit</button>
  </div>
</template>

<script>
  export default {
    name: 'UserForm',
    props: {
      employee: {
        required: false
      }
    },
    methods: {
      submit (employee) {
        console.log('employee', employee)
        this.$emit('submit-user-form')
      }
    }
  }
</script>

<style>

</style>
