let employees;

fetch("./employees.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    employees = data;

    displayEmp([...employees]);
  })
  .catch((err) => {
    console.log(err);
  });

let leftDiv;
let rightDiv;

//appendChild
//textContent

function displayEmp(data) {
  leftDiv = document.querySelector(".left");
  rightDiv = document.querySelector(".right");
  data.forEach((emp, id) => {
    const divLeft = document.createElement("div");
    let Class;
    if (id % 2 == 0) {
      Class = "even";
    } else {
      Class = "odd";
    }
    divLeft.className = Class;
    divLeft.id = id;
    divLeft.addEventListener("click", (e) => {
      console.log(e.target.id);
      var node = document.querySelector(".right");
      node.querySelectorAll("*").forEach((n) => n.remove());
      displayRight(data[parseInt(e.target.id)]);
    });
    divLeft.textContent = "Name :" + emp.name + "(" + emp.empID + ")";
    leftDiv.appendChild(divLeft);
  });

  displayRight(data[0]);
}

function displayRight(employee) {
  const divRightHeading = document.createElement("div");
  divRightHeading.className = "rightHeading";
  const image = document.createElement("img");
  image.src = "./noImage.jpg";

  const divHead = document.createElement("div");
  divHead.className = "heading";
  const h2Name = document.createElement("h2");
  h2Name.textContent = employee.name;
  const divAssociate = document.createElement("div");
  divAssociate.textContent = "Associate";
  divHead.appendChild(h2Name);
  divHead.appendChild(divAssociate);

  divRightHeading.appendChild(image);
  divRightHeading.appendChild(divHead);
  const divRightBody = document.createElement("div");
  divRightBody.className = "rightBody";
  const divRightEmpId = document.createElement("div");
  divRightEmpId.textContent = "EmpID:" + employee.empId;
  const divRightDOJ = document.createElement("div");
  divRightDOJ.textContent = "DOJ :" + employee.DOJ;
  const divRightExp = document.createElement("div");
  divRightExp.textContent = "Total Exp :" + employee.experince;
  const divRightLocation = document.createElement("div");
  divRightLocation.textContent = "Work Location :" + employee.location;
  const divRightTech = document.createElement("div");
  divRightTech.textContent = "Technologies :" + employee.tech;

  divRightBody.appendChild(divRightEmpId);
  divRightBody.appendChild(divRightDOJ);
  divRightBody.appendChild(divRightExp);
  divRightBody.appendChild(divRightLocation);
  divRightBody.appendChild(divRightTech);

  rightDiv.appendChild(divRightHeading);
  rightDiv.appendChild(divRightBody);
}
