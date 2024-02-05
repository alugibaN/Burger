import React, { useCallback, useEffect } from "react";
import Modal from "../../components/modal/ModalOverlay/Modal";
import FeedNumberModal from "../../components/modal/feedNumberModal/feedNumberModal";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/API/action";
import { useNavigate, useParams } from "react-router-dom";
import { WS_CONNECTION_START_AUTH } from "../../services/webSocket/action";

const ProfileOrdersPage = () => {
  const { number } = useParams();
  const {messages} = useSelector(state => state.ws)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START_AUTH,
    });
  }, []);


  return (
    <>
      <FeedNumberModal />
    </>
    )
};

export default ProfileOrdersPage;
