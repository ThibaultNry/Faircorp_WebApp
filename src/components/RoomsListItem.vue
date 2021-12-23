<template>
  <div
    class="window border border-secondary rounded p-2 mb-2"
    :class="{ expanded: isExpanded }"
  >
    <div class="top-row d-flex" @click="toggleExpand">
      <div class="window-name fw-bold pe-3">{{ room.name }}</div>
      <div class="room-name text-muted">{{ room.roomName }}</div>

      <div class="expand-button ms-auto">
        {{ isExpanded ? "&#9660;" : "&#9658;" }}
      </div>
    </div>
    <template v-if="isExpanded">
      <hr />
      <div>Current temperature : {{ room.currentTemperature }}</div>
      <div>Building id: {{ room.buildingId }}</div>
      <div class="details d-flex"></div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../config";

export default {
  name: "RoomsListItem",
  props: ["room"],
  data: function () {
    return {
      isExpanded: false,
    };
  },
  computed: {
    isRoomOpen: function () {
      return this.room.roomStatus === "OPEN";
    },
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    async switchWindow() {
      let response = await axios.put(
        `${API_HOST}/api/rooms/${this.room.id}/switch`
      );
      let updatedRoom = response.data;
      this.$emit("room-updated", updatedRoom);
    },
  },
};
</script>

<style lang="scss" scoped>
.open-status {
  .icon {
    position: relative;
  }

  &.open {
    color: #198754;
    .icon {
      font-size: 12px;
      top: -3px;
    }
  }

  &.closed {
    color: #dc3545;
  }
}

.window {
  .top-row {
    cursor: pointer;
  }
}
</style>
