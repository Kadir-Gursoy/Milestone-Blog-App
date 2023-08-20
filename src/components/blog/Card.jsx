import {Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Card() {
  return (
    <div>
        <Grid container>
            <Grid item>
             
       <Box

    

    sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 4,
            width: 350,
            height: 350,
            },
        }}
        >
        
        <Paper elevation={10} />
         
        </Box>
        </Grid>

        </Grid>

    
          </div>
  );
}