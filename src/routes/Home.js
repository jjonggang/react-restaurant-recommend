import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Restaurant from '../components/Restaurant';
import './Home.css'

class Home extends React.Component{
    state = {
        isLoading: false,
        ajouRestaurant: [
            {
            id: 1,
            name: '도담도담',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200206_42%2F1580978189914CKpof_JPEG%2FLm-leIguKIS0mEM_DnmoyKEL.jpg',
            detail: '치킨 팝니다!',
            },
            {
            id: 2,
            name: '키와마루아지',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210727_113%2F1627362451734tee86_JPEG%2Fupload_069a6a1663dd064362777ce8ef2f0931.jpeg',
            detail: '라멘 팝니다!',
            },
            {
            id: 3,
            name: '한조카츠',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201217_73%2F1608188053297bCjLl_JPEG%2FwiEIc2v_h23tdGqeHlpw8gKI.jpg',
            detail: '돈까스 팝니다!',
            },
            {
            id: 4,
            name: '이모네손칼국수',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjRfNzQg%2FMDAxNTgyNTQ1NzAwNDQx.zC80iw2vnLHwUMDspeFoM1yd4I-N7Dihw_8IORlXf6cg.yLX4wBwrQv0EQokcANrKInEmJe0bG_c4ncdH5s7Ep2Ug.JPEG.bbbb56%2F20200223_141628.jpg',
            detail: '칼국수 팝니다!',
            },
            {
            id: 5,
            name: '멘야고코로',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190415_101%2F1555327525521z9PWX_JPEG%2FyXQQFAeM1fYIf0tuqc1QxOwm.jpeg.jpg',
            detail: '일식 팝니다!',
            },
            {
            id: 6,
            name: '어송스시',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200717_40%2F1594980673447M0Cv3_JPEG%2Fupload_039c939ae52f92d5827bd8f7e18eb93d.jpg',
            detail: '스시 팝니다!',
            }
        ],
    };
    // componentDidMount() {
    //     const {isLoading} = this.state;
    //     setTimeout(() => {
    //         this.setState({isLoading: false});
    //       }, 0);
    // }
    render(){
        const {isLoading, ajouRestaurant} = this.state;
        return(
            <div>
                {isLoading?(
                    <div class="loader">Loading...</div>
                    
                ):(
                <div className = "parent">
                    <div className = "child">
                        {ajouRestaurant.map(ajou => (
                            <Restaurant key = {ajou.id} id = {ajou.id} name={ajou.name} image={ajou.image} detail={ajou.detail} />
                        ))}
                    </div>
                    {/* <div className = "child" id="likeList">
                        <Detail />
                    </div> */}
                </div>
                )}
            </div>
        );
    }
}

export default Home;