import content from './components/Content/content';
import header from './components/Header/header';
import './style.css';
import styles from './mainStyles';

document.querySelector('#app').innerHTML = `
  <div class='${styles.main}'>
    ${header}
    ${content}
  </div>
`;
