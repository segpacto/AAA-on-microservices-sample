module.exports = (req, res, next) => {
  const { headers: { authorization } } = req
  
  //TODO: Implement JWT validation

  next()
}
