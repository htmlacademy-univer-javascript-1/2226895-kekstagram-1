import { uploadFileFunc, formSubmit } from './workWithForm.js';
import {createPosts} from './data.js';

createPosts();
// eslint-disable-next-line no-console
console.log(
  createPosts()
);
uploadFileFunc();
formSubmit();

