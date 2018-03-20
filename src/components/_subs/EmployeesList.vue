<template>
  <div class="list-container">
    <table>
      <tr>
        <th>id</th>
        <th>age</th>
        <th>name</th>
        <th>sport</th>
        <th>action</th>
      </tr>
      <tr v-for="employee in employees" :key="employee.id">
        <td>
          {{employee.id}}
        </td>
        <td>
          {{employee.age}}
        </td>
        <td>
          {{employee.name}}
        </td>
        <td>
          {{employee.sport}}
        </td>
        <td>
          <button @click="editUser(employee)">Edit User</button>
          <button @click="deleteUser(employee)">Delete User</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'EmployeesList',
    props: {
      employees: {
        type: Array,
        required: true
      }
    },
    methods: {
      editUser (employee) {
        this.$emit('open-edit-user-form', employee)
      },
      deleteUser (employee) {
        this.$emit('delete-employee', employee)
      }
    }
  }
</script>

<style>
  .list-container table {
    width: 100%;
  }
  table {
    border-collapse: collapse;
  }
  tr, td, th {
    collapse: collapse;
    border: 1px solid;
  }
</style>
