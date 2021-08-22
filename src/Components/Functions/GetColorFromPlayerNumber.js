export default function getColorFromPlayerNumber(player) {
    switch(player) {
        case 0:
          return 'blue'
        case 1:
          return 'red'
        case 2:
          return 'green'
        case 3: 
          return 'yellow'
        case 4: 
          return 'black'
        case 5: 
          return 'pink'
        case 6: 
          return 'orange'
        default:
          return 'white'
    } 
  }