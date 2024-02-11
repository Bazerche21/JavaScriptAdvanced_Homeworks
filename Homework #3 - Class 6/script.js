
fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then(response => response.json())
    .then(data => {
        const studentsAboveThree = data.filter(student => student.averageGrade > 3);
        console.log("Students with average grade higher than 3:", studentsAboveThree);

        const femaleStudentsWithGradeFive = data.filter(student => student.gender === 'Female' && student.averageGrade === 5).map(student => student.firstName);
        console.log("Female students with average grade of 5:", femaleStudentsWithGradeFive);

        const maleStudentsInSkopjeOver18 = data.filter(student => student.gender === 'Male' && student.age > 18 && student.city === 'Skopje').map(student => `${student.firstName} ${student.lastName}`);
        console.log("Male students in Skopje over 18:", maleStudentsInSkopjeOver18);

        const averageGradeOfFemaleOver24 = data
            .filter(student => student.gender === 'Female' && student.age > 24)
            .map(student => student.averageGrade);

        const totalGrades = averageGradeOfFemaleOver24.reduce((total, grade) => total + grade, 0);
        const averageGrade = totalGrades / averageGradeOfFemaleOver24.length;

        console.log("Average grade of female students over the age of 24:", averageGrade);

        const maleStudentsWithNameBAndAboveTwo = data.filter(student => student.gender === 'Male' && student.firstName.startsWith('B') && student.averageGrade > 2);
        console.log("Male students with name starting with B and average grade over 2:", maleStudentsWithNameBAndAboveTwo);
    })
    .catch(error => console.error('Error fetching data:', error));
