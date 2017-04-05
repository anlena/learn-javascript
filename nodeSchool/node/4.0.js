//使其模块化

require('./3.1')(process.argv[2], process.argv[3], function (error, list) {
  if (error) {
    return console.log(error)
  }

  list.forEach(function (entry) {
    console.log(entry)
  })
})