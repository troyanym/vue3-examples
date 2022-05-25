export const exampleToDoList = `<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
    >
      <div class="title">
        {{ item.title }}
      </div>
      <div class="status">
        <slot
          :name="\`status(\${item.key})\`"
          :item="item"
          :status="item.status"
          :title="item.title"
        >{{ item.status }}</slot>
      </div>
    </li>
  </ul>
</template>

&lt;script&gt;
export default {
  name: 'to-do-list',
  props: {
    items: { type: Array, default: Array },
  },
};
&lt;/script&gt;`;
