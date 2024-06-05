<template>
  <div class="drawer">
    <v-navigation-drawer v-model="drawer" location="left">
      <v-list :items="items"></v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "CartDrawer",
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
      items: ["Home", "About", "Contact"],
    };
  },
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>
