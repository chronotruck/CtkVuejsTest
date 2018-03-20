<template>
  <div class="edit-employee">
    <div class="edit-employee-content">
      <div class="edit-employee-head">
        <button
          @click="closeEdit"
        >
          Fermer
        </button>
      </div>
      <div class="edit-employee-form">
        <form @submit="formSubmitted">
          <fieldset>
            <legend>
              Edition
            </legend>
            <table>
              <thead>
                <td v-for="(field, k) in fields" :key="k">
                  <label :for="k">
                    {{ field }}
                  </label>
                </td>
              </thead>
              <tbody>
                <td v-for="(field, k) in fields" :key="k">
                  <input v-model="fieldsData[k]" :id="k" :name="k"/>
                </td>
              </tbody>
            </table>
            <input type="submit" value="Modifier" />
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * @module component - editEmployee
   * @param {object} employee - Employee data
   * @emits editEmployee#close
   */
  export default {
    name: 'edit-employee',
    props: {
      employee: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      const { id, name, age, sport } = this.employee;
      this.fieldsData = {
        name,
        age,
        sport,
      };
      this.employeeToEdit = id;
    },
    data() {
      return {
        employeeToEdit: null,
        fieldsData: {
          name: null,
          age: null,
          sport: null,
        },
        fields: {
          name: 'Nom',
          age: 'Age',
          sport: 'Sport',
        },
      };
    },
    methods: {
      /**
       * @function formSubmitted
       */
      formSubmitted(e) {
        e.preventDefault();
        this.$emit('input', this.fieldsData, this.employeeToEdit);
      },
      /**
       * Close the modal
       * @function closeEdit
       */
      closeEdit() {
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .edit-employee{
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    background-color: rgba(black, 0.8);

    &-head{
      display: flex;
      justify-content: flex-end;
    }

    &-content{
      background: white;
      max-width: 50%;
      margin: auto;

      padding: 32px;
    }
  }
</style>

