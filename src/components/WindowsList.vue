<template>
  <div class="windows-list pt-3">
    <windows-list-item
      v-for="window in windows"
      :window="window"
      :key="window.id"
      @window-updated="updateWindow"
    >
    </windows-list-item>
  </div>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../config";
import WindowsListItem from "./WindowsListItem";

export default {
  components: {
    WindowsListItem,
  },
  name: "WindowsList",
  data: function () {
    return {
      windows: [],
    };
  },
  created: async function () {
    let response = await axios.get(`${API_HOST}/api/windows`);
    let windows = response.data;
    this.windows = windows;
  },
  methods: {
    updateWindow(newWindow) {
      let index = this.windows.findIndex(
        (window) => window.id === newWindow.id
      );
      this.windows.splice(index, 1, newWindow);
    },
  },
};
</script>
