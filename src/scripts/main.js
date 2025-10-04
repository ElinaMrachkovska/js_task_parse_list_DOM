'use strict';

// function sortList(list) {
//     const data = document.querySelector('data-salary')
//     const newList = [...list].map((data) =>
//     data.dataset.selery.replace('$', '').replace(',', ''),
// );
// let counter = 0;

// for (let i = 0; i < newList.length; i++) {
//     if (Number(newList[i + 1]) <= Number(newList[i])) {
//         counter++
//     }
// }
//   function getEmployees(list) {
//     return newList;
//   }
// }

// getEmployees(newList);
// sortList(newList);

//

'use strict';

const parseSalary = (salaryStr) => {
  return Number(salaryStr.replace('$', '').replace(',', ''));
};

function sortList(list) {
  if (!list || !list.children.length) {
    return;
  }

  const listItems = Array.from(list.children);

  listItems.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  listItems.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  if (!list || !list.children.length) {
    return [];
  }

  const currentListItems = Array.from(list.children);

  const employers = currentListItems.map((item) => {
    const nameN = item.dataset.name;
    const salary = parseSalary(item.dataset.salary);

    return {
      name: nameN,
      salary: salary,
    };
  });

  return employers;
}

const employeeList = document.querySelector('ul');

if (employeeList) {
  sortList(employeeList);
  getEmployees(employeeList);
}
