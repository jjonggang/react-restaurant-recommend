import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import './Detail.css'
import PhoneIcon from '@material-ui/icons/Phone';
import MapIcon from '@material-ui/icons/Map';
import ScheduleIcon from '@material-ui/icons/Schedule';


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
                            <Typography component="div" style={{ backgroundColor: "rgb(204, 204, 204)", height: '70vh'}}>
                                    <br/>
                                    <hr></hr>
                                    &nbsp;&nbsp;&nbsp;<PhoneIcon/> <b id="head-title">전화번호</b><br/>
                                    &nbsp;&nbsp;&nbsp;{location.state.phone} <br/>
                                    <hr></hr>
                                    &nbsp;&nbsp;&nbsp;<ScheduleIcon/> <b id="head-title">영업시간</b><br/>
                                    &nbsp;&nbsp;&nbsp;{location.state.time} <br/>
                                    <hr></hr>
                                    &nbsp;&nbsp;&nbsp;<MapIcon/> <b id="head-title">주소</b><br/>
                                    &nbsp;&nbsp;&nbsp;{location.state.address} <br/>
                            <div className="google-map-code" align="middle">
                                <iframe src={location.state.place} width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                            </div>
                            <hr></hr>
                            </Typography>                  
                        </Container>
                    </React.Fragment>
                </div>
            </div>
        );
            
        
    }
}
export default Detail;

