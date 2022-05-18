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
import { Link } from 'react-router-dom';


const pages = ['Dashboard', 'Messages', 'Pitch Idea', 'Analytics', 'More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const preventDefault = (event) => event.preventDefault();

const FaqScreen = () => {
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

    <Container fluid style={{ background: '#fff' }}>
                    <Row style={{ padding: '10px 0px' }}>
                        <Col md={12}>
                            <Row>
                                <Col md={2}></Col>
                                <Col md={2}>
                                <button style={{ float: 'left', borderRadius: '50%', padding: '0px 5px', fontSize: '10px',border: 'none', color: '#fff', background:'#C4C4C4', marginTop: '3px' }}> 1 </button>
                                   
                                    <Link style={{ float: 'left', padding: '0px 5px', fontSize: '14px', color:'gray', cursor: 'pointer', textDecoration: 'none' }} to='/newproject'>
                                     Overview & Description
                                    </Link>
                                </Col>
                                <Col md={2}>
                                <button style={{ float: 'left', borderRadius: '50%', padding: '0px 5px', fontSize: '10px',border: 'none', color: '#fff', background:'#C4C4C4', marginTop: '3px' }}> 2 </button>
                                    
                                    <Link style={{ float: 'left', padding: '0px 5px', fontSize: '14px', color:'gray', cursor: 'pointer', textDecoration: 'none' }} to='/'>
                                     Media File
                                    </Link>
                                </Col>
                                <Col md={2}>
                                <button style={{ float: 'left', borderRadius: '50%', padding: '0px 5px', fontSize: '10px',border: 'none', color: '#fff', background:'#C4C4C4', marginTop: '3px' }}> 3 </button>
                                    
                                    <Link style={{ float: 'left', padding: '0px 5px', fontSize: '14px', color:'gray', cursor: 'pointer', textDecoration: 'none' }} to='/'>
                                     FAQ & Public
                                    </Link>
                                </Col>
                                <Col md={2}>
                                    <Link style={{ float: 'left', padding: '0px 5px', fontSize: '15px', color:'#2A61F5', cursor: 'pointer', textDecoration: 'none' }} to='/'>
                                     Save & Publish
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
               
               <Container fluid style={{ backgroundColor: '#C4C4C4' }}>
                   <Row>
                       <Col md={12}>
                           <Container style={{ padding: '60px' }}>
                               <Row>
                                   <Col md={12}>
                                       <Container style={{ backgroundColor: '#fff', padding: '20px' }}>
                                           <Row>
                                               <Col md={12}>
                                                  <h2 style={{ padding: '10px' }}> Great, You are just one step away. </h2>
                                               </Col>
                                           </Row>
                                           
                                       </Container>
                                   </Col>
                               </Row>
                               <Row>
                                   <Col md={12}>
                                       <Container style={{ backgroundColor: '#fff', padding: '20px' }}>
                                           <Row>
                                               <Col md={12}>
                                                   <Row>
                                                       
                                                       <Col md={7}>
                                                    
                                                       </Col>
                                                       <Col md={5}>
                                                         <Row>
                                                           <Col md={6}>
                                                           <Button variant="outlined" style={{ color: '#C4C4C4', border: ' 1px solid #C4C4C4', padding: '4px 15px' }}>Cencel</Button>   
                                                           </Col>
                                                           <Col md={6}>
                                                           <Button variant="contained" style={{ padding: '5px 22px' }}>Submit For Approval</Button>
                                                           </Col>
                                                         </Row>
                                                       </Col>
                                                   </Row>
                                               </Col>
                                           </Row>
                                           
                                       </Container>
                                   </Col>
                               </Row>
                           </Container>
                       </Col>
                   </Row>
               </Container>

                <Footer />

    </>
  );
};
export default FaqScreen;