import React, { Component } from 'react'

export class Сategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всі'
                },
                {
                    key: 'chairs',
                    name: 'Крісла'
                },
                {
                    key: 'tables',
                    name: 'Столи'
                },
                {
                    key: 'sofa',
                    name: 'Дивани'
                },
                {
                    key: 'light',
                    name: 'Лампи'
                }
            ]
        }
    }


  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
                {el.name}
             </div>
        ))}
      </div>
    )
  }
}

export default Сategories