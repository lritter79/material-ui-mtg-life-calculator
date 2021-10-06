export default function getColorFromPlayerNumber(id:number) {
    switch(id % 8) {
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
        case 7:
          return 'grey'
        default:
          return ''
    } 
  }