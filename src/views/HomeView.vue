<script>
import {useRocketsStore} from '@/stores/rocketsStore';
import { onMounted,computed} from 'vue';
import RocketView from '../components/RocketView.vue';
import LoaderView from '../components/LoaderView.vue';

export default {
  components:{
    LoaderView,
    RocketView
  },
  
  setup() {
    const store = useRocketsStore();
    const isLoading = computed(() => store.isLoading);
    const isError = computed(() => store.isError);
    const isFetched = computed(() => store.isFetched);
    const rockets = computed(() => store.rockets);
   onMounted(async() => {
    if(rockets.value.length === 0 && isFetched.value === false) {
     await store.fetchRockets();
    }
   })

return {
  isLoading,
  isError,
  isFetched,
  rockets
}
  
  }
}
</script>

<template>
  <LoaderView v-if="isLoading"/>
  <h2 v-if="isError">An error has occured</h2>
  <h2 v-if="rockets.length ===0 && !isLoading"> No rockets</h2>
  <RocketView v-if="rockets.length > 0 && !isLoading" v-for="rocket in rockets" :key="rocket.id" :rocket="rocket"/>

</template>