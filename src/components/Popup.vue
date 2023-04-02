<script setup>

import { RouterLink } from "vue-router";

const emits = defineEmits(['clear'])

const props = defineProps({
  score: Number,
  status: String,
  scoreToShow: Number,
  clearSlots: Function
})
</script>

<template>
  <div class="popup">
  <Teleport to="body">
      <!-- LOSE -->
      <div class="modal align-middle justify-center items-center" v-if="score < 20">
        <RouterLink :to="{name:'AccountManagement'}" active-class="active" class="bg-black bg-opacity-50 w-full h-full text-xl font-bold align-middle justify-center items-center">
                <div class="align-middle w-full flex justify-center h-full items-center ">
                  <h2 class="bg-yellow-400 bg-opacity-90 border-2 border-black border-opacity-90 rounded-2xl w-1/3 text-6xl m-auto py-16 text-center font-mono font-bold align-middle justify-center items-center">
                    YOU LOSE 🎌<br />
                    <div class="mt-6">
                      <span class="text-4xl text-red-500 bg-black rounded-2xl p-3">
                        RETURN
                      </span>
                    </div>
                  </h2>
                </div>
              </RouterLink>
      </div>

      <!-- WIN -->
      <div class="modal align-middle justify-center items-center" v-if="status == 'YOU WIN!'">
        <button @click="status = 'YOUR STATUS'"
          class="bg-black bg-opacity-50 w-full h-full text-xl font-bold align-middle justify-center items-center">
          <div class="align-middle justify-center">
            <h2
              class="bg-yellow-400 bg-opacity-90 border-2 border-black border-opacity-90 rounded-2xl w-1/3 text-6xl m-auto py-16 text-center font-mono font-bold align-middle justify-center items-center">
              🎰:YOU WIN🎉<br />
              <div class="mt-6">
                <span class="text-4xl text-green-500 bg-black rounded-2xl py-3 pr-3 pl-10">
                  +{{ scoreToShow }} 💵</span>
              </div>
            </h2>
          </div>
        </button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
body {
  background-color: black;
}

.root {
  position: relative;
}

.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #0000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal>div {
  background-color: rgb(250 204 21);
  padding: 50px;
  border-radius: 10px;
  width: 50%;
  height: 30%;
  border: solid black 2px;
}
</style>
