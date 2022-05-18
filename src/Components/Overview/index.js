import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
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
import { NavLink } from 'react-router-dom';
import { Form, FloatingLabel } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';

const pages = ['Dashboard', 'Messages', 'Pitch Idea', 'Analytics', 'More'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const preventDefault = (event) => event.preventDefault();

const NewProject = () => {
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
                                    
                                    <Link style={{ float: 'left', padding: '0px 5px', fontSize: '14px', color:'gray', cursor: 'pointer', textDecoration: 'none' }} to='/faq'>
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
                                       <Container style={{ backgroundColor: '#fff', padding: '30px' }}>
                                           <Row>
                                               <Col md={12}>
                                                   <Row>
                                                       <Col md={2}>
                                                           <h4 style={{ paddingLeft: '40px' }}> IDEA TITLE </h4>
                                                       </Col>
                                                       <Col md={9}>
                                                           <input type='text' placeholder="Write The Title Of The Project" style={{ color: '#C4C4C4', width: '100%', height: '80%', padding: '10px', border: '1px solid #C4C4C4', fontSize: '13px' }} />
                                                       </Col>
                                                   </Row>
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
                                                       <Col md={2}>
                                                           <h4 style={{ paddingLeft: '40px' }}> DESCRIPTION </h4>
                                                       </Col>
                                                       <Col md={9}>
                                                       <FloatingLabel controlId="floatingTextarea2" label="Briefly Describe Your Ideas" style={{ color: '#C4C4C4' }}>
                                                        <Form.Control
                                                          as="textarea"
                                                          placeholder="Leave a comment here"
                                                          style={{ height: '190px' }}
                                                        />
                                                      </FloatingLabel>
                                                       </Col>
                                                   </Row>
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
                                                       <Col md={2}>
                                                           <h4 style={{ paddingLeft: '40px' }}> CATEGORIES </h4>
                                                       </Col>
                                                       <Col md={9}>
                                                       <Form.Select aria-label="Default select example">
                                                        <option style={{ color: '#C4C4C4' }}>Select Categories</option>
                                                      </Form.Select>
                                                       </Col>
                                                   </Row>
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
                                                       <Col md={4}>
                                                           <h4 style={{ paddingLeft: '40px' }}> REQUIRED FUNDS / INVEST </h4>
                                                       </Col>
                                                       <Col md={8}>
                                                        <input type='text' style={{ width: '40%', border:'1px solid #C4C4C4', borderRadius: '5px', float: 'left' }} />
                                                        <h6 style={{ float: 'left', paddingLeft: '15px' }}> PKR </h6>
                                                       </Col>
                                                   </Row>
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
                                                       <Col md={2}>
                                                           
                                                       </Col>
                                                       <Col md={9}>
                                                       <FormControl>
                                                        <RadioGroup
                                                          aria-labelledby="demo-radio-buttons-group-label"
                                                          defaultValue="female"
                                                          name="radio-buttons-group"
                                                        >
                                                          <FormControlLabel value="female" control={<Radio />} label="Accept the terms&conditions of return policy." />
                                                        </RadioGroup>
                                                      </FormControl>
                                                       </Col>
                                                   </Row>
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
                                                       
                                                       <Col md={9}>
                                                    
                                                       </Col>
                                                       <Col md={3}>
                                                         <Row>
                                                           <Col md={6}>
                                                           <Button variant="outlined" style={{ color: '#C4C4C4', border: ' 1px solid #C4C4C4', padding: '4px 15px' }}>Cencel</Button>   
                                                           </Col>
                                                           <Col md={6}>
                                                           <Button variant="contained" style={{ padding: '5px 22px' }}>Save</Button>
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
export default NewProject;