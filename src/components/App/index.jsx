import { useDispatch, useSelector } from "react-redux";
import { addAction, decrementAction, incrementAction, resetAction } from "../../store/reducer/countReducer";
import Words from "../Words";

function App() {
  // создаем функцию dispatch для запуска reducer
  const dispatch = useDispatch();

  // получаем значение нашего state
  const value = useSelector(state => state.counter);

  // callback для обработки событий
  // они вызывают dispatch с определенным action
  const increment = () => dispatch(incrementAction());
  const decrement = () => dispatch(decrementAction());
  const reset = () => dispatch(resetAction());

  const submit = event => {
    event.preventDefault();
    const {value} = event.target;
    dispatch(addAction(+value.value));
    value.value = '';
  }

  return (
    <div>
      <p>{value}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>0</button>
      </div>
      <form onSubmit={submit}>
        <input type="text" name="value"/>
        <button>Добавить</button>
      </form>
      <Words />
    </div>
  );
}

// создать обработчик для формы так, чтобы при ее отправке значение из поля ввода выводилось в 
// консоль

export default App;
