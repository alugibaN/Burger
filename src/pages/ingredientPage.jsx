import { useLocation, useNavigate, useParams } from 'react-router-dom'
import IngredientsDetails from '../components/modal/IngredientDetails/IngredientDetails'
import Modal from '../components/modal/ModalOverlay/Modal'
import HomePages from './home'
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import AppHeader from '../components/AppHeader/AppHeader'



function IngredientPage () {
  const {data} = useSelector((state)=> state.card)
  const {id} = useParams()
  const navigate = useNavigate()
  const location = useLocation();
  const currentPath = location.pathname;
console.log(location)

      let item = data.find((ingr) =>`:${ingr._id}` === id) 

const closeModal = useCallback(()=>{
  navigate('/')
})

  return(
    <>
    <AppHeader/>
    <Modal  closeModal={closeModal}>
          <IngredientsDetails/>
        </Modal>
    </>
  )
}

export default IngredientPage