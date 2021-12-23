<template>
  <div class="windows">
    <h1>Windows API</h1>
    <section class="main-content w-50 mx-auto">
      <windows-list></windows-list>
    </section>
  </div>
</template>

<script>
import WindowsList from "@/components/WindowsList.vue";

export default {
  name: "App",
  components: {
    WindowsList,
  },
};
</script>

<style lang="scss" scoped></style>
