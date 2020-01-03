import React from "react";
import "./Card.css";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from '@material-ui/core/Popover';


// menu functionality 
const options = [
  'Edit',
  'Delete'
];

const ITEM_HEIGHT = 48 ;


const CardContaniner = styled.div`
  margin-bottom: 8px;
`;


const card = ({ text, id, index }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (

    // clicking away from the menu 
    window.addEventListener('mouseup', function(event) {
      var box = this.document.getElementById('card_menu')
      if(event.target !== box ) {
        handleClose()
      }
    })
    ,
    // card layout ! DnD --> card --> menu --> editing functionality 
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContaniner
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              <Typography gutterBottom>
                <div class="card_menu">
                  {text}
                  <button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-haspopup="true" aria-label="See more"  aria-controls = "simple-menu" onClick = {handleClick}>              
                   <Menu 
                      id="simple_menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >            
                      {options.map(option => (
                        <MenuItem key={option} selected={option === 'Edit'} onClick={handleClose}>
                          {option}
                        </MenuItem>
                      ))}
                    </Menu> 
                    <span class="MuiIconButton-label" >
                      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                      </svg>
                    </span>
                    <span class="MuiTouchRipple-root"></span>
                  </button>
                </div>
              </Typography>
            </CardContent>
          </Card>
        </CardContaniner>
      )}
    </Draggable>
  );
};

export default card;
