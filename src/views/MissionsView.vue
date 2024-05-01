<script>
import { useMissionsStore } from '@/stores/missionsStore';
import { onMounted,computed } from 'vue';
import MissionView from '../components/MissionView.vue';
import LoaderView from '@/components/LoaderView.vue';

export default {
  components:{
    LoaderView,
    MissionView
  },
  
  setup() {
    const store = useMissionsStore();
    const isLoading = computed(()=> store.isLoading)
    const missions = computed(()=> store.missions)

    onMounted(async() => {
      if(missions.value.length === 0) {
        await store.fetchMissions();
      }
    })

    return {
      isLoading,
      missions
  }
}}

</script>
<template>
  <LoaderView v-if="isLoading"/>
  <table v-else class="table-fixed border-collapse border border-slate-400">
    <thead>
      <th className="heading " scope="col">Missions</th>
            <th className="heading border border-slate-300" scope="col">Description</th>
            <th className="heading border border-slate-300" scope="col">Status</th>
            <th className="heading border border-slate-300" scope="col">{{ '' }}</th>
    </thead>
    <tbody>
      <MissionView v-for="mission in missions" :key="mission.id" :name="mission.name" :description="mission.description" :id="mission.id" :reserved="mission.reserved"/>
    </tbody>
  </table>  
</template>

<style scoped>
.heading {
  font-size: 1.3rem;
  border: 1px solid #ddd;
}

.btns {
  border: 1px solid #ddd;
  vertical-align: middle;
}
</style>