import {Component} from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component{
  state = {
    productos1 : [
      {name: 'Chelsea', price: 1700, img: '/productos/chelsea.jpg'},
      {name: 'M. United', price: 1500, img: '/productos/manchester-united.jpg'},
      {name: 'M. City', price: 1650, img: '/productos/manchester-city.jpg'},
      {name: 'Arsenal', price: 1400, img: '/productos/arsenal.jpg'},
      {name: 'West Ham', price: 1300, img: '/productos/west-ham.jpg'},
    ],
    productos2 : [
      {name: 'Juventus', price: 2000, img: '/productos/juventus.png'},
      {name: 'Milan', price: 1450, img: '/productos/milan.jpg'},
      {name: 'Roma', price: 1750, img: '/productos/roma.png'},
      {name: 'Inter', price: 1650, img: '/productos/inter.png'},
      {name: 'Napoli', price: 1450, img: '/productos/napoli.png'},
    ],
    carro: [],
    esCarroVisible: false,
  }

  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x=>x.name === producto.name)){
      const newCarro = carro.map(x=> x.name === producto.name ? 
        ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({carro:newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }
  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }
  render(){
    const {esCarroVisible} = this.state
    return (
      <div>
        <Navbar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}/>
        <Layout>
        <Title text="Jersey de la Premier League" />
          <Productos 
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos1}
          />
          <Title text="Jersey de la Serie A" />
          <Productos 
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos2}
          />
        </Layout>
      </div>
    )
  }
}
export default App;
