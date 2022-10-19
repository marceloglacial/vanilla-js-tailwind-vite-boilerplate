import './style.css';
import styles from './mainStyles';
import { content, header } from './components';

document.querySelector('#app').innerHTML = `
  <div class='${styles.main}'>
    ${header}
    ${content}
  </div>
`;
