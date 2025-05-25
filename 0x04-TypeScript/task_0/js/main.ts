interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const Student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York"
};

const Student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "San Francisco"
};

const studentsList: Student[] = [Student1, Student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

const header1 = document.createElement("th");
header1.textContent = "Student1";

const header2 = document.createElement("th");
header2.textContent = "Student2";

headerRow.appendChild(header1);
headerRow.appendChild(header2);

table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    row.appendChild(cell1);
    row.appendChild(cell2);
    table.appendChild(row);
});

document.body.appendChild(table);

