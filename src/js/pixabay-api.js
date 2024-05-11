const BASE_URL = 'https://pixabay.com';
const PATH = '/api';
const PARAMS = {
  key: '43828991-79d1a60f3e87126db3a63842a',
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

const searchParams = new URLSearchParams({
  key: '43828991-79d1a60f3e87126db3a63842a',
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

// const BASE_QUERY =
//   BASE_URL +
//   PATH +
//   `?key=${PARAMS.key}&image_type=${PARAMS.imageType}&orientation=${PARAMS.orientation}&safesearch=${PARAMS.safesearch}`;

export const fetchImages = query => {
  const url = `${searchParams}&q=${query}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  // .then(data => {
  //   console.log(data);
  //   return data;
  // })
  // .catch(error => {
  //   console.log(error.message);
  // });

  console.log(url);
};

// fetch('<https://jsonplaceholder.typicode.com/users>')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//     console.log(data);
//   })
//   .catch(error => {
//     // Error handling
//     console.log(error);
//   });

// 43828991-79d1a60f3e87126db3a63842a key

// https://www.edu.goit.global/uk/learn/12011063/18936918/20829841/training?blockId=20829862&page=2&size=10&query=cats

// https://pixabay.com/api?key=43828991-79d1a60f3e87126db3a63842a&q=cats&image_type=photo

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: "name",
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"
// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "<https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name>"
