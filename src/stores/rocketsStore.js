import { defineStore } from 'pinia';

export const useRocketsStore = defineStore({
  id: 'rockets',
  state: () => ({
    rockets: [],
    isLoading: false,
    isError: false,
    isFetched: false,
  }),
  actions: {
    async fetchRockets() {
      this.isLoading = true;
      this.isError = false;
      try {
        const response = await fetch('https://api.spacexdata.com/v4/rockets');
        const data = await response.json();
        const fetchedRockets = [];
        data.forEach((rocket) => {
          fetchedRockets.push({
            id: rocket.id,
            name: rocket.name,
            description: rocket.description,
            image: rocket.flickr_images[0],
            reserved: false,
          });
        });
        this.rockets = fetchedRockets;
      } catch (error) {
        this.isError = true;
      } finally {
        this.isLoading = false;
        this.isFetched = true;
      }
    },
    async switchRocketReservation(id) {
      this.rockets = this.rockets.map((rocket) => {
        if (rocket.id === id) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
    },
  },
});
