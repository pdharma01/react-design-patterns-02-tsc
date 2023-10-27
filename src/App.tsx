import { useState } from 'react'
import './App.css'

// Basic Types 
import BasicProps from './components/basicTypes/BasicProps'
import ComponentWithChildren from './components/ComponentWithChildren'
import ButtonEvent from './components/basicTypes/ButtonEvent'

// useHooks 
import UseHooks from './components/useHooks/UseHooks'

// Layout Components 
import SimpleForm from './components/SimpleForm'
import SplitScreenContainer from './components/SplitScreenContainer'
import SplitScreenPanel from './components/SplitScreenPanel'
// Lists 
import RegularList from './components/RegularList'
import SmallProductListItem from './components/SmallProductListItem'
import SmallUserListItem from './components/SmallUserListItem'
import withNumberedList from './components/withNumberedList'
import { ProductType, UserType } from './components/types'
import ScratchTests from './components/ScratchTests'





const tempData = {
  products: [
    {
      "id": 1,
      "name": "Smartphone",
      "price": 499.99,
      "description": "A powerful mobile device with advanced features.",
      "rating": 4.5
    },
    {
      "id": 2,
      "name": "Laptop",
      "price": 899.99,
      "description": "A versatile and high-performance computing machine.",
      "rating": 2.8
    },
    {
      "id": 3,
      "name": "Smart TV",
      "price": 699.99,
      "description": "A large-screen television with streaming capabilities.",
      "rating": 4.3
    },
    {
      "id": 4,
      "name": "Wireless Earbuds",
      "price": 129.99,
      "description": "Compact earbuds with high-quality audio and wireless convenience.",
      "rating": 4.7
    },
    {
      "id": 5,
      "name": "Tablet",
      "price": 349.99,
      "description": "A portable touchscreen device for entertainment and productivity.",
      "rating": 4.2
    }
  ],

  users: [
    {
      "id": 1,
      "screen_name": "alice_doe",
      "level": 3,
      "email": "alice@example.com",
      "member": true
    },
    {
      "id": 2,
      "screen_name": "bob_smith",
      "level": 32,
      "email": "bob@example.com",
      "member": false
    },
    {
      "id": 3,
      "screen_name": "charlie_brown",
      "level": 24,
      "email": "charlie@example.com",
      "member": true
    },
    {
      "id": 4,
      "screen_name": "david_jones",
      "level": 88,
      "email": "david@example.com",
      "member": true
    },
    {
      "id": 5,
      "screen_name": "eve_rodriguez",
      "level": 14,
      "email": "eve@example.com",
      "member": false
    }
  ]

}

const NumberedList = withNumberedList(RegularList<UserType>)

function App() {
  const [products, setProducts] = useState(tempData["products"].slice(0, 2));
  const [users, setUsers] = useState(tempData["users"].slice(0, 2))

  return (
    <>
      <div className='section'>
        <h2>Basic Types</h2>
        <ComponentWithChildren>
          <h4>ComponentWithChildren</h4>

          <BasicProps
            stringLiteral='Works!'
            optionWithDefault="Option inputed in App" />

          <ButtonEvent
            handleClick={(event, id) => console.log(id, event)}
            buttonText='Log Button ID and Event' />

            <SimpleForm></SimpleForm>

        </ComponentWithChildren>


      </div>
      <div className="section">
        <h2>UseHooks</h2>
        <UseHooks></UseHooks>
      </div>


      <div className="section">
        <h2>SplitScreen</h2>

        <SplitScreenContainer>

          <SplitScreenPanel fr={1} >

            <div>
              <h3>Small Product Regular List</h3>
              <RegularList<ProductType>
                items={products}
                resourceName="products"
                itemComponent={SmallProductListItem}
              />
            </div>

            <div>
              <h3>Small User Numbered List</h3>
              <NumberedList
                items={users}
                resourceName="users"
                itemComponent={SmallUserListItem}
              />
            </div>


          </SplitScreenPanel>

          <SplitScreenPanel fr={5} >

          </SplitScreenPanel>

        </SplitScreenContainer>
      </div>
      <ScratchTests/>
    </>
  )
}

export default App
