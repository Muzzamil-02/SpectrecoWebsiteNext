import { Grid, Typography, Divider } from '@mui/material';
import { Container } from 'react-bootstrap';
const AboutNumber = ({component}) => {
    console.log("compon?ent",component)
  return (

    <Grid container spacing={4} style={{ padding: '50px' }}>
    {component?.map((item, index) => (
      <Grid item xs={6} md={3} key={index} style={{ textAlign: 'center' }}>
        <Typography variant="h5" style={{ color: '#d30c0b', fontWeight: 'bold' }}>
          {item.value}
        </Typography>
        <hr/>
        <Divider style={{ width: '50%', margin: '10px auto' }} />
        <Typography variant="body2">{item.label}</Typography>
      </Grid>
    ))}
  </Grid>

  )
}

export default AboutNumber