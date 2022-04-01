
function generatedHTML (data) {
    // employeeCards = [];
    // for (let i = 0; i < data.length; i++) {
    //     const employee = data[i];
        
    //     if (employee === "data"){
    //         const dataCard = (employee) => {
    //             return `
    //             <div id="employee-card" class="position-relative">
    //                 <div class="card m-5 text-center position-absolute top-50 start-50" style="width: 18rem;">
    //                     <div class="card-body">
    //                       <h5 class="card-title">${employee.name}</h5>
    //                       <h6 class="card-subtitle mb-2 text-muted">data</h6>
    //                       <ul class="list-group list-group-flush">
    //                         <li class="list-group-item">${employee.id}</li>
    //                         <li class="list-group-item"><a href = "mailto:${employee.email}">${employee.emaill}</a></li>
    //                         <li class="list-group-item">${employee.officeNumber}</li>
    //                       </ul>
    //                     </div>
    //                   </div>
    //             </div>
    //             `
    //         };
    //         employeeCards.push(dataCard);
    //     }
        // if (role === "Engineer"){
        //     const EngineerCard = (employee) => {
        //         return `
        //             <div id="employee-card" class="position-relative">
        //             <div class="card m-5 text-center position-absolute top-50 start-50" style="width: 18rem;">
        //                 <div class="card-body">
        //                 <h5 class="card-title">${employee.name}</h5>
        //                 <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        //                 <ul class="list-group list-group-flush">
        //                     <li class="list-group-item">${employee.id}</li>
        //                     <li class="list-group-item"><a href = "mailto:${employee.email}">${employee.email}</a></li>
        //                     <li class="list-group-item"><a href="https://github.com/${employee.github}">${employee.github}</a></li>
        //                 </ul>
        //                 </div>
        //             </div>
        //         </div>
        //             `
        //     };
        //     employeeCards.push(EngineerCard);
        // }
        // if (role === "Intern"){
        //     const InternCard = (employee) => {
        //         return `
        //         <div id="employee-card" class="position-relative">
        //         <div class="card m-5 text-center position-absolute top-50 start-50" style="width: 18rem;">
        //             <div class="card-body">
        //               <h5 class="card-title">${employee.name}</h5>
        //               <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        //               <ul class="list-group list-group-flush">
        //                 <li class="list-group-item">${employee.id}</li>
        //                 <li class="list-group-item"><a href = "mailto: ${employee.email}">${employee.email}</a></li>
        //                 <li class="list-group-item">SCHOOL</li>
        //                 <li class="list-group-item">${employee.school}</li>
        //               </ul>
        //             </div>
        //           </div>
        //     </div>
        //         `
        //     };
        //     employeeCards.push(InternCard);
        // }
    // }
    //  a = employeeCards.join ('')


// const employeecard = []


//     const  datacard = (data) => {
//       return `
   
//                           <h5 class="card-title">${data[0].name}</h5>
                          
// `}

// employeecard.push(datacard ())



const engineer = (data)=> {
    return `
    <div id="employee-card" class="position-relative col">
                     <div class="card m-5 text-center" style="width: 18rem;">
                         <div class="card-body">
                           <h5 class="card-title">${data[1].name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                         <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data[1].id}</li>
                           <li class="list-group-item"><a href = "mailto:${data[1].email}">${data[1].email}</a></li>
                           <li class="list-group-item">${data[1].officeNumber}</li>
                          </ul>
                       </div>
                      </div>
              </div>
    `
}

const intern = (data)=> {
    return `
    <div id="employee-card" class="position-relative col">
                     <div class="card m-5 text-center" style="width: 18rem;">
                         <div class="card-body">
                           <h5 class="card-title">${data[2].name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                         <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data[2].id}</li>
                           <li class="list-group-item"><a href = "mailto:${data[2].email}">${data[2].email}</a></li>
                           <li class="list-group-item">${data[2].officeNumber}</li>
                          </ul>
                       </div>
                      </div>
              </div>
    `
}


const engineercard = engineer(data)
const interncard = intern(data)

const CardsArr = []

CardsArr.push(engineercard) 
CardsArr.push(interncard)

for (let i = 0; i < 100; i++) {

if(data[i].getRole() === "Manager"){
    const manager = (data)=> {
        return `
        <div id="employee-card" class="position-relative col">
                         <div class="card m-5 text-center" style="width: 18rem;">
                             <div class="card-body">
                               <h5 class="card-title">${data[i].name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                             <ul class="list-group list-group-flush">
                                <li class="list-group-item">${data[i].id}</li>
                               <li class="list-group-item"><a href = "mailto:${data[i].email}">${data[i].email}</a></li>
                               <li class="list-group-item">${data[i].officeNumber}</li>
                              </ul>
                           </div>
                          </div>
                  </div>
        `
    }
    const managercard = manager(data)
    CardsArr.push(managercard)
}

if(data[i].getRole() === "Engineer"){
    const engineer = (data)=> {
        return `
        <div id="employee-card" class="position-relative col">
                         <div class="card m-5 text-center" style="width: 18rem;">
                             <div class="card-body">
                               <h5 class="card-title">${data[i].name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                             <ul class="list-group list-group-flush">
                                <li class="list-group-item">${data[i].id}</li>
                               <li class="list-group-item"><a href = "mailto:${data[i].email}">${data[i].email}</a></li>
                               <li class="list-group-item">${data[i].github}</li>
                              </ul>
                           </div>
                          </div>
                  </div>
        `
    }
    const engineercard = engineer(data)
    CardsArr.push(engineercard)
}

if(data[i].getRole() === "Intern"){
    const intern = (data)=> {
        return `
        <div id="employee-card" class="position-relative col">
                         <div class="card m-5 text-center" style="width: 18rem;">
                             <div class="card-body">
                               <h5 class="card-title">${data[i].name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                             <ul class="list-group list-group-flush">
                                <li class="list-group-item">${data[i].id}</li>
                               <li class="list-group-item"><a href = "mailto:${data[i].email}">${data[i].email}</a></li>
                               <li class="list-group-item">${data[i].school}</li>
                              </ul>
                           </div>
                          </div>
                  </div>
        `
    }
    const interncard = intern(data)
    CardsArr.push(interncard)
}
}


// console.log (data[0].getRole())



const combinedCards = CardsArr.join('')



    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Team Generator</title>
</head>
<body>
    <header>
        <h1 class="text-center bg-warning bg-gradient text-white p-4">MY TEAM</h1>
    </header>
    <main>
    <div class="row">
    ${combinedCards}
    </div>
    </main>
<footer>
    <nav class="navbar fixed-bottom navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://github.com/ChauDeveloper">Created by: ChauDeveloper</a>
        </div>
      </nav>
    <h5></h5>
</footer>
</body>
</html>
    `
}

module.exports = generatedHTML;