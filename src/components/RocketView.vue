<script>
import { useRocketsStore } from '@/stores/rocketsStore';



export default{
  props: {
    rocket: Object
  },
  setup(){

    const store = useRocketsStore();
   const switchReservation = async(id) => {
     await store.switchRocketReservation(id);
   } 
   
   return{
     switchReservation
   }
  },
}</script>

<template>
  <div class="rocket-card">
    <img class="rocket-img" referrerpolicy="no-referrer" :src="rocket.image" :alt="rocket.name" />
    <div class="rocket-informations">
      <h3 class="rocket-name">{{rocket.name}}</h3>
      <p class="rocket-description">
        <span v-if="rocket.reserved" class="reserve-badge inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">Reserved</span>
       {{ rocket.description }}
      </p>
  <button @click="switchReservation(rocket.id)" :class="rocket.reserved ? 'cancel-btn' : 'rsv-btn'">
    {{ rocket.reserved ? 'Cancel reservation' : 'Reserve Rocket' }}</button>
    </div>
  </div>
</template>

<style scoped>
.rocket-card {
  display: flex;
  width: 90%;
  margin: 2rem auto;
  gap: 1rem;
}
.rocket-img {
  width: 250px;
  height: 200px;
}
.rocket-name {
  margin: 0;
  font-size: 1.5rem;
}
.rocket-description {
  margin: 0;
  padding-top: 0.5rem;
  font-weight: 400;
  font-size: 1.2rem;
}
.reserve-badge {
  margin-right: 1rem;
}
.rsv-btn{
  background-color: #0095ff;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, .4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 6px 14px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}
.rsv-btn:hover,
.rsv-btn:focus {
  background-color: #07c;
}

.rsv-btn:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}
.cancel-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;

  background: #6E6D70;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #DFDEDF;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.cancel-btn:focus {
  box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}
</style>
<!-- <style scoped>
















</style> -->



