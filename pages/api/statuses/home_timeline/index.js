const timeline = [
  {
    id: "0",
    avatar:
      "https://pbs.twimg.com/profile_images/1274822387532328960/feySZs0k_reasonably_small.jpg",
    username: "wongmjane",
    name: "Wong vengador",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
        
        (gzipped size went from 16.6 KB down to 2.7 KB!!)
        
        * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "1",
    avatar:
      "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
    username: "midudev",
    message: `Wow, devhub está funcionando y vivo 🐹`,
    name: "Miguel Angel Duran",
  },
  {
    id: "2",
    avatar:
      "https://pbs.twimg.com/profile_images/1302308980820250624/PvS_Uswe_bigger.jpg",
    name: "Daniel de la Cruz",
    username: "cuy0dev",
    message: `El cuy es sabio 🐹
        
        Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos puede hacerte mas daño que beneficio.`,
  },
  {
    id: "3",
    avatar:
      "https://pbs.twimg.com/profile_images/1274822387532328960/feySZs0k_reasonably_small.jpg",
    username: "wongmjane",
    name: "Wong vengador",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
        
        (gzipped size went from 16.6 KB down to 2.7 KB!!)
        
        * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "4",
    avatar:
      "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
    username: "midudev",
    message: `Wow, devhub está funcionando y vivo 🐹`,
    name: "Miguel Angel Duran",
  },
  {
    id: "5",
    avatar:
      "https://pbs.twimg.com/profile_images/1302308980820250624/PvS_Uswe_bigger.jpg",
    name: "Daniel de la Cruz",
    username: "cuy0dev",
    message: `El cuy es sabio 🐹
        
        Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos puede hacerte mas daño que beneficio.`,
  },
  {
    id: "6",
    avatar:
      "https://pbs.twimg.com/profile_images/1274822387532328960/feySZs0k_reasonably_small.jpg",
    username: "wongmjane",
    name: "Wong vengador",
    message: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
        
        (gzipped size went from 16.6 KB down to 2.7 KB!!)
        
        * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: "7",
    avatar:
      "https://pbs.twimg.com/profile_images/1083714591752941568/Q7LnIANs_reasonably_small.jpg",
    username: "midudev",
    message: `Wow, devhub está funcionando y vivo 🐹`,
    name: "Miguel Angel Duran",
  },
  {
    id: "8",
    avatar:
      "https://pbs.twimg.com/profile_images/1302308980820250624/PvS_Uswe_bigger.jpg",
    name: "Daniel de la Cruz",
    username: "cuy0dev",
    message: `El cuy es sabio 🐹
        
        Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos puede hacerte mas daño que beneficio.`,
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(timeline));
};
