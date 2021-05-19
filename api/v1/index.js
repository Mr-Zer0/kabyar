export default (req, res, next) => {
  console.log(req.url)

  res.setHeader('Hello', 'How are you doing')

  next()
}
