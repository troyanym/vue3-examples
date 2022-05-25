<template>
  <div class="default-layout">
    <router-link to="/">Back to list of Examples</router-link>

    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'default-layout',
};
</script>

<style lang="scss" scoped>
.default-layout {
  padding: 8px 12px;
}
</style>
