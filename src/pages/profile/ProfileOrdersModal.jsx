import React, { useCallback } from 'react'
import Modal from '../../components/modal/ModalOverlay/Modal'
import FeedNumberModal from '../../components/modal/feedNumberModal/feedNumberModal'
import { useNavigate } from 'react-router-dom'

const ProfileOrdersModal = () => {

  const navigate = useNavigate()
  const closeModal = useCallback(() => {
    navigate("/profile/orders");
  });

  return (
    <Modal closeModal={closeModal}>
      <FeedNumberModal/>
    </Modal>
  )
}

export default ProfileOrdersModal
