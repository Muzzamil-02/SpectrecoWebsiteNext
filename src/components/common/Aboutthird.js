import { Grid, Typography } from '@mui/material';

const Aboutthird = ({highlightedText,description,heading}) => {
  return (
    <Grid container spacing={4} style={{ padding: '40px' }}>
    {/* Left Column */}
   
    <Grid item xs={12} md={6}>
      <Typography variant="h4" style={{ color: '#de0c0b' ,fontSize:"40px" }}>
        {highlightedText}
      </Typography>
    </Grid>

    {/* Right Column */}
    <Grid item xs={12} md={6}>
      <Typography variant="h4"  sx={{ fontSize:"28px" }}>
      {heading}
      </Typography>
      <Typography variant="body1" style={{ marginTop: '16px' }}>
        {description}
      </Typography>
    </Grid>
  </Grid>
  )
}

export default Aboutthird