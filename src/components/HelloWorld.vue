<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      {{employees}}
    </div>
    <employees-list :employees="employees" @open-edit-user-form="editUser" @delete-employee="deleteUser"/>
    <user-form :employee="employeeToEdit" v-if="employeeToEdit" @submit-user-form="initEmployeeToEdit"/>
  </div>
</template>

<script>
import EmployeesList from './_subs/EmployeesList'
import UserForm from './_subs/UserForm'
export default {
  name: 'HelloWorld',
  components: {
    EmployeesList,
    UserForm
  },
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
      ],
      employeeToEdit: null
    }
  },
  methods: {
    editUser (employee) {
      this.employeeToEdit = employee
    },
    deleteUser (employee) {
      this.employees = this.employees.filter((element) => { return element.id !== employee.id })
    },
    initEmployeeToEdit () {
      this.employeeToEdit = null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .hello {
    width: 80%;
    margin: 0 auto;
  }
</style>
