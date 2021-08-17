import { AppBar, Toolbar, Menu, MenuItem, Button, Typography } from '@material-ui/core';
//import { Menu as MenuIcon } from '@material-ui/icons';
import { useState, useEffect, useContext } from 'react';
import { CategoryContext } from '../App';
import { makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
    toolbarStyle:{
        display: 'flex',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        borderColor: 'white',
        color:'white'
    },
})

function TopMenu({categories, setSelectedCategory}) {
    const selectedCategory = useContext(CategoryContext)
    const [anchorEl, setAnchorEl] = useState(null);
    useEffect(() => console.log(selectedCategory?.name), [selectedCategory]);
    //const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleMenuItemClick = (category) => {
        setSelectedCategory(category)
        setAnchorEl(null);
    }

    const classes = useStyles()

    return (
        
        <AppBar position="static">
            <Toolbar className={classes.toolbarStyle}>
                <Typography variant="h6">
                    MTG Life Calculator
                </Typography>               
                <Button  onClick={toggleIsOpen} variant="outlined" className={classes.buttonStyle}>                   
                    {(selectedCategory === null) ?
                        'Select A Format'
                    :
                        selectedCategory.name
                    }
                </Button>
                <Menu  
                    open={Boolean(anchorEl)}  
                    getContentAnchorEl={null} 
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                >
                    {categories.map((category) => 
                        <MenuItem key={category.id} onClick={() => handleMenuItemClick(category)}>{category.name}</MenuItem>
                    )}
                </Menu>
                
            </Toolbar>
        </AppBar>
    );
  }
  
  export default TopMenu;
  