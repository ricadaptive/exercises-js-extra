// Here we are going to build this structure which is a Javascript Object:
// {
//     firstName: "Antonio",
//     lastName: "Miranda",
//     skills: ["JS", "React", "Node"],
//     class: "Mar1",
//     studentLikes: 0
//     job:
//         {
//             company: "Google",
//             position: "Senior developer",
//             city: "Barcelona"
//         }
// }
//
// But by using a class so that we make sure all the elements in the array have same fields. And also de functions are declared in a single place.


// First let's create class Job, as it is part (a subclass) of Mentor's class with the 3 fields it has.
class Job {
    // In Javascript each class has a constructor which gets from 0 to N parameters to set the initial state of the Object.
    // Remember that while class is just a declaration of properties and methods, and Object is each instance of a class as we will see later.
    // So for this class we are just copying the values we get in the constructor in internal properties.
    constructor(company, position, city) {
        this.company = company;
        this.position = position;
        this.city = city;
    }
}

class Mentor {
    // Note here that clazz is an array, and job an instance of Job class.
    // Here we are also copying the values in internal except for studentLikes as this is set to 0 when the mentor is initialized.
    constructor(firstName, lastName, clazz, skills, job) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.class = clazz;
        this.skills = skills;
        this.job = job;
        this.studentLikes = 0;
    }

    // Now we can DECLARE the function addSkill in a single place and it will be accessible to all instances.
    addSkill(newSkill) {
        if (!this.skills.includes(newSkill)) {
            this.skills.push(newSkill);
        }
    }

    // This function is not part of the exercises. Just to show how that we can implement as many as we want.
    addStudentLike() {
        this.studentLikes++;
    }
}

// And now let's build the array of mentors but using the classes above.
var mentors = [
    // First instance of a Mentor which includes an instance of Job as well.
    // Remember this is an Object since it is an instance (a copy with values) of a class.
    new Mentor("Antonio", "Miranda", "Mar1", ["JS", "React", "Node"], new Job("Google", "Senior developer", "Barcelona")),
    new Mentor("Leo", "Messi", "Mar3", ["Play football"], new Job("FC Barcelona", "Player", "Barcelona")),
    new Mentor("John", "VanDamme", "Mar4", ["React", "Angular", "Python", "Node"], new Job("Facebook", "Software Manage", "Chicago")),
    new Mentor("Giorgio", "Polvara", "Mar2", ["HTML", "JS", "React"], new Job("Amazon", "Senior developer", "Barcelona"))
];


// And then the good point is that all the implementation we did keeps working!!!!!

for (let i = 0; i < mentors.length; i++) {
    if (mentors[i].job.city === "Barcelona") {
        mentors[i].class = "Jun1";
        if (!mentors[i].skills.includes("SQL")) {
            mentors[i].skills.push("SQL")
        }
    }
    console.log(`Hi, my name is ${mentors[i].firstName} ${mentors[i].lastName}. I work in Barcelona. Class is ${mentors[i].class} and skills ${mentors[i].skills}`)
}

// 1

console.log("Exercise 1 with loops")

for (let i = 0; i < mentors.length; i++) {
    if (mentors[i].job.city === "Barcelona" && mentors[i].skills.includes("React")) {
        console.log(`Hi, my name is ${mentors[i].firstName} ${mentors[i].lastName}. I work in Barcelona and i know React.`)
    }
}

console.log("Exercise 1 with arrays (filter)")
// Remember that function filter for an array will get a con dition and will keep the elements of the array which met such condition
const filteredArray = mentors.filter(mentor => mentor.skills.includes("React") && mentor.job.city === "Barcelona");
filteredArray.forEach(
    mentorInBarcelonaWithReact => console.log(`Hi, my name is ${mentorInBarcelonaWithReact.firstName} ${mentorInBarcelonaWithReact.lastName}. I work in Barcelona and i know React.`)
)

console.log("Exercise 2 with loops")

for (let i = 0; i < mentors.length; i++) {
    if (mentors[i].job.city === "Barcelona") {
        mentors[i].class = "Jun1";
        if (!mentors[i].skills.includes("SQL")) {
            mentors[i].skills.push("SQL");
        }

        console.log(`Hi, my name is ${mentors[i].firstName} ${mentors[i].lastName}. I work in Barcelona. Class is ${mentors[i].class} and skills ${mentors[i].skills}`)
    }
}

console.log("Exercise 2 with arrays (filter)")
const filteredArray2 = mentors.filter(mentor => mentor.job.city === "Barcelona");
filteredArray.forEach(
    mentorInBarcelona => {
        mentorInBarcelona.class = "Jun1";
        if (mentorInBarcelona.skills.includes("SQL")) {
            mentorInBarcelona.skills.push("SQL")
        }
    }
)

// Exercise 4. Function to add a skill to a list of mentors.
// We are using addSkill method we added to the object (exercise 3)
function addSkillToAllMentors(listOfMentors, skillToAdd) {
    for (let i = 0; i < listOfMentors.length; i++) {
        listOfMentors[i].addSkill(skillToAdd);
    }
}


function mentorWithMoreSkills(listOnMentors) {
    let mentorWithMaxSkills = null;
    let maxSkills = 0;
    for (let i = 0; i < listOnMentors.length; i++) {
        if (listOnMentors[i].skills.length >= maxSkills) {
            maxSkills = listOnMentors[i].skills.length;
            mentorWithMaxSkills = listOnMentors[i];
        }
    }
    return mentorWithMaxSkills;
}

let mentorA = mentorWithMoreSkills(mentors);
console.log(`Mentor with more skills is ${mentorA.firstName}`)

