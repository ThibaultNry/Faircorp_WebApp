<template>
  <div class="rooms">
    <h1>Rooms API</h1>
    <section class="main-content w-50 mx-auto"><RoomsList></RoomsList></section>
  </div>
</template>

<script>
import RoomsList from "@/components/RoomsList.vue";

export default {
  name: "App",
  components: {
    RoomsList,
  },
};
</script>

<style lang="scss" scoped></style>
