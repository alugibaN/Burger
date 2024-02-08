import React, { useEffect, useState } from "react";
import sty from "./feedOrder.module.css";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function FeedOrder({ item, url }) {
  const location = useLocation();
  const { data } = useSelector((state) => state.card);

  const ingredients = data.filter((ingredient) =>
    item.ingredients.includes(ingredient._id)
  );
  const price = ingredients.reduce((ac, el) => ac + el.price, 0);

  return (
    <Link
      to={`${url}/${item._id}`}
      state={{ background: location }}
      className={`${sty.link} text text_type_digits-default`}
    >
      <li className={`${sty.order} pr-6 pb-6 pt-6 pl-6 mt-2`}>
        <div className={`${sty.order__info} mb-6`}>
          <p className={`${sty.order__number} text text_type_digits-default`}>
            {`#${item.number}`}
          </p>
          <div className={sty.order_time}>
            <FormattedDate
              date={new Date(item.createdAt)}
              className={`${sty.order__span} text text_type_main-small text_color_inactive`}
            />
          </div>
        </div>
        <h3 className={`${sty.order__title} text text_type_main-medium mb-6`}>
          {item.name}
        </h3>
        <div className={sty.order__container}>
          <div className={sty.order__container_img}>
            {ingredients.slice(0, 5).map((el, index) => (
              <img
                key={index}
                className={sty.order__imgi}
                src={el.image}
                alt={`ingredient-${index}`}
                // style={{ zIndex: ingredients.length - index }}
              />
            ))}
            {ingredients.length > 5 && (
              <span className={sty.order__count}>
                +{ingredients.length - 5}
              </span>
            )}
          </div>
          <p className={`${sty.order__price} text text_type_digits-default`}>
            {price} <CurrencyIcon type="primary" />
          </p>
        </div>
      </li>
    </Link>
  );
}

export default FeedOrder;

FeedOrder.propTypes = {
  url: PropTypes.string,
  item: PropTypes.object.isRequired,
};
//rafce
