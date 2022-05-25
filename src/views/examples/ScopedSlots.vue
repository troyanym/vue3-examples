<template>
  <div class="scoped-slots">
    <h1>Scoped slots</h1>

    <to-do-list
      :items="items"
    >
      <template
        v-slot:status(init)="{ status }"
      >
        <a href="#">{{ status }}</a>
      </template>
    </to-do-list>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";

export default {
  name: 'scoped-slots',
  components: {
    ToDoList,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          key: 'init',
          title: 'Init project',
          status: 'In progress',
        },
        {
          id: 2,
          key: 'task',
          title: 'Start work on first task',
          status: 'To do',
        },
        {
          id: 3,
          key: 'change',
          title: 'Commit changes',
          status: 'To do',
        },
        {
          id: 4,
          key: 'dev',
          title: 'Push changes to dev',
          status: 'To do',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
