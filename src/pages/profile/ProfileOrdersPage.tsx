import React, { useEffect } from "react";
import FeedNumberModal from "../../components/modal/feedNumberModal/feedNumberModal";
import { useDispatch } from "../../utils/hooks";
import { useParams } from "react-router-dom";
import {
  getOrder,
} from "../../services/webSocket/action";

const ProfileOrdersPage:React.FC = () => {
  const { number } = useParams();
  const dispatch = useDispatch();

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
