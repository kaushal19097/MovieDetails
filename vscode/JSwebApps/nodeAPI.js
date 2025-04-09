let axios = require('axios');
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response=>{
    console.log(response.data[0].title);
  })
  .catch(error=>{
    console.error(error);
  });
  
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: "Automated Test Post",
  body: "Testing API endpoints via Node.js script.",
  userId: 123
})
  .then(response=>{
    console.log(response.data);
  })
  .catch(error=>{
    console.error(error);
  });
