import sty from "./BurgerIngredients.module.css";
import React, { LegacyRef, useEffect, useRef } from "react";
import MenuItem from "../MenuItems/MenuItem";
import { useSelector, useDispatch } from '../../utils/hooks';
import { ACTIV_MENU, activMenu } from "../../services/ActivMenu/action";
import { IItem } from "../../utils/utils";

const BurgerIngredients: React.FC = () => {
  const dispatch = useDispatch();
  const { data, dataSuccess } = useSelector((state) => state.card);
  const { activ } = useSelector((state) => state.menu);

  const parentRef = useRef<HTMLDivElement | null>(null);
  const bunRef = useRef<HTMLHeadingElement | null>(null);
  const sauceRef = useRef<HTMLHeadingElement | null>(null);
  const mainRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
      const parentElement = parentRef.current as HTMLElement;
    const bunElement = bunRef.current as HTMLElement;
    const sauceElement = sauceRef.current as HTMLElement;
    const mainElement = mainRef.current as HTMLElement;
    const handleScroll = ():void => {
      const parentTop = parentElement?.getBoundingClientRect()?.top;
      const bunTop = bunElement?.getBoundingClientRect()?.top;
      const sauceTop = sauceElement?.getBoundingClientRect()?.top;
      const mainTop = mainElement?.getBoundingClientRect()?.top;
      if (parentTop - bunTop > 0) {
        dispatch(activMenu('bun'));
      }
      if (parentTop - sauceTop > -100) {
        dispatch(activMenu("sauce"));
      }
      if (parentTop - mainTop > -10) {
    dispatch(activMenu("main"));
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
      <h2 className={`mt-5 mb-5 text text_type_main-large ${sty.title}`}>
        Соберите бургер
      </h2>
      <div className={`${sty.constructor_header} mb-5 mt-5`}>
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
          <h3
            className={`${sty.card__header} text text_type_main-medium mb-3`}
            ref={bunRef }
          >
            Булки
          </h3>
          <ul className={`${sty.menu} pl-4 pr-4`}>
            {data.map((item:IItem) => (
              <MenuItem key={`${item._id}`} item={item} type={"bun"} />
            ))}
          </ul>
          <h3
            className={`${sty.card__header} text text_type_main-medium mb-3`}
            ref={sauceRef}
          >
            Соусы
          </h3>
          <ul className={`${sty.menu} pl-4 pr-4`}>
            {data.map((item:IItem) => (
              <MenuItem key={`${item._id}`} item={item} type={"sauce"} />
            ))}
          </ul>
          <h3
            className={` ${sty.card__header} text text_type_main-medium mb-3`}
            ref={mainRef}
          >
            Начинка
          </h3>
          <ul className={`${sty.menu} pl-4 pr-4`}>
            {data.map((item:IItem) => (
              <MenuItem key={`${item._id}`} item={item} type={"main"} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

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
