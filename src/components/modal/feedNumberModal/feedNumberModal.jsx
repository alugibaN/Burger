import React, { useEffect, useMemo, useState } from "react";
import sty from "./feedNumberModal.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function FeedNumberModal() {
  const { data } = useSelector((state) => state.card);
  const { messages } = useSelector((state) => state.ws);
  const { number } = useParams();

  const [count, setCount] = useState(1);

  const item =
    messages.orders && messages.orders.find((ingr) => ingr._id === number);
  const ingredients =
    item &&
    data.filter(
      (ingredient) =>
        item.ingredients && item.ingredients.includes(ingredient._id)
    );
  const price = item && ingredients.reduce((ac, el) => ac + el.price, 0);
  return (
    <>
      {ingredients && item ? (
        <section className={`${sty.section}`}>
          <h1
            className={`${sty.title} text text_type_digits-default  mt-4`}
          >{`#${item.number}`}</h1>
          <h2
            className={`${sty.subtitle} text text_type_main-medium mt-4 mb-3`}
          >
            {item.name}
          </h2>
          <span className={`${sty.span} text text_type_main-small`}>
            {item.status === "done" ? "Выполнен" : "Готовится"}
          </span>
          <h3 className={`${sty.comprosition} text text_type_main-medium mt-5`}>
            Состав:
          </h3>
          <ul className={`${sty.feel} custom-scroll`}>
            {ingredients.map((el) => {
              return (
                <li key={el._id} className={`${sty.feel__item}`}>
                  <div className={`${sty.feel__wrapp}`}>
                    <img
                      className={`${sty.feel__img}`}
                      src={el.image_mobile}
                      alt={el.name}
                    />
                    <div className={sty.feel__circle} />
                  </div>
                  <h3
                    className={`${sty.feel__subtitle} text text_type_main-default mr-4`}
                  >
                    {el.name}
                  </h3>
                  <p
                    className={`${sty.feel__price}text text_type_digits-default mr-3`}
                  >
                    {`${count} x ${el.price}`} <CurrencyIcon type="primary" />
                  </p>
                </li>
              );
            })}
          </ul>
          <div className={`${sty.container} mb-4`}>
            <FormattedDate
              date={
                new Date(
                  item.status === "done" ? item.updatedAt : item.createdAt
                )
              }
              className={`${sty.span__data} text text_type_main-default text_color_inactive`}
            />
            <span className={`${sty.price} text text_type_main-medium mr-3`}>
              {price} <CurrencyIcon type="primary" />
            </span>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default FeedNumberModal;
