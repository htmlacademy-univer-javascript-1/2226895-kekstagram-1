import {createPosts} from './data.js';
import {renderMin} from './rendering';
import {showFullSize} from './fullSize';
import {uploadFileFunc} from './workWithForm';

createPosts();
renderMin();
showFullSize();
uploadFileFunc();
// eslint-disable-next-line no-console
console.log(
  createPosts()
);
