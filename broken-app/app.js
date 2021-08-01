const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

// Expected JSON request is of the form:
//    developers: [username, ...]}
// Returns an array of objects containing name and bio data
//    [ {name, bio}, ... ]
app.post('/', function(req, res, next) {
    Promise.all(req.body.developers.map(d => {
      return axios.get(`https://api.github.com/users/${d}`);
    }))
    .then ((results) => {
        let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
        return res.send(JSON.stringify(out));
    })
    .catch ((err) => {
      next(err);
    })
})

/** Error handler */
app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
      error: err.message
  });
});

app.listen(3000);


// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     console.log(results)
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch (err){
//     next(err);
//   }
// });