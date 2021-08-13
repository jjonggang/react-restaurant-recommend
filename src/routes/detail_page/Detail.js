import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './Detail.css'


class Detail extends React.Component{
    render(){
        const {location} = this.props;
        return (
            <div>
                <div >
                    <React.Fragment>
                        <Container fixed id="video">
                            <Typography component="div" style={{ backgroundColor: '#BD76DE', height: '10vh' }}>식당 이름 들어가는 자리</Typography>
                        </Container>
                    </React.Fragment>
                    <React.Fragment>
                        <Container fixed id="video">
                            {/* <VideoClip key = {ajou.id} id = {ajou.id} name={ajou.name} image={ajou.image} detail={ajou.detail} /> */}
                            <Typography component="div" style={{ backgroundColor: '#CCEEFC', height: '50vh' }}>
                            <Button variant="contained" color="primary">
                                Primary
                            </Button>
                                유튜브 클립 및 간단한 설명 들어갈 자리 <br/><br/>
                                <h2>props 사용 방식<br/></h2>
                                <p>
                                    {location.state.id}<br/>
                                    {location.state.name}<br/>
                                    {location.state.detail}<br/>
                                    <img id="picture" src={location.state.image} alt = "음식 사진"/>
                                </p>
                            </Typography>
                            
                        </Container>
                    </React.Fragment>
                    <React.Fragment>
                        <Container fixed id="gps">
                              {/* <GPSMap key = {ajou.id} id = {ajou.id} name={ajou.name} image={ajou.image} detail={ajou.detail} /> */}
                            <Typography component="div" style={{ backgroundColor: "#87FFB9", height: '50vh' }}>GPS 들어갈 자리</Typography>
                        </Container>
                    </React.Fragment>
                </div>
            </div>
        );
            
        
    }
}
export default Detail;