import './style.css';

const styles = {
  main: `p-8`,
  title: `text-4xl font-bold mb-4`,
};
document.querySelector('#app').innerHTML = `
  <div class='${styles.main}'>
    <h1 class='${styles.title}'>Vite + Tailwind + Vanilla Js Boiletrplate</h1>
    <p>Quis Lorem minim quis Lorem aliquip in incididunt do fugiat ipsum ex ea elit. Ad excepteur ea quis magna non qui et et amet est exercitation minim eiusmod. Fugiat velit in adipisicing ipsum ad duis consequat nostrud ut dolore. Aliquip aliqua dolore esse Lorem cillum irure Lorem mollit dolore esse fugiat. Aliquip velit dolor irure fugiat anim dolor nostrud. In esse id nostrud proident incididunt. Consequat Lorem enim deserunt exercitation eiusmod et dolore cillum Lorem esse cillum nulla tempor minim.</p>
  </div>
`;
