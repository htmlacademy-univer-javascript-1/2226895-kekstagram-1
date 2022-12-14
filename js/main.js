import {renderMin} from './rendering.js';
import './effects.js';
import './workWithForm.js';
import './scale.js';
import {getData} from './api.js';
import {addFormAction} from './workWithForm.js';


getData((pictures) => {
  renderMin(pictures);
});

addFormAction();
