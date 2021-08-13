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
            detail: '⭐4.7/5 아주대 혼밥, 도담도담 치킨에서 치밥 하시죠!',
            },
            {
            id: 2,
            name: '키와마루아지',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210727_113%2F1627362451734tee86_JPEG%2Fupload_069a6a1663dd064362777ce8ef2f0931.jpeg',
            detail: '⭐4.24/5 돈코츠라멘이 느끼하지 않고 맛있어요 😊',
            },
            {
            id: 3,
            name: '한조카츠',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201217_73%2F1608188053297bCjLl_JPEG%2FwiEIc2v_h23tdGqeHlpw8gKI.jpg',
            detail: '⭐4.6/5 등심쪽과 안심쪽 모두를 즐길 수 있는 모듬카츠 추천합니다!',
            },
            {
            id: 4,
            name: '이모네손칼국수',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjRfNzQg%2FMDAxNTgyNTQ1NzAwNDQx.zC80iw2vnLHwUMDspeFoM1yd4I-N7Dihw_8IORlXf6cg.yLX4wBwrQv0EQokcANrKInEmJe0bG_c4ncdH5s7Ep2Ug.JPEG.bbbb56%2F20200223_141628.jpg',
            detail: '⭐4.4/5 아는사람만 찾아가는 아주대 칼국수',
            },
            {
            id: 5,
            name: '멘야고코로',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190415_101%2F1555327525521z9PWX_JPEG%2FyXQQFAeM1fYIf0tuqc1QxOwm.jpeg.jpg',
            detail: '⭐4.5/5 수원 유일의 마제소바 가게입니다😊',
            },
            {
            id: 6,
            name: '어송스시',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200717_40%2F1594980673447M0Cv3_JPEG%2Fupload_039c939ae52f92d5827bd8f7e18eb93d.jpg',
            detail: '⭐4.7/5 어송스시 연어초밥 추천합니다. 두께가 엄청 크고 두꺼워요!',
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