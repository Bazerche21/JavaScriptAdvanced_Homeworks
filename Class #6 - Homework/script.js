
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then(response => response.json())
    .then(data => {
        const studentsAboveThree = data.filter(student => student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length > 3);
        console.log("Students with average grade higher than 3:", studentsAboveThree);

        const femaleStudentsWithGradeFive = data
            .filter(student => student.gender === 'female' && student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length === 5)
            .map(student => student.name);
        console.log("Female students with average grade of 5:", femaleStudentsWithGradeFive);

        const maleStudentsInSkopjeOver18 = data
            .filter(student => student.gender === 'male' && student.age > 18 && student.address.city === 'Skopje')
            .map(student => `${student.firstName} ${student.lastName}`);
        console.log("Male students in Skopje over 18:", maleStudentsInSkopjeOver18);

        const averageGradesFemaleOver24 = data
            .filter(student => student.gender === 'female' && student.age > 24)
            .map(student => student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length);
        console.log("Average grades of female students over 24:", averageGradesFemaleOver24);

        const maleStudentsWithNameBAndAboveTwo = data
            .filter(student => student.gender === 'male' && student.firstName.startsWith('B') && student.grades.reduce((acc, grade) => acc + grade, 0) / student.grades.length > 2);
        console.log("Male students with name starting with B and average grade over 2:", maleStudentsWithNameBAndAboveTwo);
    })
    .catch(error => console.error('Error fetching data:', error));
