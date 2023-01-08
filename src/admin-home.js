import React from 'react';
import NavigationBar from './NavigationBar';

const backgroundStyle = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    height: "1920px",
    backgroundColor: "gray"
};
const textStyle = { color: 'white', };

class AdminHome extends React.Component {


    render() {

        return (
            <div>
            <NavigationBar></NavigationBar>
            </div>
        )
    };
}

export default AdminHome
