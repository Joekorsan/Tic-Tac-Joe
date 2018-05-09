const leaderboard = require('../controllers/leaderboard')

module.exports = (app) => {

  app.get('/api', leaderboard.getLeaderboard);

  app.post('/api', leaderboard.addToLeaderboard);

  

}
