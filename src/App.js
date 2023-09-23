import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, AppBar, Toolbar, IconButton, CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function App() {
  const [fps, setFps] = useState(0);
  const [browserInfo, setBrowserInfo] = useState('');
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:600px)');



  useEffect(() => {
    console.log('useEffect is running');
    window.RufflePlayer = window.RufflePlayer || {};
    window.RufflePlayer.config = {
      "autoplay": "on",
      "letterbox": "fullscreen",
      "contextMenu": "on",
      "unmuteOverlay": "hidden",
    }
    const ruffle = window.RufflePlayer.newest();
    const ruffleObject1 = ruffle.createPlayer();
    const ruffleObject2 = ruffle.createPlayer();

    const container1 = document.getElementById("ruffle-container1");
    const container2 = document.getElementById("ruffle-container2");
    container1.appendChild(ruffleObject1);
    container2.appendChild(ruffleObject2);
    ruffleObject1.load("SWF/c0.swf");
    ruffleObject2.load("SWF/c1.swf");
    ruffleObject1.play();
    ruffleObject2.play();


    // Get browser version
    setBrowserInfo(navigator.userAgent);

    // Function to get FPS
    let frameCount = 0;
    let lastTime;

    const animationFrame = window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) { return window.setTimeout(callback, 1000 / 60); };

    function updateFPS() {
      const now = performance.now();
      if (lastTime === undefined) lastTime = now;

      const elapsed = now - lastTime;
      frameCount++;

      if (elapsed >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      animationFrame(updateFPS);
    }

    updateFPS();
    const canvasElement = document.querySelector("#ruffle-container1 > ruffle-player").shadowRoot.querySelector("#container > canvas");
    if (canvasElement) {
      // canvasElement.style.touchAction = 'auto';
    }
  }, [isMobile]);

  return (
    <Box flexGrow={1} height="100%">
      <CssBaseline />
      <Container>
        <AppBar position="fixed" style={{ top: 0 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: isMobile ? '1.3rem' : '2rem' }}>
              Carbon Tracing Simulator
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="info">
              <InfoIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>

      <Box sx={{ height: isMobile ? "100%" : "auto", flexGrow: 1, flexDirection: 'column', display: "flex", backgroundColor: "rgba(138, 179, 184, 0.514)", mt: isMobile ? "54px" : "64px" }}>
        {!isMobile ? (
          <Container sx={{ marginTop: "auto", marginBottom: "auto", width:"90%" }}>


            <Box id="ruffle-container1" sx={{ mb: 4, aspectRatio: '4/3', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: "hidden", margin: 0, marginTop: "5%", }}>
              {/*  first SWF content will load here */}
            </Box>
            <Box id="ruffle-container2" sx={{ mb: 4, aspectRatio: '4/3', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: "7%", marginBottom:"5%" }}>
              {/*  second SWF content will load here */}
            </Box>


          </Container>
        ) : (
          <Box style={{ marginTop: "auto", marginBottom: "auto", width: "95%", marginLeft: "auto", marginRight: "auto" }} >
            <Carousel showThumbs={false}>

              <Box id="ruffle-container1" sx={{ mb: 4, aspectRatio: '4/3', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                {/*  first SWF content will load here */}
              </Box>
              <Box id="ruffle-container2" sx={{ mb: 4, aspectRatio: '4/3', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                {/*  second SWF content will load here */}
              </Box>

            </Carousel>
          </Box>
        )}
        <Box component="footer" sx={{ backgroundColor: 'grey.800', color: 'white', py: 3, }}>
          <Container>
            <Typography variant="body2" align="center">
              FPS: {fps}
            </Typography>
            <Typography variant="body2" align="center">
              Browser Info: {browserInfo}
            </Typography>
          </Container>
        </Box>
      </Box>


    </Box>
  );
}

export default App;