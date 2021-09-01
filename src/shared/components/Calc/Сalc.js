import React, { useState } from 'react';
import '../../../styles/calc.scss';
import { Row } from 'react-bootstrap';
import ButtonAnimation from '../../../client/components/ButtonAnimation/ButtonAnimation';

const initialState = {
  gender: null,
  age: null,
  height: null,
  weight: null,
  activity: null,
  goal: null,
  kkal: null,

  foodValue: '',
};
const activityCoefficient = [1.2, 1.375, 1.55, 1.725, 1.9];

const Calc = () => {
  const [state, setState] = useState(initialState);

  const genderChecked = (value) => {
    setState({ ...state, gender: +value });
  };
  const enterChars = (e, field) => {
    setState({ ...state, [field]: +e.target.value });
  };
  const handleChangeActivity = ({ target: { value } }) => {
    setState({ ...state, activity: activityCoefficient[value] });
  };

  const setGoal = (value) => {
    setState({ ...state, goal: value });
  };

  const getResult = () => {
    const newResult = Math.round(
      (10 * state.weight +
        6.25 * state.height -
        5 * state.age +
        state.gender -
        state.goal) *
        state.activity
    );

    setState({ ...state, kkal: newResult });
    console.log(state);
  };

  return (
    <>
      <div className={'calc__main__container'}>
        <h3 className="calculator-header text-center">
          Скільки білків мені потрібно на добу?
        </h3>
        <div className={'calc__inputs__container__1'}>
          <label className="bold calc__header__inputs">Стать</label>
          <div className="calc__header__inputs__radio">
            <div className="calc__input__container">
              <label className="pointer d-flex align-items-center flex-column calc__input__container__inner">
                <input
                  type="radio"
                  name="gender"
                  defaultChecked
                  className="calc__input__radio"
                  onClick={() => genderChecked(5)}
                />
                Чоловіча
              </label>
            </div>
            <div className="calc__input__container">
              <label className="pointer Calculator__radio d-flex align-items-center flex-column calc__input__container__inner">
                <input
                  type="radio"
                  name="gender"
                  className="calc__input__radio"
                  onClick={() => genderChecked(-161)}
                />
                Жіноча
              </label>
            </div>
          </div>
        </div>
        <div className={'calc__inputs__container__2'}>
          <div className="calc__inputs__age__weight__container">
            <div className="calc-input-block d-inline-flex">
              <label className="Calculator__label bold">
                <div className={'calc__label__text'}>Вік</div>
                <input
                  type="number"
                  min="5"
                  className="calculator-input d-block"
                  value={state.age}
                  onChange={(e) => enterChars(e, 'age')}
                />
              </label>
            </div>
            <div className="calc-input-block d-inline-flex">
              <label className="Calculator__label bold">
                <div className={'calc__label__text'}>Зріст (см)</div>

                <input
                  type="number"
                  min="50"
                  max="220"
                  className="calculator-input d-block"
                  value={state.height}
                  onChange={(e) => enterChars(e, 'height')}
                />
              </label>
            </div>
            <div className="calc-input-block d-inline-flex">
              <label className="Calculator__label bold">
                <div className={'calc__label__text'}>Вага (кг)</div>

                <input
                  type="number"
                  max="200"
                  value={state.weight}
                  className="calculator-input d-block"
                  onChange={(e) => enterChars(e, 'weight')}
                />
              </label>
            </div>
          </div>
        </div>
        <div className={'calc__inputs__container__3'}>
          <div className="d-flex align-items-center flex-column">
            <label className="bold">Спосіб життя</label>
            <select
              className="pointer select-border calculator-input-select"
              onChange={(e) => handleChangeActivity(e)}
            >
              <option className="rad123" value="0">
                Розумова дiяльнiсть
              </option>
              <option className="rad123" value="1">
                Легке фiзичне навантаження
              </option>
              <option className="rad123" value="2">
                Значне фiзичне навантаження
              </option>
              <option className="rad123" value="3">
                Важка фiзична праця
              </option>
              <option className="rad123" value="4">
                Особливо важка фізична праця
              </option>
            </select>
          </div>
        </div>
        <div className={'calc__inputs__container__4'}>
          <div className="d-flex align-items-center flex-column mt-3">
            <label className="Calculator__label bold Calculator__label_height ">
              Мета
            </label>
            <div className="d-flex flex-row align-items-center">
              <div className="d-flex wrapper flex-column justify-content-center goal-item-block">
                <label className="pointer d-flex align-items-center flex-column">
                  <input
                    type="radio"
                    name="goal"
                    value="1"
                    id="calc-goal-lose_weight"
                    onChange={() => setGoal(500)}
                  />
                  Скинути вагу
                </label>
              </div>
              <div className="d-flex wrapper flex-column justify-content-center goal-item-block">
                <label className="pointer d-flex align-items-center flex-column">
                  <input
                    type="radio"
                    name="goal"
                    value="2"
                    id="calc-goal-maintaining_weight"
                    onChange={() => setGoal(250)}
                  />
                  Підтримувати вагу
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={'calc__inputs__container__result'}>
          <div className="calculator-body calculator-body-bottom ">
            <div className="flex">
              <span
                className="closing-button btn-test calc__result__btn"
                onClick={getResult}
              >
                <span className="text-pseudo-button">
                  <img
                    height="30px"
                    width="30px"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDkyLjMzNCA5Mi4zMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxyZWN0IHdpZHRoPSI5Mi4zMzQiIGhlaWdodD0iOTIuMzM0IiByeD0iMjAiIHJ5PSIyMCIgZmlsbD0iIzlkYjNjMyIgc2hhcGU9InJvdW5kZWQiIHRyYW5zZm9ybT0ibWF0cml4KDAsMCwwLDAsNDYuMTY2OTk5ODE2ODk0NTMsNDYuMTY2OTk5ODE2ODk0NTMpIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsMTMuODUwMDk5OTQ1MDY4MzUsMTMuODUwMTAwOTY0MzA3OCkiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTAsNDIuODg3aDQyLjEwM1YwLjc4NEgwVjQyLjg4N3ogTTguMzQ0LDE4LjEzN2g5LjAwOVY5LjEyOGg3LjM5NnY5LjAwOWg5LjAwOXY3LjM5N2gtOS4wMDl2OS4wMDloLTcuMzk2di05LjAwOUg4LjM0NCAgICBWMTguMTM3eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik01MC4yMywwLjc4NHY0Mi4xMDNoNDIuMTA0VjAuNzg0SDUwLjIzeiBNODIuOTIxLDI1LjAyOEg1OS42NDV2LTYuNzc0aDIzLjI3NlYyNS4wMjh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjIzLDkxLjU1aDQyLjEwNFY0OS40NDZINTAuMjNWOTEuNTV6IE03MS4yODMsODQuMzEzYy0xLjk2OSwwLTMuNTY1LTEuNTk3LTMuNTY1LTMuNTY1ICAgIGMwLTEuOTcsMS41OTctMy41NjUsMy41NjUtMy41NjVjMS45NjgsMCwzLjU2NCwxLjU5OCwzLjU2NCwzLjU2NVM3My4yNTEsODQuMzEzLDcxLjI4Myw4NC4zMTN6IE03MS4yODMsNTcuMjE4ICAgIGMxLjk2OSwwLDMuNTY0LDEuNTk2LDMuNTY0LDMuNTY1YzAsMS45NjktMS41OTYsMy41NjUtMy41NjQsMy41NjVzLTMuNTY1LTEuNTk3LTMuNTY1LTMuNTY1ICAgIEM2Ny43MTcsNTguODEzLDY5LjMxNCw1Ny4yMTgsNzEuMjgzLDU3LjIxOHogTTU5LjY0NSw2Ny4xMWgyMy4yNzZ2Ni43NzRINTkuNjQ1VjY3LjExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDkxLjU1aDQyLjEwM1Y0OS40NDZIMFY5MS41NXogTTkuMDksNjMuOTMxbDUuMzkzLTUuMzk0bDYuNTY4LDYuNTY5bDYuNTY4LTYuNTY5bDUuMzkzLDUuMzk0bC02LjU2OCw2LjU2OGw2LjU2OCw2LjU2OCAgICBsLTUuMzkzLDUuMzkzbC02LjU2OC02LjU2OGwtNi41NjgsNi41NjhMOS4wOSw3Ny4wNjdsNi41NjgtNi41NjhMOS4wOSw2My45MzF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
                  />
                  РОЗРАХУВАТИ
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <div
          className="flex button__container__test"
          style={{ marginTop: '20px' }}
        >
          <button
            style={{ border: 'none' }}
            className={'closing-button btn-test calc__result__btn'}
            onClick={getResult}
          >
            <span className="text-pseudo-button">
              <img
                height="30px"
                width="30px"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDkyLjMzNCA5Mi4zMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxyZWN0IHdpZHRoPSI5Mi4zMzQiIGhlaWdodD0iOTIuMzM0IiByeD0iMjAiIHJ5PSIyMCIgZmlsbD0iIzlkYjNjMyIgc2hhcGU9InJvdW5kZWQiIHRyYW5zZm9ybT0ibWF0cml4KDAsMCwwLDAsNDYuMTY2OTk5ODE2ODk0NTMsNDYuMTY2OTk5ODE2ODk0NTMpIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsMTMuODUwMDk5OTQ1MDY4MzUsMTMuODUwMTAwOTY0MzA3OCkiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTAsNDIuODg3aDQyLjEwM1YwLjc4NEgwVjQyLjg4N3ogTTguMzQ0LDE4LjEzN2g5LjAwOVY5LjEyOGg3LjM5NnY5LjAwOWg5LjAwOXY3LjM5N2gtOS4wMDl2OS4wMDloLTcuMzk2di05LjAwOUg4LjM0NCAgICBWMTguMTM3eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik01MC4yMywwLjc4NHY0Mi4xMDNoNDIuMTA0VjAuNzg0SDUwLjIzeiBNODIuOTIxLDI1LjAyOEg1OS42NDV2LTYuNzc0aDIzLjI3NlYyNS4wMjh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjIzLDkxLjU1aDQyLjEwNFY0OS40NDZINTAuMjNWOTEuNTV6IE03MS4yODMsODQuMzEzYy0xLjk2OSwwLTMuNTY1LTEuNTk3LTMuNTY1LTMuNTY1ICAgIGMwLTEuOTcsMS41OTctMy41NjUsMy41NjUtMy41NjVjMS45NjgsMCwzLjU2NCwxLjU5OCwzLjU2NCwzLjU2NVM3My4yNTEsODQuMzEzLDcxLjI4Myw4NC4zMTN6IE03MS4yODMsNTcuMjE4ICAgIGMxLjk2OSwwLDMuNTY0LDEuNTk2LDMuNTY0LDMuNTY1YzAsMS45NjktMS41OTYsMy41NjUtMy41NjQsMy41NjVzLTMuNTY1LTEuNTk3LTMuNTY1LTMuNTY1ICAgIEM2Ny43MTcsNTguODEzLDY5LjMxNCw1Ny4yMTgsNzEuMjgzLDU3LjIxOHogTTU5LjY0NSw2Ny4xMWgyMy4yNzZ2Ni43NzRINTkuNjQ1VjY3LjExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDkxLjU1aDQyLjEwM1Y0OS40NDZIMFY5MS41NXogTTkuMDksNjMuOTMxbDUuMzkzLTUuMzk0bDYuNTY4LDYuNTY5bDYuNTY4LTYuNTY5bDUuMzkzLDUuMzk0bC02LjU2OCw2LjU2OGw2LjU2OCw2LjU2OCAgICBsLTUuMzkzLDUuMzkzbC02LjU2OC02LjU2OGwtNi41NjgsNi41NjhMOS4wOSw3Ny4wNjdsNi41NjgtNi41NjhMOS4wOSw2My45MzF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              />
              РОЗРАХУВАТИ
            </span>
          </button>
        </div> */}
        {/* <ButtonAnimation
          text={'РОЗРАХУВАТИ'}
          urlImg={
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDkyLjMzNCA5Mi4zMzQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxyZWN0IHdpZHRoPSI5Mi4zMzQiIGhlaWdodD0iOTIuMzM0IiByeD0iMjAiIHJ5PSIyMCIgZmlsbD0iIzlkYjNjMyIgc2hhcGU9InJvdW5kZWQiIHRyYW5zZm9ybT0ibWF0cml4KDAsMCwwLDAsNDYuMTY2OTk5ODE2ODk0NTMsNDYuMTY2OTk5ODE2ODk0NTMpIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsMTMuODUwMDk5OTQ1MDY4MzUsMTMuODUwMTAwOTY0MzA3OCkiPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTAsNDIuODg3aDQyLjEwM1YwLjc4NEgwVjQyLjg4N3ogTTguMzQ0LDE4LjEzN2g5LjAwOVY5LjEyOGg3LjM5NnY5LjAwOWg5LjAwOXY3LjM5N2gtOS4wMDl2OS4wMDloLTcuMzk2di05LjAwOUg4LjM0NCAgICBWMTguMTM3eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik01MC4yMywwLjc4NHY0Mi4xMDNoNDIuMTA0VjAuNzg0SDUwLjIzeiBNODIuOTIxLDI1LjAyOEg1OS42NDV2LTYuNzc0aDIzLjI3NlYyNS4wMjh6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+CgkJPHBhdGggZD0iTTUwLjIzLDkxLjU1aDQyLjEwNFY0OS40NDZINTAuMjNWOTEuNTV6IE03MS4yODMsODQuMzEzYy0xLjk2OSwwLTMuNTY1LTEuNTk3LTMuNTY1LTMuNTY1ICAgIGMwLTEuOTcsMS41OTctMy41NjUsMy41NjUtMy41NjVjMS45NjgsMCwzLjU2NCwxLjU5OCwzLjU2NCwzLjU2NVM3My4yNTEsODQuMzEzLDcxLjI4Myw4NC4zMTN6IE03MS4yODMsNTcuMjE4ICAgIGMxLjk2OSwwLDMuNTY0LDEuNTk2LDMuNTY0LDMuNTY1YzAsMS45NjktMS41OTYsMy41NjUtMy41NjQsMy41NjVzLTMuNTY1LTEuNTk3LTMuNTY1LTMuNTY1ICAgIEM2Ny43MTcsNTguODEzLDY5LjMxNCw1Ny4yMTgsNzEuMjgzLDU3LjIxOHogTTU5LjY0NSw2Ny4xMWgyMy4yNzZ2Ni43NzRINTkuNjQ1VjY3LjExeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJCTxwYXRoIGQ9Ik0wLDkxLjU1aDQyLjEwM1Y0OS40NDZIMFY5MS41NXogTTkuMDksNjMuOTMxbDUuMzkzLTUuMzk0bDYuNTY4LDYuNTY5bDYuNTY4LTYuNTY5bDUuMzkzLDUuMzk0bC02LjU2OCw2LjU2OGw2LjU2OCw2LjU2OCAgICBsLTUuMzkzLDUuMzkzbC02LjU2OC02LjU2OGwtNi41NjgsNi41NjhMOS4wOSw3Ny4wNjdsNi41NjgtNi41NjhMOS4wOSw2My45MzF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=='
          } 
        />*/}
        {state.kkal !== null && (
          <div className="calc__inputs__container__result__text">
            <div className="Calculator__result">
              {state.kkal +
                ' грама білка в день = ' +
                state.kkal +
                ' грам курятини'}
              <small></small>
            </div>
          </div>
        )}
      </div>
      {/*<div className='d-flex justify-content-center w-100'>*/}
      {/*    <div className="calculator">*/}
      {/*        <div*/}
      {/*            className="calculator-body calculator-body-top justify-content-center align-items-center d-flex flex-column p-2">*/}
      {/*            <div className="calc__gender__inputs__container ">*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*        */}
      {/*    </div>*/}
      {/*</div>*/}
    </>
  );
};

export default Calc;
