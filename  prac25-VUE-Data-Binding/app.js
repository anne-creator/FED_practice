const app = Vue.createApp({
  data() {
    return {
      yourName: "Anne",
      age: 27,
      favNum: 0,
      imgSrc:
        "https://assets.website-files.com/60364dd83404bba3b385f601/606e313a0bcefb7f557ec43a_Aquarium_OceanScene.jpg",
    };
  },
  methods: {
    randomNum() {
      const randNum = Math.random();
      this.favNum = randNum;
      return this.favNum;
    },
  },
});
app.mount("#assignment");
