import { Typography, Box } from '@mui/material';
import "./Maincss.css"
const AboutLeadership = ({title,description}) => {
  return (
    <Box
    sx={{
      padding: '50px',
      textAlign: 'center',
      maxWidth: '900px',
      margin: '0 auto',
    }}
  >
    <Typography variant="h4" className='.heading-with-border' fontWeight="bold" gutterBottom>
      {title}
    </Typography>
    <div className='with-border'></div>
    <Typography variant="body1" className='.heading-with-border' color="textSecondary">
      {description}
    </Typography>
  </Box>
  )
}

export default AboutLeadership