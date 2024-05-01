import { defineStore } from 'pinia';

export const useMissionsStore = defineStore({
  id: 'missions',
  state: () => ({
    missions: [],
    isLoading: false,
  }),
  actions: {
    async fetchMissions() {
      this.isLoading = true;
      try {
        const response = await fetch('https://api.spacexdata.com/v3/missions');
        const data = await response.json();
        const fetchedMissions = data.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          reserved: false,
        }));
        this.missions = fetchedMissions;
      } catch (err) {
        console.error(err);
      } finally {
        this.isLoading = false;
      }
    },
    async switchMissionReservation(id) {
      this.missions = this.missions.map((mission) => {
        if (mission.id === id) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
    },
  },
});
