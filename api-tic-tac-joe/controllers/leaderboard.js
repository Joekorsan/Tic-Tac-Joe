let knex = require('../db/knex')


module.exports = {
  getLeaderboard: (req, res) => {
    knex('leaderboard')
    .orderBy('streak', 'desc')
    .then(response => {
      res.json(response);
    })
  },//end of getLeaderboard()

  addToLeaderboard: (req, res) => {
    knex('leaderboard')
    .insert({
      userName: req.body.userName,
      streak: req.body.streak
    }, '*')
    .then(response => {
      res.json(response)
    })
  }//end of addToLeaderboard()
}
