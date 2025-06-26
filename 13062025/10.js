const student = {
    Babken: 80,
    Hamazasp: 90,
    Ruzvelt: 44,
    Zidanik: 88
};

const entries = Object.entries(student);

const passed = entries.filter(([name, score]) => score >= 50);

const passedStudents = Object.fromEntries(passed);

console.log(passedStudents);