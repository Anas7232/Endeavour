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
import iconimg from '../../Images/iconimg.png';
import rectangle from '../../Images/rectangle.png';
import './style.css'
import nameimg from '../../Images/nameimg.png'
import Footer from '../Footer';

const pages = ['ENDEAVOUR'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
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
                <Avatar alt="Remy Sharp" src={iconimg} />
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
                    <Col md={12}>
                      <h1 style={{ paddingBottom: '20px',color: 'rgba(79, 79, 79, 1)', fontWeight: '700' }}> H-Corns Shop </h1>
                    </Col>
                    <Col md={12}>
                      <img src={rectangle} alt="Rectangle" style={{ paddingLeft: '30px', width: '100%' }} />     
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                        <h2 style={{ paddingTop: '40px',color: 'rgba(126, 126, 126, 1)' }}> About this Idea </h2>
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
                      <h1 style={{ fontSize: '25px', color: 'rgba(126, 126, 126, 1)' }}> Project Type </h1>
                    </Col>
                    <Col md={12}>
                      <h3 style={{ fontSize: '18px', color: 'rgba(46, 46, 46, 1)' }}> Food Corner </h3>
                    </Col>
                  </Row>
                  <br/><br />
                  <Row>
                    <Col md={12}>
                      <Row md={{ span:6, offset:3 }}>
                        <Col md={6}>
                          <h1 style={{ fontSize: '22px', color: 'rgba(126, 126, 126, 1)' }}> PDF Attachment </h1>
                          <button type='button' style={{ border: 'none', padding: '2px 20px', backgroundColor: 'rgba(52, 209, 49, 1)', color: '#fff',marginTop: '3px', borderRadius: '4px' }}> Download </button>
                        </Col>
                        <Col md={6}>
                          <h1 style={{ fontSize: '22px', color: 'rgba(126, 126, 126, 1)' }}> PDF Attachment </h1>
                          <button type='button' style={{ border: 'none', padding: '2px 20px', backgroundColor: 'rgba(52, 209, 49, 1)', color: '#fff',marginTop: '3px', borderRadius: '4px' }}> Download </button>
                        </Col>
                      </Row>
                    </Col>
                  </Row><br/><br/>
                  <Row>
                    <Col md={8}>
                      <h1 style={{ paddingTop: '40px',color: 'rgba(126, 126, 126, 1)',fontSize: '25px' }}> Business Goal </h1>
                      <p style={{ paddingTop: '30px', color: 'rgba(0, 0, 0, 1)',fontFamily: 'Roboto Mono, monospace', fontSize: '11px' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                     </p>
                    </Col>
                  </Row>
                </Container><br/>
                <br/>

                <Container>
                  <Row>
                    <Col md={12}>
                      <h1 style={{ paddingTop: '40px',color: 'rgba(126, 126, 126, 1)',fontSize: '25px', paddingBottom: '15px' }}> About Entrepreneur </h1> 
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} >
                      <img src={nameimg} alt=""/>
                    </Col>
                    <Col md={2} >
                      <h2 style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: '700' }}> Steve </h2>
                      <p style={{ color: 'rgba(0, 0, 0, 1)' }}> Strive for perfection </p>
                      <button type='button' style={{  padding: '5px 20px', backgroundColor: '#fff', color: 'rgba(0, 0, 0, 1)',marginTop: '3px', borderRadius: '4px', border: '1px solid rgba(165, 165, 165, 1)', fontSize: '12px' }}> Contact Me </button>
                    </Col>
                  </Row>
                </Container><br/><br/>

                <Footer />

    </>
  );
};
export default ResponsiveAppBar;
