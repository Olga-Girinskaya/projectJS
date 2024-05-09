'use strict'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    "showAgeAndLangs": function(plan) {
        let lang ='';
        const{age} = plan;
        const{languages} = plan.skills;
    
        for (let i in languages){
          lang += ` ${languages[i].toUpperCase()}`
        }
        return `Мне ${age} и я владею языками:${lang}`;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    let str ='';
    const{programmingLangs} = plan.skills;

    for (let i in programmingLangs){
      str += `Язык ${i} изучен на ${programmingLangs[i]}\n`
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));
