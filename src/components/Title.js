import { Component } from "react";

const styles = {
    title: {
        marginBottom: '30px'
    }
}
class Title extends Component{
    render(){
        const { text } = this.props; // se obtiene el texto pasado como prop
        return(
            <h1 style={styles.title}>{text}</h1> // se utiliza el texto en el contenido del título
        )
    }
}


// class Title extends Component{
//     render(){
//         return(
//             <h1 style={styles.title}>JERSEY</h1>
//         )
//     }
// }

export default Title