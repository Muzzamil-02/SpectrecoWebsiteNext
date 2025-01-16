import { Grid, Typography } from '@mui/material';

const Aboutthird = ({highlightedText,description,heading}) => {
  return (
    <Grid container spacing={4} style={{ padding: '40px' }}>
    <Grid item xs={12} md={6}>
      <Typography variant="h6" style={{ color: '#de0c0b' }}>
        {highlightedText}
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h5" >
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