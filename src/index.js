const fillClassNames = (htmlElement, className) => {
  const classNames = className.split(' ');
  for (const item of classNames) {
    htmlElement.classList.add(item);
  }
};

const useTailwindClassName = (element, className) => {
  const htmlElements = document.querySelectorAll(element);
  for (const item of htmlElements) {
    fillClassNames(item, className);
  }
};

useTailwindClassName(
  '.header',
  'p-8 border-b-4 border-red-600 flex items-center'
);
useTailwindClassName(
  '.header__title',
  'text-4xl text-red-600 font-bold lowercase'
);
useTailwindClassName('.header__image', 'w-20 h-20 object-cover');
useTailwindClassName('.button', 'p-4 w-full rounded-md text-white');
useTailwindClassName('.button--red', 'bg-red-600');
useTailwindClassName('.button--disabled', 'bg-gray-400');
useTailwindClassName('.content', 'p-8 flex flex-col gap-8');
useTailwindClassName('.form', 'flex flex-col gap-8');
useTailwindClassName('.input', 'border-2 p-2 rounded-md');
