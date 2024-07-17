import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
// import Avatar from '@mui/material/Avatar';

function DengueFever  ()  {

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex,1);
    }

    setChecked(newChecked);
  };



  return (
    <div>
        <div className='Dengue'>
        <h1>Dengue Fever</h1>
        </div><br></br>
       
       <div className='mx-80'>

       <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[0,1,2,3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              {/* <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar> */}
              <ListItemText id={labelId} primary={` ${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>

       </div>
      
    </div>
  )
}

export default DengueFever
