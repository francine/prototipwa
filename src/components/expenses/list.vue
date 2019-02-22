<template>
  <div>
    <div class="expense" v-for="expense in list" :key="expense.id" @click="toggle(expense)">
      <p :class="{ done: expense.done }">{{ expense.date }} - R$ {{ expense.amount }}</p>
      <p :class="{ done: expense.done }">{{ expense.description }}</p>
      <a href="#" @click.prevent="askRemove(expense)" class="removeLink">Remover</a>
    </div>
  </div>
</template>

<script>
import { setDone } from '../../persistence'

export default {
  computed: {
    list () {
      return this.$store.state.example.Expenses.list
    }
  },

  methods: {
    remove (expense) {
      this.$store.commit('example/REMOVE_EXPENSE', expense)
    },

    askRemove (expense) {
      this.$q.dialog({
        title: 'Confirmação',
        message: 'Tem certeza que deseja excluir esse registro?',
        ok: 'Sim',
        cancel: 'Não'
      }).then(() => {
        this.remove(expense)
        this.$q.notify({ message: 'Registro removido com sucesso!', type: 'positive' })
      })
    },

    toggle (expense) {
      expense.done = !expense.done
      setDone(expense)
    }
  }
}
</script>

<style>
  .done {
    text-decoration: line-through;
    color: #ccc;
  }
  .expense {
    border-bottom: #999 1px solid;
    padding-top: 10px;
    position: relative;
    cursor: pointer;
  }
  .removeLink {
    color: #c00000;
    position: absolute;
    bottom: 10px;
    right: 0;
    font-size: 0.8em;
  }
</style>
