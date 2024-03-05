import React, {useEffect } from "react";
// import sty from './feedNumber.module.css'
import FeedNumberModal from "../../components/modal/feedNumberModal/feedNumberModal";
import { useDispatch } from '../../utils/hooks/useDispatch';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/webSocket/action";

const FeedNumberPage:React.FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <FeedNumberModal />
    </>
  );
};

export default FeedNumberPage;


