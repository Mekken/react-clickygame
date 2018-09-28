const imgsPath = process.env.PUBLIC_URL + 'assets/imgs/';
console.log(imgsPath);

export default {
  gameTiles: [
    {
      imgUrl: `${imgsPath}batman.jpg`,
      clicked: false,
      id: 0,
    },
    {
      imgUrl: `${imgsPath}problems.jpg`,
      clicked: false,
      id: 1,
    },
    {
      imgUrl: `${imgsPath}simply.jpg`,
      clicked: false,
      id: 2,
    },
    {
      imgUrl: `${imgsPath}pigeon.jpg`,
      clicked: false,
      id: 3,
    },
    {
      imgUrl: `${imgsPath}business.jpg`,
      clicked: false,
      id: 4,
    }
  ]
}
