import red from '@material-ui/core/colors/red'
import pink from '@material-ui/core/colors/pink'
import green from '@material-ui/core/colors/green'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'


const themes = [
  {
    id: 'default',
    source: {
       palette: {
        primary: { main: '#154600' },
        secondary: {
          main: '#c62828',
        },
        success: blue,
      },
    },
  },
  {
    id: 'red',
    color: red[500],
    source: {
      palette: {
        primary: red,
        secondary: pink,
        error: red,
        success: yellow,
      },
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: red,
        error: red,
        success:pink,
      },
    },
  },
  {
    id: 'standard',
  },
]

export default themes
