import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import Categories from './components/Сategories'



class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [], 
      items: [
        {
          id:1,
          title: 'Крісло темне',
          img: 'stul1.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '4.500'
        },
        {
          id:2,
          title: 'Стіл',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'tables',
          price: '10.000'
        },
        {
          id:3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'sofa',
          price: '70.000'
        },
        {
          id:4,
          title: 'Лампа',
          img: 'light.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'light',
          price: '35.000'
        },
        {
          id:5,
          title: 'Крісло кольорове',
          img: 'stul2.jpg',
          desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          category: 'chairs',
          price: '7.500'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  

  render() {
    return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} item={this.state.fullItem} onShowItem={this.onShowItem} />}
        <Footer />
    </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInCart = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInCart = true
    })
    if(!isInCart)
    this.setState({orders: [...this.state.orders, item]})
  }

}

export default App;