<template>
  <form id="form" @submit.prevent="submit">
    <q-input ref="amount" class="my-input" type="number" v-model="expense.amount" placeholder="R$" />
    <q-input class="my-input" type="text" v-model="expense.description" placeholder="Descrição" />
    <q-input class="my-input" type="text" v-model="expense.date" placeholder="Data" />
    <q-btn type="submit" class="primary mu-button">Salvar</q-btn>
  </form>
</template>

<script>
import moment from 'moment'
import { addExpense } from '../../persistence'
import { uid } from 'quasar'

export default {
  // name: 'ComponentName',
  data () {
    return {
      expense: {
        amount: '',
        description: '',
        date: moment().format('DD/MM/YYYY'),
        done: false
      }
    }
  },

  methods: {
    submit (e) {
      const cloned = JSON.parse(JSON.stringify(this.expense))
      cloned.id = uid()
      this.$store.commit('example/ADD_EXPENSE', cloned)
      addExpense(cloned)
      this.reset()
    },

    reset () {
      this.expense.amount = ''
      this.expense.description = ''
      this.expense.date = moment().format('DD/MM/YYYY')
      this.$refs.amount.focus()
    }
  }
}
</script>

<style>
  .my-input {
    width: 100%;
    margin-bottom: 20px;
  }

  .my-button {
    widows: 100%;
  }
</style>
