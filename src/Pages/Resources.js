import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';


function Resources() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    
    <div>
         
        <div className='Resources'>
        <h1 className='text-3xl' >Resources</h1>
        </div>
        {/* <div className='my-10'>
        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-left w-72 mx-80  ">
        1.	Defibrillator<br></br>
2.	Suction Machine<br></br>
3.	Emergency Stretchers<br></br>
4.	Stethoscope<br></br>
5.	Cervical Collar<br></br>
6.	intubation cannula<br></br>
7.	Ventilators<br></br>
8.	ECG Machine<br></br>
9.	Surgical Masks, Surgical Gloves<br></br>
10.	Patient Monitors<br></br>
11.	syringe pump<br></br>
12.	Cardiac monitor 
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-left w-72 mx-80  ">
        Suction Machine</div>
        

        </div> */}<br></br>

        <div className='mx-80'>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {['Defibrillator','Suction Machine','Emergency Stretchers','Stethoscope','Cervical Collar','Cervical Collar','intubation cannula','Ventilator','ECG Machine','Surgical Masks, Surgical Gloves'].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value} `} />
            </ListItemButton>
          </ListItem>
          
        );
      })}
    </List>
        </div>
        
    </div>
  )
}

export default Resources;