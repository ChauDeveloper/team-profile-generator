const inquirer = require('inquirer');
const fs = require('fs');
const generateManager = require('./src/html-template');
const generateEngineer = require('./src/html-template');
const generateIntern = require('./src/html-template');

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managername',
            message: "Please enter the Manager's name",
            validate: managername => {
                if (managername) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerid',
            message: "Please enter the Manager's ID",
            validate: managerid => {
                if (managerid) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'manageremail',
            message: "Please enter the Manager's email",
            validate: manageremail => {
                if (manageremail) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerofficenumber',
            message: "Please enter the Manager's Office Number",
            validate: managerofficenumber => {
                if (managerofficenumber) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        },
    ])
        .then((manager) => {
            writetoFile(generateManager({ ...manager }))
            addMember();
        })

}
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineername',
            message: "Please enter the Engineer's name",
            validate: engineername => {
                if (engineername) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerid',
            message: "Please enter the Engineer's ID",
            validate: engineerid => {
                if (engineerid) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: "Please enter the Engineer's email",
            validate: engineeremail => {
                if (engineeremail) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineergithub',
            message: "Please enter the Engineer's Github",
            validate: engineergithub => {
                if (engineergithub) {
                    return true;
                } else {
                    console.log('Please enter a Github');
                    return false;
                }
            }
        },
    ])
        .then((engineer) => {
            writetoFile(generateEngineer({ ...engineer }))
            addMember();
        })
}
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internname',
            message: "Please enter the Intern's name",
            validate: internname => {
                if (internname) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internid',
            message: "Please enter the Intern's ID",
            validate: internid => {
                if (internid) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internemail',
            message: "Please enter the Intern's email",
            validate: internemail => {
                if (internemail) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internschool',
            message: "Please enter the Intern's school",
            validate: internschool => {
                if (internschool) {
                    return true;
                } else {
                    console.log('Please enter an input');
                    return false;
                }
            }
        },
    ])
        .then((intern) => {
            writetoFile(generateIntern({ ...intern }))
            addMember();
        })
}
function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "Which member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "Quit"
            ]
        },
    ])
        .then((result) => {
            switch (result.choice) {
                case "Engineer":
                    addEngineer();
                   
                    break;
                case "Intern":
                    addIntern();
                  
                    break;
                case "Quit":
                     confirmQuit();
            }
        })
}
function confirmQuit() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: "Are you sure that you'd like to quit?",
            choices: [
                "Yes",
                "No"
            ]
        },
    ])
        .then((result) => {
            switch (result.choice) {
                case "Yes":
                    console.log("Congratulation! You've generated a beautiful page for your team at dist/generateHTML.html")
                    break;
                case "No":
                    addMember();
            }
        })
}


const writetoFile = data => {
    return new Promise ((resolve, reject) => {
        fs.writeFile ('./dist/generatedHTML.html', data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve ({
                ok:true,
                message: "Your team's page is generated!"
            })
        })
    })
}

addManager()
