<script>
import { useMissionsStore } from '@/stores/missionsStore';

export default {
  props: {
    name: String,
    description: String,
    id: String,
    reserved: Boolean
  },
  setup(){
    const store = useMissionsStore();
    const switchReservation = async(id) => {
      await store.switchMissionReservation(id);
    } 
    return{
      switchReservation
    }
  }
}
</script>

<template>
  <tr>
    <th class="heading border border-slate-300" scope="row">{{ name }}</th>
    <td class="heading border border-slate-300">{{ description }}</td>
    <td class="heading border border-slate-300"><span v-if="reserved" class="reserve-badge inline-flex items-center rounded-md bg-green-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-green-600/20">Active Member</span>
    <span v-else class="reserve-badge inline-flex items-center rounded-md bg-red-700 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-red-600/20">Not A Member</span></td>
    <td class="heading border border-slate-300"><button @click="switchReservation(id)" :class="reserved ? 'cancel-btn text-xs' : 'rsv-btn text-xs'">{{ reserved ? 'Cancel reservation ' : 'Reserve Mission' }}</button></td>
  </tr>
</template>

<style scoped>
.heading {
  padding: 0 10px;
  font-size: 1.3rem;
  border: 1px solid #ddd;

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