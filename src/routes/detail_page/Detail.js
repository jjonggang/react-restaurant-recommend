import React from 'react';
import Container from '@material-ui/core/Container';

class Detail extends React.Component{
    render(){
        const {location} = this.props;
        return(
            <div>
                <h1>{location.state.id}!</h1>
                <h2>{location.state.name}</h2>
                <h3>{location.state.detail}</h3>
                <img src={location.state.image} alt = "음식 사진"/>

            </div>
        );
    }
}
export default Detail;

// function Detail(props){
//     return(
//         <span>{this.props.name}</span>
//     );
// }

// export default Detail;