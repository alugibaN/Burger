import sty from "./BurgerIngredients.module.css";
import React, { useEffect, useRef } from "react";
import MenuItem from "../MenuItems/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/API/action";
import { ACTIV_MENU } from "../../services/ActivMenu/action";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const { data, dataSuccess } = useSelector((state) => state.card);
  const { activ } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const parentRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const parentElement = parentRef.current;
    const bunElement = bunRef.current;
    const sauceElement = sauceRef.current;
    const mainElement = mainRef.current;

    const handleScroll = () => {
      const parentTop = parentElement?.getBoundingClientRect()?.top;
      const bunTop = bunElement?.getBoundingClientRect()?.top;
      const sauceTop = sauceElement?.getBoundingClientRect()?.top;
      const mainTop = mainElement?.getBoundingClientRect()?.top;

      if (parentTop - bunTop > 0) {
        dispatch({
          type: ACTIV_MENU,
          activ: "bun",
        });
      }
      if (parentTop - sauceTop > -100) {
        dispatch({
          type: ACTIV_MENU,
          activ: "sauce",
        });
      }
      if (parentTop - mainTop > -10) {
        dispatch({
          type: ACTIV_MENU,
          activ: "main",
        });
      }
    };
    if (parentElement) {
      parentElement.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (parentElement) {
        parentElement.removeEventListener("scroll", handleScroll);
      }
    };
  });

  return (
    <section className={`pt-5 ${sty.constructor} mr-5`}>
      <h2 className="mt-5 mb-5 text text_type_main-large">Соберите бургер</h2>
      <div className={`mb-5 mt-5`}>
        <button
          className={`${
            sty.button
          } text text_type_main-default text_color_inactive ${
            activ === "bun" ? sty.activ : null
          }`}
        >
          Булки
        </button>
        <button
          className={`${
            sty.button
          } text text_type_main-default text_color_inactive ${
            activ === "sauce" ? sty.activ : null
          }`}
        >
          Соусы
        </button>
        <button
          className={`${
            sty.button
          } text text_type_main-default text_color_inactive ${
            activ === "main" ? sty.activ : null
          }`}
        >
          Начинка
        </button>
      </div>
      {!dataSuccess ? (
        <p>'Загрузка'</p>
      ) : (
        <div className={`${sty.cards} custom-scroll`} ref={parentRef}>
          <h3 className={` text text_type_main-medium mb-3`} ref={bunRef}>
            Булки
          </h3>
          <ul className={`${sty.menu} pl-4 pr-4`}>
            {data.map((item) => (
              <MenuItem key={`${item._id}`} item={item} type={"bun"} />
            ))}
          </ul>
          <h3
            className={`${sty.teg} text text_type_main-medium mb-3`}
            ref={sauceRef}
          >
            Соусы
          </h3>
          <ul className={`${sty.menu} pl-4 pr-4`}>
            {data.map((item) => (
              <MenuItem key={`${item._id}`} item={item} type={"sauce"} />
            ))}
          </ul>
          <h3 className={`text text_type_main-medium mb-3`} ref={mainRef}>
            Начинка
          </h3>
          <ul className={`${sty.menu} pl-4 pr-4`}>
            {data.map((item) => (
              <MenuItem key={`${item._id}`} item={item} type={"main"} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}


export default BurgerIngredients;

{
  /* <ul className={`${sty.menu} pl-4 pr-4`}>

{types.map(type => {
const itemsOfType = data.filter(item => item.type === type);
if (itemsOfType.length > 0) {
return (
	 <>
			<h3 className={` text text_type_main-medium mb-3`}>
				 {type === 'bun' ? 'Булки' : type === 'sauce' ? 'Соусы' : 'Начинка'}
			</h3>
			{itemsOfType.map(item => (

				<MenuItem item={item}/>
			))}
	 </>
);
}
})}
			 </ul> */
}
