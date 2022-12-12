import { createPosts } from './data.js';
import {renderMin} from './rendering.js';
import './workWithForm.js';
import './scale.js';


const posts = createPosts();
// eslint-disable-next-line no-console
console.log(posts);
renderMin(posts);
