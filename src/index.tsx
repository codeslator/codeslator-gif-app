import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { CodeslatorGifApp } from './CodesGifsApp';
import 'animate.css';
import './styles/styles.scss'

ReactDOM.render(
  <CodeslatorGifApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
