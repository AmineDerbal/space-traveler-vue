<script>
import { useMissionsStore } from '@/stores/missionsStore';
import { useRocketsStore } from '@/stores/rocketsStore';
import { computed, onMounted } from 'vue';

export default{

  setup(){
    const rockets = computed(()=> useRocketsStore().rockets.filter(rocket => rocket.reserved))
    const missions = computed(()=> useMissionsStore().missions.filter(mission => mission.reserved))

   
 
    return{
      rockets,
      missions
    }
  }
}
</script>
<template>
      <div className="profile-content">
        <div className="missions-list">
          <h2 class="text-2xl font-bold mb-4">My Missions</h2>
          <table class="table-fixed border-collapse border border-slate-400 w-full">
            <tbody>
<tr v-for="mission in missions" :key="mission.id" class="border-collapse border border-slate-400"> <td class="p-2 font-semibold">{{ mission.name }}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="rockets-list">
          <h2 class="text-2xl font-bold mb-4">My Rockets</h2>
          <table class="table-fixed border-collapse border border-slate-400 w-full">
            <tbody>
              <tr class="border-collapse border border-slate-400" v-for="rocket in rockets" :key="rocket.id"> <td class="p-2 font-semibold">{{ rocket.name }}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
</template>

<style scoped>
.rockets-list, .missions-list {
  width: 50%;
}

.profile-content {
  gap: 8%;
  display: flex;
  width: 90%;
  margin: 0 auto;
  align-content: space-between;
}

</style>