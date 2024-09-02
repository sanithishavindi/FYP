import { Grid } from '@mui/material';
import PatientData from '../Components/common/PatientData';
import Animate from '../Components/common/Animate';
import Booking from '../Components/common/Booking';
import Totalincome from '../Components/common/Totalincome';
import BookedData from '../Components/common/BookedData';
import StatisticData from '../Components/common/StatisticData';


function Home(){

  

  return (
    <>
    <div className='mx-80 mt-32'>

    <Grid container spacing={3}>
<Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Animate delay={1}>
              <PatientData />
            </Animate>
          </Grid>
          <Grid item xs={12}>
            <Animate delay={1}>
              <Booking />
            </Animate>
          </Grid>
          </Grid>
          </Grid>

          <Grid item xs={12} lg={8}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <Totalincome />
            </Animate>
          </Grid>
          <Grid item xs={12} md={6}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <BookedData />
            </Animate>
          </Grid>
          <Grid item xs={12}>
            <Animate delay={2.5}>
              <StatisticData />
            </Animate>
          </Grid>
          </Grid>
          </Grid>
</Grid>
    </div>


</>
    
 
  );
}

export default Home;
