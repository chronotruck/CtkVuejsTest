<template>
  <div class="employees-list">
    <table>
      <thead>
        <td>
          ID
        </td>
        <td>
          Nom
        </td>
        <td>
          Age
        </td>
        <td>
          Sport
        </td>
        <td>
          Action
        </td>
      </thead>
      <tbody>
        <tr
          v-for="(employee, k) in employees"
          :key="k"
        >
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.age }}</td>
          <td>{{ employee.sport }}</td>
          <td>
            <button @click="editEmployee(employee)">
              Editer
            </button>
            <button @click="deleteEmployee(employee.id)">
              Supprimer
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Edit employee component -->
    <edit-employee
      v-if="editVisible"
      :employee="editEmployeeData"
      @input="setData"
      @close="closeEdit"
    />
  </div>
</template>

<script>
  import EditEmployee from './EmployeesList/EditEmployee';

  /**
   * @typedef Employee
   * @property {number} id - Employee ID
   * @property {string} name - Employee name
   * @property {number} age - Employee age
   * @property {string} sport - Employee sport
   */

  /**
   * Show employees list
   * @module component - employeesList
   * @prop {Array<Employee>} employees - List of employees
   */
  export default {
    name: 'employees-list',
    props: {
      employees: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        editVisible: false,
        editEmployeeData: null,
      };
    },
    methods: {
      /**
       * Delete a specific employee
       * @function deleteEmployee
       * @prop {number} id - Employee ID
       * @emits employeesList#delete
       */
      deleteEmployee(id) {
        this.$emit('delete', id);
      },
      /**
       * Edit an employee's information
       * @function editEmployee
       * @param {object} employee - Employee data
       */
      editEmployee(employee) {
        this.editVisible = true;
        this.editEmployeeData = employee;
      },
      /**
       * Close the modal
       * @function closeEdit
       */
      closeEdit() {
        this.editVisible = false;
      },
      /**
       * Set the data to an employee
       * @function setData
       * @param {object} data - The employee data
       * @param {object} id - The employee id
       */
      setData(data, id) {
        const employeeFound = this.employees.find(el => el.id === id);
        if (employeeFound) {
          Object.keys(data).forEach((k) => {
            employeeFound[k] = data[k];
          });
        }

        this.editVisible = false;
      },
    },
    components: {
      EditEmployee,
    },
  };
</script>

<style lang="scss" scoped>
  .employees-list{
    table{
      border: 1px solid lightgrey;

      thead{
        color: darkgreen;
      }
    }
  }
</style>
