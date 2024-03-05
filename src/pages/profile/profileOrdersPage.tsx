import React, { useEffect } from "react";
import FeedNumberModal from "../../components/modal/feedNumberModal/feedNumberModal";
import { useDispatch } from "../../utils/hooks/useDispatch";
import { useParams } from "react-router-dom";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  getOrder,
} from "../../services/webSocket/action";
import { getCookie } from "../../utils/cookie";

const ProfileOrdersPage:React.FC = () => {
  const { number } = useParams();
  const dispatch = useDispatch();
  const authToken = getCookie("token");


  useEffect(() => {
    dispatch(getOrder(number));
  }, []);

  return (
    <>
      <FeedNumberModal />
    </>
  );
};

export default ProfileOrdersPage;
