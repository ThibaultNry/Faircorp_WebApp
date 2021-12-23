<template>
  <div class="windows-list pt-3">
    <RoomsListItem
      v-for="room in rooms"
      :room="room"
      :key="room.id"
      @room-updated="updateRoom"
    >
    </RoomsListItem>
  </div>
</template>

<script>
import axios from "axios";
import { API_HOST } from "../config";
import RoomsListItem from "./RoomsListItem";

export default {
  components: {
    RoomsListItem,
  },
  name: "RoomsList",
  data: function () {
    return {
      rooms: [],
    };
  },
  created: async function () {
    let response = await axios.get(`${API_HOST}/api/rooms`);
    let rooms = response.data;
    this.rooms = rooms;
  },
  methods: {
    updateRoom(newRoom) {
      let index = this.rooms.findIndex((room) => room.id === newRoom.id);
      this.rooms.splice(index, 1, newRoom);
    },
  },
};
</script>
