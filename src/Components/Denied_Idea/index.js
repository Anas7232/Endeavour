import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import iconimg from '../../Images/iconimg.png'
import { Container, Row,Col } from 'react-bootstrap';
import Footer from '../Footer';
import car from '../../Images/car.png';
import { Link } from 'react-router-dom';


const pages = ['Dashboard', 'Messages', 'Pitch Idea', 'Analytics', 'More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const preventDefault = (event) => event.preventDefault();

const DeniedIdea = () => {
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
        <AppBar position="static" style={{ padding: '20px 50px', backgroundColor: 'white', }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              style={{ color: 'rgba(112, 112, 112, 1)' }}
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
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                style={{ color: 'rgba(112, 112, 112, 1)', fontWeight: '700', background: 'none' }}
                sx={{ my: 2, color: 'rgba(112, 112, 112, 1)', display: 'block' }}
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
                <Container fluid style={{ background: '#E5E5E5' }}>
                <Container >
                    <Row>
                        <Col md={12}>
                            <h1 style={{ padding: '50px 0px' }}> Ideas </h1>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '0px' }}>
                        <Col md={6}>
                            <Row>
                                <Col md={2}>
                                    <Link style={{ color: 'gray', textDecoration: 'none', cursor: 'pointer' }} to="/ideasentre">ACTIVE</Link>
                                </Col>
                                <Col md={2}>
                                <Link style={{ color: 'gray', textDecoration: 'none', cursor: 'pointer' }} to="/denied">DENIED</Link>
                                </Col>
                                <Col md={2}>
                                <Link style={{ color: 'gray', textDecoration: 'none', cursor: 'pointer' }} to='/'>DRAFT</Link>
                                </Col>
                                <Col md={2}>
                                <Link style={{ color: 'gray', textDecoration: 'none', cursor: 'pointer' }} to='/'>PAUSED</Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col md={12}>
                                    <button style={{ border: 'none', color: 'white', background: '#2A61F5', padding: '4px 6px',float: 'right', borderRadius: '4px' }}> Create New Project </button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container style={{ background: '#fff', marginTop: '30px',  }}>
                    <Row>
                        <Col md={12}>
                            <h6> Denied </h6>
                        </Col>
                    </Row>
                   <Container style={{ padding: '20px 0px' }}>
                   <Row style={{ paddingTop: '20px' }}>
                        <Col md={6}>Idea</Col>
                        <Col md={6}>
                            <Row>
                                <Col md={4}>Impression</Col>
                                <Col md={4}>Clicks</Col>
                                <Col md={4}>Funds</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '18px' }}>
                       
                    </Row>
                   
                   </Container>
                </Container><br/>
                </Container>

                <Footer />

    </>
  );
};
export default DeniedIdea;
