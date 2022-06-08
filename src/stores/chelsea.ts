import { defineStore } from "pinia"

export const useChelseaStore = defineStore("chelsea", {
  state: () => ({
    playerList: [] as { last_name: string; first_name: string; id: string }[],
    badgeURL: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png"
  }),
  actions: {
    getData() {
      fetch("https://random-data-api.com/api/users/random_user?size=10")
        .then((respsonse) => respsonse.json())
        .then((data) => (this.playerList = data))
    }
  },
  getters: {
    fullName: (state) => state.playerList.map((x) => x["first_name"] + " " + x["last_name"])
  }
})
