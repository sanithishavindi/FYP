import React from 'react'
import MPaper from './MPaper';
import { Avatar, Stack, Typography, colors } from '@mui/material'; 
import icon from "../Assests/user-icon.png";
// import booking from "../Assests/cherry-blossoms-fuji-mountain-spring-sunrise-shizuoka-japan.jpg";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const Booking = () => {
  return (
    <MPaper title="Latest booking">
      <Stack spacing={3}>
        {/* user info */}
        <Stack direction="row" spacing={2}>
          <Avatar alt="user" src={icon} />
          <Stack justifyContent="space-between">
            <Typography variant="subtitle2">
              Sujeewa Krishnajith
            </Typography>
            <Typography variant="caption" color={colors.grey[500]}>
              02 Sep 2023 09:50
            </Typography>
          </Stack>
        </Stack>
        {/* user info */}

        {/* booking info */}
        <Stack direction="row" alignItems="center" spacing={5} sx={{ color: colors.grey[600] }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthOutlinedIcon fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              5 days 4 nights
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <PeopleAltOutlinedIcon fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              5 - 6 guests
            </Typography>
          </Stack>
        </Stack>
        {/* booking info */}

        {/* image */}
        
      </Stack>
    </MPaper>
  )
}

export default Booking