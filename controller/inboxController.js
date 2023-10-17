//middleware controller
function getInboxes(req, res, next) {
  res.render('inbox');
}

//exports
module.exports = { getInboxes };
