import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Restaurant from '../components/Restaurant';
import './Home.css'

class Home extends React.Component{
    state = {
        ajouRestaurant: [
            {
            id: 1,
            name: '도담도담',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200206_42%2F1580978189914CKpof_JPEG%2FLm-leIguKIS0mEM_DnmoyKEL.jpg',
            detail: '치킨 팝니다!',
            place: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.6727779916246!2d127.04008091576479!3d37.27918587985275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b55d1111015%3A0xbc2584ab453917d0!2z64-E64u064-E64u07LmY7YKo!5e0!3m2!1sen!2skr!4v1628716910138!5m2!1sen!2skr',
            phone: '031-211-0330',
            address: '경기 수원시 팔달구 월드컵로211번길 24',
            time: '매일 11:00 - 0:00 일요일 휴무',
            },
            {
            id: 2,
            name: '키와마루아지',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210727_113%2F1627362451734tee86_JPEG%2Fupload_069a6a1663dd064362777ce8ef2f0931.jpeg',
            detail: '라멘 팝니다!',
            place: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.802947838098!2d127.04036331576464!3d37.2760995798533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b551e3226c5%3A0xb7435f4fea1a91a2!2sKiwamaruaji!5e0!3m2!1sen!2skr!4v1628717145735!5m2!1sen!2skr',
            phone: '031-214-9015',
            address: '경기 수원시 팔달구 아주로13번길 22',
            time: '금요일 11:00 - 21:30 재료 소진 시 마감',
            },
            {
            id: 3,
            name: '한조카츠',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201217_73%2F1608188053297bCjLl_JPEG%2FwiEIc2v_h23tdGqeHlpw8gKI.jpg',
            detail: '돈까스 팝니다!',
            place: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.684954785843!2d127.03993071576471!3d37.27889717985277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b04eea18837%3A0x497b7ddd01895226!2z7ZWc7KGw7Lm07Lig!5e0!3m2!1sen!2skr!4v1628717301490!5m2!1sen!2skr',
            phone: '031-213-6822',
            address: '경기 수원시 팔달구 중부대로239번길 78 1층',
            time: '매일 11:00 - 20:00 휴식 : 15:00 - 17:00 점심 막오더 : 14:30 저녁 막오더 : 19:30 토요일 휴무',
            },
            {
            id: 4,
            name: '이모네손칼국수',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjRfNzQg%2FMDAxNTgyNTQ1NzAwNDQx.zC80iw2vnLHwUMDspeFoM1yd4I-N7Dihw_8IORlXf6cg.yLX4wBwrQv0EQokcANrKInEmJe0bG_c4ncdH5s7Ep2Ug.JPEG.bbbb56%2F20200223_141628.jpg',
            detail: '칼국수 팝니다!',
            place: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.7715228472384!2d127.0391730157646!3d37.27684467985309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b5512d2ffc5%3A0x6bab47bc0231f83c!2z7J2066qo64Sk7IaQ7Lm86rWt7IiY!5e0!3m2!1sen!2skr!4v1628717431783!5m2!1sen!2skr',
            phone: '031-211-6886',
            address: '경기 수원시 팔달구 중부대로223번길 20-7',
            time: '평일 11:00 - 20:00',       
            },
            {
            id: 5,
            name: '멘야고코로',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190415_101%2F1555327525521z9PWX_JPEG%2FyXQQFAeM1fYIf0tuqc1QxOwm.jpeg.jpg',
            detail: '일식 팝니다!',
            place: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.724340068427!2d127.04317401576462!3d37.277963379852864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b5407f16e45%3A0x9c4120a20480141!2z66mY7JW86rOg7L2U66Gc!5e0!3m2!1sen!2skr!4v1628717368024!5m2!1sen!2skr',
            phone: '0507-1328-1259',
            address: '경기 수원시 영통구 월드컵로179번길 16',
            time: '매일 11:00 - 21:00 휴식 : 14:00 - 17:30 일요일, 공휴일 휴일',
            },
            {
            id: 6,
            name: '어송스시',
            image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200717_40%2F1594980673447M0Cv3_JPEG%2Fupload_039c939ae52f92d5827bd8f7e18eb93d.jpg',
            detail: '스시 팝니다!',
            place: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.7715228472384!2d127.0391730157646!3d37.27684467985309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b2a928d7287%3A0x7080a681466d68b!2z7Ja07Iah7Iqk7Iuc!5e0!3m2!1sen!2skr!4v1628717463298!5m2!1sen!2skr',
            phone: '0507-1330-2021',
            address: '경기 수원시 팔달구 월드컵로211번길 17 1층',
            time: '매일 11:30 - 24:00 휴식 14:30 - 17:30 재료소진시 조기마감 월요일 휴무',
            }
        ],
    };
    render(){
        const {ajouRestaurant} = this.state;
        return(
            <div>
                {ajouRestaurant.map(ajou => (
                    <Restaurant key = {ajou.id} id = {ajou.id} name={ajou.name} image={ajou.image} detail={ajou.detail} place={ajou.place} phone={ajou.phone} address={ajou.address} time={ajou.time}/>
                ))}
            </div>
        );
    }
}

export default Home;

// const ajouRestaurant = [
//   {
//     id: 1,
//     name: '도담도담',
//     image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200206_42%2F1580978189914CKpof_JPEG%2FLm-leIguKIS0mEM_DnmoyKEL.jpg',
//     detail: '치킨 팝니다!',
//   },
//   {
//     id: 2,
//     name: '키와마루아지',
//     image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210727_113%2F1627362451734tee86_JPEG%2Fupload_069a6a1663dd064362777ce8ef2f0931.jpeg',
//     detail: '라멘 팝니다!',
//   },
//   {
//     id: 3,
//     name: '한조카츠',
//     image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201217_73%2F1608188053297bCjLl_JPEG%2FwiEIc2v_h23tdGqeHlpw8gKI.jpg',
//     detail: '돈까스 팝니다!',
//   },
//   {
//     id: 4,
//     name: '이모네손칼국수',
//     image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAyMjRfNzQg%2FMDAxNTgyNTQ1NzAwNDQx.zC80iw2vnLHwUMDspeFoM1yd4I-N7Dihw_8IORlXf6cg.yLX4wBwrQv0EQokcANrKInEmJe0bG_c4ncdH5s7Ep2Ug.JPEG.bbbb56%2F20200223_141628.jpg',
//     detail: '칼국수 팝니다!',
//   },
//   {
//     id: 5,
//     name: '멘야고코로',
//     image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20190415_101%2F1555327525521z9PWX_JPEG%2FyXQQFAeM1fYIf0tuqc1QxOwm.jpeg.jpg',
//     detail: '일식 팝니다!',
//   },
//   {
//     id: 6,
//     name: '어송스시',
//     image: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200717_40%2F1594980673447M0Cv3_JPEG%2Fupload_039c939ae52f92d5827bd8f7e18eb93d.jpg',
//     detail: '스시 팝니다!',
//   }
// ];




// function Home() {
//   return (
//     <div>
//       {ajouRestaurant.map(ajou => (
//         <Restaurant key = {ajou.id} name={ajou.name} image={ajou.image} detail={ajou.detail} />
//       ))}
//     </div>
//     );
// }

// export default Home;