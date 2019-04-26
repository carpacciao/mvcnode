require('colors')
const Fs = require('fs')

//utils
console.error = (m) => console.log(m.red)
console.succes = (m) => console.log(m.green)
//

let [,, ...args] = process.argv

switch (args[0]) {
  case 'new':
    newCategory();
    break;

  default:
    console.error('Command: ' + args[0] + ' not found.')
    break;
}

// command reader

function newCategory () {
  switch (args[1]) {
    case 'route':
        createRoute()
      break;

    case undefined:
      console.error('You must precise a second argument.')
      break;
    default:
      console.error(args[1] + ' is not a command.')
      break;
  }
}




// Functions spécifiques

function createRoute () {
  if (args[2] && args[2] !== 'index'){
    Fs.exists('./routes/' + args[2] + '.js', (exists) => {
      if(!exists){
        Fs.writeFile('./routes/'+ args[2] +'.js', 'hello' , (err) => console.log(err))
      }
    })
  }
}

