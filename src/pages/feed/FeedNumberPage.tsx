import React, {useEffect } from "react";
// import sty from './feedNumber.module.css'
import FeedNumberModal from "../../components/modal/feedNumberModal/feedNumberModal";
import { useDispatch } from '../../utils/hooks';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/webSocket/action";

const FeedNumberPage:React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED,
      });
    };
  }, [dispatch]);

  return (
    <>
      <FeedNumberModal />
    </>
  );
};

export default FeedNumberPage;


