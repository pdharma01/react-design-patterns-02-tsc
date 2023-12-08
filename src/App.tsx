import { useState } from 'react'
import './App.css'

// Data Types 
import { FormInputType, ProductType, UserType } from './components/types'

// Utility Functions
import { LogClickEvent, LogClickEventTargetText } from './components/utilityFunctions/handleClickEvents'

// Basic Types 
import BasicProps from './components/basicTypes/BasicProps'
import ComponentWithChildren from './components/basicTypes/ComponentWithChildren'
import ButtonEvent from './components/basicTypes/ButtonEvent'
import ChangeEvent from './components/basicTypes/ChangeEvent'
import CssStyleProps from './components/basicTypes/CssStyleProps'
import HigherOrderComponent from './components/basicTypes/HigherOrderComponent'
import Generics from './components/basicTypes/Generics'
import TemplateLiteralsAndExclude from './components/basicTypes/TemplateLiteralsAndExclude'
import WrappingHTMLElement from './components/basicTypes/WrappingHTMLElement'
import RestrictingProps from './components/basicTypes/RestrictingProps'
import ExtractingProps from './components/basicTypes/ExtractingProps'
import PolymorphicComponents from './components/basicTypes/PolymorphicComponents'

// useHooks 
import UseHooks from './components/useHooks/UseHooks'
import UseStateProps from './components/useHooks/UseStateProps'

// Layout Components 
import SimpleForm from './components/SimpleForm'
import SplitScreenContainer from './components/SplitScreenContainer'
import SplitScreenPanel from './components/SplitScreenPanel'

// Lists 
import RegularList from './components/RegularList'
import SmallProductListItem from './components/SmallProductListItem'
import SmallUserListItem from './components/SmallUserListItem'
import withNumberedList from './components/withNumberedList'
import ScratchTests from './components/ScratchTests'
import LargeListItem from './components/LargeListItem'

// Design Components 
import ControlledModal from './components/ControlledModal'
import GenericsHOCList from './components/basicTypes/GenericsHOCList'
import ControlledForm from './components/ControlledForm'
import ItemForm from './components/ItemForm'




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

// as const 
// all react events (onClick, onChange)
// style props 
// useAuth  


// Higher order components 
const NumberedList = withNumberedList(RegularList<UserType>)

function App() {

  // Data State
  const [products, setProducts] = useState(tempData["products"].slice(0, 3));
  const [users, setUsers] = useState(tempData["users"].slice(0, 3))

  //User Input State
  const [formInput, setFormInput] = useState<FormInputType | null>(null);

  // Modal State
  const [showModal, setShowModal] = useState(false)
  // const [onRequestClose, setOnRequestClose] = useState(false)

  return (
    <>


      {/* Hooks  */}
      <div className="section">
        <h2>UseHooks</h2>
        <UseHooks></UseHooks>
        <UseStateProps
          user={users[0]}
        />
      </div>

      {/* Layout Components  */}
      <div className='section'>
        <div className="component-container">

          <ControlledModal
            showModal={showModal}
            onRequestClose={() => setShowModal(false)}
          >
            <h3>Modal Body Text</h3>
          </ControlledModal>

          <ButtonEvent
            handleClick={() => setShowModal(!showModal)}
          >
            Show Modal
          </ButtonEvent>

        </div>

        <div className="component-container">
          <ControlledForm
            handleSubmit={setFormInput}
          >
            {formInput && <p>User Input Name: <strong>{formInput.inputName}</strong></p>}
            {formInput && <p>User Input Number: <strong>{formInput.inputNumber}</strong></p>}
          </ControlledForm>
        </div>

        <ItemForm<UserType>
        item={users[0]}
        >
          <h3>Item Form</h3>
        </ItemForm>


      </div>

      {/* Layout Components  */}
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

      {/* Basic types  */}
      <div className='section'>
        <h2>Basic Types</h2>
        <ComponentWithChildren>

          <BasicProps
            stringLiteral='Works!'
            optionWithDefault="Option inputed in App" />
        </ComponentWithChildren>

        <div className="section">
          <h4>Button Event</h4>

          <ButtonEvent
            handleClick={(event, id) => console.log(id, event)}>
            <p>Log Button ID and Event</p>
          </ButtonEvent>
        </div>

        <ChangeEvent
          value="Enter text to log change event"
          handleChange={(event) => console.log(event.target)}
        />


        <SimpleForm></SimpleForm>

        <CssStyleProps
          styles={
            {
              border: "2px dashed teal",
              padding: "1rem",
              backgroundColor: "salmon"
            }
          }
        />


        <HigherOrderComponent<UserType>
          component={LargeListItem}
          // item={products[0]}
          item={users[0]}
        />

        <Generics<UserType>
          items={users} //pass in users
          // items={products} //pass in products
          handleClick={(item) => console.log(item)}
        />

        <GenericsHOCList<UserType>
          itemComponent={LargeListItem}
          items={users}
          // handleClick={(event, id)=>LogClickEvent}
          handleClick={LogClickEvent}
        >
          <h3>GenericsHOCList with Users</h3>
        </GenericsHOCList>

        <GenericsHOCList<ProductType>
          itemComponent={LargeListItem}
          items={products}
          handleClick={LogClickEventTargetText}
        >
          <h3>GenericsHOCList with Products</h3>
        </GenericsHOCList>

        <TemplateLiteralsAndExclude
          position="center-bottom"
        />

        <WrappingHTMLElement
          variant="secondary"
          onClick={() => console.log("ReactComponent Button Clicked")}>
          Component Props Button
        </WrappingHTMLElement>

        <RestrictingProps
          value={10} isNeg
        />

        <ExtractingProps
          stringLiteral='Works!'
          optionWithDefault="Option inputed in App" />

        <PolymorphicComponents
          as="h1"
          size="lg"
          variant="primary">
          Heading
        </PolymorphicComponents>

        <PolymorphicComponents
          as="label"
          htmlFor='someId'
          size="lg"
          variant="primary">
          Label
        </PolymorphicComponents>


      </div>

      <ScratchTests />
    </>
  )
}

export default App
