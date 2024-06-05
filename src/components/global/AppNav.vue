<template>
  <div class="nav-bar">
    <v-app-bar>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="openCart()"
      ></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  inject: ["Emitter"],
  data() {
    return {};
  },
  methods: {
    openCart() {
      this.Emitter.emit("openCart");
    },
  },
};
</script>
