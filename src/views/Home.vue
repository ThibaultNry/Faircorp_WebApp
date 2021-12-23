<template>
  <div class="home">
    <img
      class="resize"
      alt="Logo Faircorp"
      src="../assets/logo_faircorp.jpeg"
    />
    <WelcomePageContent />
  </div>
</template>

<script>
import WelcomePageContent from "@/components/WelcomePageContent.vue";

export default {
  name: "Home",
  components: {
    WelcomePageContent,
  },
};
</script>

<style>
.resize {
  max-width: 40%;
  max-height: 40%;
  margin-bottom: 30px;
}
</style>
