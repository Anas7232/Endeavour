import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container, Row,Col } from 'react-bootstrap';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import mentor from '../../Images/mentor.png';
import mentor2 from '../../Images/mentor2.png'
import detail from '../../Images/detail22.png';
import nameimg from '../../Images/nameimg.png'
import Footer from '../Footer';
import idea from '../../Images/idea.png'
import { Link } from 'react-router-dom';

const pages = ['ENDEAVOUR'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const JoinWorkShop = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" style={{ background: 'transparent', padding: '20px 60px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="lg"
              style={{ color: 'black' }}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                style={{ background: 'none', color: 'rgba(126, 126, 126, 1)', fontWeight: '700' }}
                sx={{ my: 2, color: 'rgba(126, 126, 126, 1)', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={mentor} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

                <Container style={{ padding: '30px', borderBottom: '1px solid rgba(141, 141, 141, 1)' }}>
                  <Row>
                    <Col md={12} style={{ display: 'flex', justifyContent:'space-between' }}>
                      <h1 style={{ paddingBottom: '20px',color: 'rgba(79, 79, 79, 1)', fontWeight: '700', float: 'left' }}> Workshop </h1>
                      <Link to="/" style={{ textDecoration: 'none', fontSize: '30px', fontWeight: 'bold',fontFamily: 'Roboto Mono, monospace' }}>Join</Link>
                    </Col>
                    <Col md={12}>
                      <h1 style={{ paddingBottom: '20px',color: 'rgba(79, 79, 79, 1)', fontWeight: '700', float: 'left' }}> The Complete Digital Marketing Workshop </h1>
                     
                    </Col>
                    <Col md={12}>
                    <h6 style={{ fontSize: '20px', paddingBottom: '10px', fontWeight: '400' }}> Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More! </h6>
                    </Col>
                    <Col md={12}>
                      <img src={detail} alt="Rectangle" style={{ paddingLeft: '30px', width: '100%' }} />     
                    </Col>
                  </Row>
                  <Row>
                      <Col md={12}>
                          <Row>
                              <Col md={12}>
                                  <h1 style={{ padding: '50px 0px', fontSize: '22px', color: '#000000', fontWeight:'300' }}> What you'll learn </h1>
                                 
                              </Col>
                              <Col md={12}>
                                    <ul>
                                      <li>Grow a Business Online From Scratch</li>
                                      <li>Get Hired as a Digital Marketing Expert</li>
                                      <li>Make Money as an Affiliate Marketer</li>
                                  </ul>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                        <h2 style={{ paddingTop: '40px',color: 'rgba(126, 126, 126, 1)' }}> About this Workshop </h2>
                    </Col>
                    <Col md={8}>
                      <p style={{ paddingTop: '30px', color: 'rgba(0, 0, 0, 1)',fontFamily: 'Roboto Mono, monospace', fontSize: '11px' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                      </p>
                    </Col>
                  </Row>
                </Container>
                <br />

                <Container>
                  <Row>
                    <Col md={12}>
                      <h1 style={{ fontSize: '25px', color: 'rgba(126, 126, 126, 1)' }}> Workshop Type </h1>
                    </Col>
                    <Col md={12}>
                      <h3 style={{ fontSize: '15px', color: '#2E2E2E', fontWeight: '300' }}> Training </h3>
                    </Col>
                  </Row>
                </Container>

                <Container>
                  <Row>
                    <Col md={12}>
                      <h1 style={{ paddingTop: '40px',color: 'black',fontSize: '25px', paddingBottom: '15px', fontWeight: '700' }}> About Mentor </h1> 
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} >
                      <img src={mentor2} style={{ height: '130px' }} alt=""/>
                    </Col>
                    <Col md={2} >
                      <h2 style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: '700' }}> Steve </h2>
                      <p style={{ color: 'rgba(0, 0, 0, 1)' }}> Strive for perfection </p>
                      <button type='button' style={{  padding: '5px 20px', backgroundColor: '#fff', color: 'rgba(0, 0, 0, 1)',marginTop: '3px', borderRadius: '4px', border: '1px solid rgba(165, 165, 165, 1)', fontSize: '12px' }}> Contact Me </button>
                    </Col>
                  </Row>
                  <Container style={{ padding: '60px 0px' }}>
                      <Row>
                        <Col md={8} style={{ border: '1px solid #757575', padding: '30px', borderRadius: '5px' }}>
                          <Row>
                            <Col md={6}>
                              <h4 style={{ fontWeight: '300' }}> From </h4>
                              <h4> Pakistan </h4>
                            </Col>
                            <Col md={6}>
                              <h4 style={{ fontWeight: '300' }}> Member Since </h4>
                              <h4> 2019 </h4>
                            </Col>
                          </Row><br/>
                          <Row>
                            <Col md={6}>
                              <h4 style={{ fontWeight: '300' }}> Avg. response time </h4>
                              <h4> 1 hour </h4>
                            </Col>
                            <Col md={6}>
                              <h4 style={{ fontWeight: '300' }}> Avg. response time </h4>
                              <h4> 1 hour </h4>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={10} style={{ background: 'gray', height:'1px', marginTop: '20px' }}></Col>
                          </Row>
                          <Row>
                            <Col md={10} style={{ paddingTop: '20px' }}>
                              <h6 style={{ fontSize: '20px', fontWeight: '400' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </h6>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>          
                </Container><br/><br/>

                <Footer />

    </>
  );
};
export default JoinWorkShop;
