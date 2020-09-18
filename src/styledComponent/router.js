import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link,
         useParams, NavLink } from 'react-router-dom';
import {Redirect} from "react-router";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import Reset from "./Reset/Reset";
import './router.css';

export default function App() {
  return (
    <Router basename={"/hw18_react_stylization/"}>
      <div>
        <nav className="navigator">
          <span>
            <NavLink className="nav_button" to={"/signup"}>Sign Up</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/signin"}>Sign In</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/reset"}>Reset</NavLink>
          </span>
        </nav>

        <Switch>
          <Route exact path={"/"}>
            <Redirect to={"/signup"} />
          </Route>
          <Route exact path={"/signup"}>
            <Signup />
          </Route>
          <Route exact path={"/signin"}>
            <Signin />
          </Route>
          <Route exact path={"/reset"}>
            <Reset />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// -------------------------------------------------------------------------------------------------------------
/*
Завдання Basic:
  Вам необхідно створити та привести до робочого стану просту форму входу та реєстрації у додатку.
  Зверніть увагу, що всі інпути повинні зберігатись у state.
  Шрифт використовується Roboto (Є на Google Fonts), Посилання на іконку для логотипу у формах
  Переключення між формами реалізувати за допомогою react-router.

Завдання Advanced:
  Зробіть перевірку на валідацію даних при реєстрації.
  По замовчуванню поля сірі
  При наборі даних у полі(подія onChange) – інпут змінює колір бордера. Якщо не відповідає критерію –
  бордер червоний, якщо підходить – бордер зелений.
  Всі перевірки потрібно робити через регулярні вирази

  Email – повинен містити: мінімум 3 символи, собачку, мінімум 2 символи, крапку та мінімум 2 символи
  Пароль – мінімум 8 символів, містить велику і маленьку літеру (лат.)
  Ім'я та прізвище від 3ох символів.

  запам'ятовувати після реєстрації дані для входу в localStorage та перевіряти при вході відповідність даних.
  Галочка Remember me – запам'ятовує дані та при наступному вході вони автоматично підтягуються в поле
*/