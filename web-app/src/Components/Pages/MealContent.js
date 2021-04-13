import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { 
  Dialog as MyDialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Typography 
} from '@material-ui/core';
import Ingredients from '../Ingredients';
import { dialogStyles } from '../../assets/styles/sharedStyles';

function MealContent(props) {
  const classes = dialogStyles();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  
    
    
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.dialogBtn} size="small" onClick={handleClickOpen('paper')}>Learn More</Button>
      <MyDialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
      >
        <DialogTitle disableTypography={true} className={classes.dialogTitle}>
          <Typography variant="h4">How to make: {props.meal.strMeal}</Typography>
          </DialogTitle>
        <DialogContent 
            dividers={scroll === 'paper'}
            className={classes.dialog}>
          <DialogContentText
            className={classes.dialogInfoText}
          >{props.meal.strInstructions}
          </DialogContentText>
          <Ingredients meal={props.meal}/>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button>
            Add to favorites
          </Button>
        </DialogActions>
      </MyDialog>
    </div>
  );
}

export default MealContent;