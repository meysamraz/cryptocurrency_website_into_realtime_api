import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';



export default class Home extends Component {

    constructor(props) {
		super(props);
		this.state = {
			items: [],
			DataisLoaded: false
		};}

  componentDidMount() {
		fetch(
      "http://127.0.0.1:5000/rest",{
        method: 'GET',
        mode: 'cors',
      })
			.then((res) => res.json())
      
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})}
    renderElement(){
        if(this.state.DataisLoaded ==false)
           return <div sx={{alignItems:'center'}} >
           <Box sx={{ display: 'flex',alignItems:'center' }}>
           <CircularProgress />
         </Box> </div> ;
        return  this.state.items.map((item) => ( 
              <Card sx={{margin:4}}>
                <Stack
                direction="row"
                alignItems={'center'}
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}
              >
              <Box sx={{ p: 0, display: 'flex' }}>
                <Avatar src={item.image} />
                <Stack sx={{marginLeft:4}}  spacing={0.5}>
                  <Typography fontWeight={700}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                   {item.subtitle}
                  </Typography>
                </Stack>                
              </Box>
              <Stack
                direction="row"
                alignItems={'center'}
                justifyContent="space-between"
                sx={{ px: 2, py: 1, bgcolor: 'background.default' }}>
                <Stack>
                <Typography fontWeight={700}>{item.price}</Typography>
                  <Typography variant="body2" color="text.secondary">
                   {item.h1_change}
                  </Typography>
                </Stack>
              </Stack>
              </Stack>
            </Card>
        ));
    }
  render() {
    return (
       this.renderElement()
    )
  }
}
