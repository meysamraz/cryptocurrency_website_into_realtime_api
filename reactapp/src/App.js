import { BrowserRouter as Router, Route, Switch , withRouter  } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import React from "react";
import Home from './Home';
import './App.css';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

  renderElement(){
    if(this.state.DataisLoaded ==false)
       return <div style={{}}>
       <Box sx={{ display: 'flex' }}>
       <CircularProgress />
     </Box> </div> ;
    return  this.state.items.map((item) => ( 
      <Card sx={{ minWidth: 300 ,  margin:2,
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
      } }}>
      <CardContent>
        {item.title}
      </CardContent>
    </Card>
    ));
 }

render() {
		return (
      <Router>
      <div className = "App"  >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            CryptoCurrency 
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact  path="/" component={withRouter(Home)} />
      </Switch>
    </div>
    </Router>
	);
}
}

export default App;
