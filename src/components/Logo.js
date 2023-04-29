import { Component } from "react";

const styles = {
    logo: {
        fontWeight: '700',
        fontSize: '2rem',
        color: 'white',
        background: 'black',
        padding: '20px'
    }
}

class Logo extends Component {
    render(){
        return(
            <div style={styles.logo}>
                Shop de jersey de tu equipo favorito
            </div>
        )
    }
}

export default Logo