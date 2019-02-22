<template>
  <div class="container">
    <cc-form></cc-form>
    <hr v-show="list > 0"/>
    <cc-list></cc-list>
  </div>
</template>

<style scoped>
  .container {
    padding: 20px
  }
</style>

<script>
import CcForm from '../components/expenses/form.vue'
import CcList from '../components/expenses/list.vue'
import { getExpenses } from '../persistence'

export default {
  name: 'PageIndex',
  components: { CcForm, CcList },
  computed: {
    list () {
      return this.$store.state.example.Expenses.list
    }
  },

  mounted () {
    this.$store.commit('example/SET_EXPENSES', getExpenses())
  }
}
</script>
