import React, { useState, useEffect, useRef } from 'react';
import Button from '@material-ui/core/Button';
import { 
  Dialog as MyDialog, DialogActions, DialogContent, 
  DialogContentText, DialogTitle, Typography 
} from '@material-ui/core';
import { dialogStyles } from '../assets/styles/sharedStyles';

function Dialog(props) {
  const classes = dialogStyles();

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');

  function Ingredients() {
    let ingredients = []
    let measures = []
    
    // Convert json to array and slice array for ingredients and measures, 
    // then loop over them to remove null values
    Object.keys(props.meal).map((key) => props.meal[key]).slice(9, 29).forEach((item, index) => {
      if(item) {
        ingredients.push(item)
        measures.push(Object.keys(props.meal).map((key) => props.meal[key]).slice(29, 49)[index])
      }
    })
    
    // Add table for displaying ingredients
    return (
      <DialogContentText
            ref={descriptionElementRef}
            className={classes.dialogInfoText}
      >
        <Typography variant="h5" className={classes.dialogIngredients}>Ingredients</Typography>
        {ingredients.map((item, index) => {
          return (
            <Typography><b>Ingredient: </b>{item} <b>| Measure:</b> {measures[index]} </Typography>
          )
        })}
        
      </DialogContentText>
    )
  }
  
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button className={classes.dialogBtn} size="small" onClick={handleClickOpen('paper')}>Learn More</Button>
      <MyDialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
      >
        <DialogTitle className={classes.dialogTitle}>
          <Typography variant="h4">How to make: {props.meal.strMeal}</Typography>
          </DialogTitle>
        <DialogContent 
            dividers={scroll === 'paper'}
            className={classes.dialog}>
          <DialogContentText
            ref={descriptionElementRef}
            className={classes.dialogInfoText}
          >{props.meal.strInstructions}
          </DialogContentText>
          <Ingredients/>
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

export default Dialog;