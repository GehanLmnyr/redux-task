import './main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/popper.js/dist/popper.js'
import {render} from  'react-dom'
import App from './App';

render(<div><App/></div> , document.querySelector('#root'))


