import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
import nameimg from '../../Images/nameimg.png'
import detital from '../../Images/detital.png';
import Footer from '../Footer';
import car from '../../Images/car.png';
import cards from '../../Images/cards.png'
import boxs from '../../Images/boxs.png'

const pages = ['Dashboard', 'Messages', 'Pitch Idea', 'Analytics', 'More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const preventDefault = (event) => event.preventDefault();

const Entrepreneur = () => {
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

                <Container fluid style={{ backgroundColor: ' #E5E5E5', padding: '40px 70px' }}>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col md={12}>
                                    <Container style={{ backgroundColor: '#fff' }}>
                                        <Row>
                                            <Col md={12}>
                                                <Row style={{ padding: '20px' }}>
                                                    <Col md={4}>
                                                        <img src={nameimg} alt="Investor2" />
                                                    </Col>
                                                    <Col md={8}>
                                                        <h3 style={{ fontSize: '25px', color: 'rgba(64, 65, 69, 1)' }}> ASIF PEER </h3>
                                                        <p style={{ fontSize: '10px' }}> VC SystemsLtd </p>
                                                    </Col>
                                                </Row>
                                                <Row style={{ borderTop: '1px solid rgba(112, 112, 112, 1)', borderBottom: '1px solid rgba(112, 112, 112, 1)' }}>
                                                    <Col md={12}>
                                                        <p style={{ paddingBottom: '30px', paddingTop: '10px', paddingLeft: '5px', paddingRight: '10px' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        <h5 style={{ fontSize: '15px', paddingTop: '10px', paddingBottom: '20px' }}> Member Since 11 Feb, 2021 </h5>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md={12}>
                                    <Container style={{ backgroundColor: '#fff' }}>
                                        <Row>
                                            <Col md={12}>
                                                <Row style={{ padding: '10px 20px' }}>
                                                    <Col md={6}>
                                                        <h6 style={{ color: 'rgba(64, 65, 69, 1)' }}> Inbox </h6> 
                                                    </Col>
                                                    <Col md={6}>
                                                    <Box
                                                        sx={{
                                                            typography: 'body1',
                                                            '& > :not(style) + :not(style)': {
                                                            ml: 2,
                                                            },
                                                        }}
                                                        onClick={preventDefault}
                                                        >
                                                        <Link href="#" style={{ textDecoration: 'none' }}>View All</Link>
                                                        </Box>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={8}>
                            <Container style={{ backgroundColor: '#fff' }}>
                                <Row>
                                    <Col md={12}>
                                        <h6 style={{ padding: '10px 0px' }}> Pending Approvals - (3) </h6>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Container style={{ borderBottom: '1px solid rgba(112, 112, 112, 1)' }}>
                                            <Row className='m-auto' style={{ padding: '20px' }}>
                                                <Col md={3}>
                                                    <img src={car} alt="Car" />
                                                </Col>
                                                <Col md={3} className='m-auto'>
                                                    <h3 className='d-block' style={{ fontSize: '18px' }}> OneTransport </h3>
                                                    <button style={{ backgroundColor: 'rgba(255, 193, 7, 1)', border:' none', padding: '0px 18px', borderRadius: '10px', color: '#fff' }}> Pending </button>
                                                </Col>
                                                <Col md={3}>
                                                <Row style={{ paddingTop: '15px' }}>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}> Start Date </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}>12/01/2022</p>
                                                    </Col>
                                                </Row>
                                                </Col>
                                                <Col md={3} className='m-auto'>
                                                <Box
                                            className='d-block'
                                            style={{ paddingLeft: '20px' }}
                                                        sx={{
                                                            typography: 'body1',
                                                            '& > :not(style) + :not(style)': {
                                                            ml: 2,
                                                            },
                                                        }}
                                                        onClick={preventDefault}
                                                        >
                                                        <Link href="#" className='d-block' style={{ textDecoration: 'none' }}>View</Link>
                                                        </Box>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container style={{ borderBottom: '1px solid rgba(112, 112, 112, 1)' }}>
                                            <Row className='m-auto' style={{ padding: '20px' }}>
                                                <Col md={3}>
                                                    <img style={{ width: '90%' }} src={cards} alt="Car" />
                                                </Col>
                                                <Col md={3} className='m-auto'>
                                                    <h3 className='d-block' style={{ fontSize: '18px' }}> OneTransport </h3>
                                                    <button style={{ backgroundColor: 'rgba(255, 193, 7, 1)', border:' none', padding: '0px 18px', borderRadius: '10px', color: '#fff' }}> Pending </button>
                                                </Col>
                                                <Col md={3}>
                                                <Row style={{ paddingTop: '15px' }}>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}> Start Date </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}>12/01/2022</p>
                                                    </Col>
                                                </Row>
                                                </Col>
                                                <Col md={3} className='m-auto'>
                                                <Box
                                            className='d-block'
                                            style={{ paddingLeft: '20px' }}
                                                        sx={{
                                                            typography: 'body1',
                                                            '& > :not(style) + :not(style)': {
                                                            ml: 2,
                                                            },
                                                        }}
                                                        onClick={preventDefault}
                                                        >
                                                        <Link href="#" className='d-block' style={{ textDecoration: 'none' }}>View</Link>
                                                        </Box>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container style={{ borderBottom: '1px solid rgba(112, 112, 112, 1)' }}>
                                            <Row className='m-auto' style={{ padding: '20px' }}>
                                                <Col md={3}>
                                                    <img style={{ width: '90%' }} src={boxs} alt="Car" />
                                                </Col>
                                                <Col md={3} className='m-auto'>
                                                    <h3 className='d-block' style={{ fontSize: '18px' }}> OneTransport </h3>
                                                    <button style={{ backgroundColor: 'rgba(255, 193, 7, 1)', border:' none', padding: '0px 18px', borderRadius: '10px', color: '#fff' }}> Pending </button>
                                                </Col>
                                                <Col md={3}>
                                                <Row style={{ paddingTop: '15px' }}>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}> Start Date </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}>12/01/2022</p>
                                                    </Col>
                                                </Row>
                                                </Col>
                                                <Col md={3} className='m-auto'>
                                                <Box
                                            className='d-block'
                                            style={{ paddingLeft: '20px' }}
                                                        sx={{
                                                            typography: 'body1',
                                                            '& > :not(style) + :not(style)': {
                                                            ml: 2,
                                                            },
                                                        }}
                                                        onClick={preventDefault}
                                                        >
                                                        <Link href="#" className='d-block' style={{ textDecoration: 'none' }}>View</Link>
                                                        </Box>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                            <br/>
                            <Container style={{ backgroundColor: '#fff' }}>
                                <Row style={{ padding: '20px 10px' }}>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={12}>
                                                <h3 style={{ fontSize: '20px' }}> Active Workshops (1) </h3>
                                            </Col>
                                        </Row>
                                        <Row style={{ padding: '20px 0px' }}>
                                            <Col md={4}>
                                                <img src={detital} alt="car" />
                                            </Col>
                                            <Col md={2} className="m-auto">
                                                <h6 className='d-block' style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: '600' }}> Detital </h6>
                                                <h6 className='d-block' style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: '600' }}> Marketing </h6>
                                            </Col>
                                            <Col md={2}>
                                                <Row style={{ paddingTop: '15px' }}>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}> Start Date </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}>12/01/2022</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md={2}>
                                            <Row style={{ paddingTop: '15px' }}>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}> Enrolled Members </p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={12}>
                                                        <p style={{ fontSize: '12px' }}>12</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col md={2} className='m-auto'>
                                            <Box
                                            className='d-block'
                                            style={{ paddingLeft: '20px' }}
                                                        sx={{
                                                            typography: 'body1',
                                                            '& > :not(style) + :not(style)': {
                                                            ml: 2,
                                                            },
                                                        }}
                                                        onClick={preventDefault}
                                                        >
                                                        <Link href="#" style={{ textDecoration: 'none' }}>View</Link>
                                                        </Box>
                                            </Col>
                                        </Row>
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
export default Entrepreneur;
