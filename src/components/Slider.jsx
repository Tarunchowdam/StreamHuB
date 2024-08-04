import React from 'react';
import { Card, Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import mani from "./images/tarun.png";

function SingleCard() {
  const data = {
    name: `Tarun kumar`,
    img: mani,
    about: `I am a passionate upcoming software engineer. And I am very enthusiast about Developing websites and I love developing virtual stuff using Mern stack.`,
    linkedInUrl: `https://www.linkedin.com/in/tarunkumarchowdam`,
    githubUrl: `https://github.com/Tarunchowdam`,
    instagramUrl: `https://www.instagram.com/tarunchowdam184?igsh=M245OW95djFsOXhm`,
    twitterUrl: `https://x.com/Tarunchowdam1`,
    whatsappUrl: `https://wa.me/9885546398`,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px'  }}>
      <Card sx={{ maxWidth: 350, textAlign: 'center', backgroundColor: '#FFF1E6', mt: 4 }}>
        <Box sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            component="img"
            sx={{
              border: '1px solid white',
              borderRadius: '50%',
              boxShadow: "0px 2px 4px black",
              height: '210px',
              width: '180px'
            }}
            image={data.img}
            alt={data.name}
          />
        </Box>
        <CardContent sx={{ paddingBottom: '8px' }}>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>{data.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {data.about}
          </Typography>
        </CardContent>
        <div className="container-fluid">
          <hr style={{ margin: '8px 0' }} />
          <Typography sx={{ fontSize: { xs: '15px', md: '15px' }, color: 'grey' }}>Connect with me: </Typography>
          <CardActions disableSpacing sx={{ justifyContent: 'center', padding: '8px 0' }}>
            <IconButton aria-label="github" onClick={() => window.open(data.githubUrl, '_blank')}>
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="instagram" onClick={() => window.open(data.instagramUrl, '_blank')}>
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="whatsapp" onClick={() => window.open(data.whatsappUrl, '_blank')}>
              <WhatsAppIcon />
            </IconButton>
            <IconButton aria-label="twitter" onClick={() => window.open(data.twitterUrl, '_blank')}>
              <TwitterIcon />
            </IconButton>
            <IconButton aria-label="linkedin" onClick={() => window.open(data.linkedInUrl, '_blank')}>
              <LinkedInIcon />
            </IconButton>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default SingleCard;
