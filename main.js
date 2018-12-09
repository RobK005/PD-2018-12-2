function createEmployee(firstName, lastName, age, sex, employed) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        employed: employed
    }
}

var employeesList = [];
employeesList.push(createEmployee('John', 'Doe', 31, 'male', true))
employeesList.push(createEmployee('Amelia', 'Clark', 22, 'female', true))
employeesList.push(createEmployee('Jack', 'Jones', 21, 'male', false))
employeesList.push(createEmployee('Olivia', 'Wilde', 31, 'female', true))

var contentDOM = ''

function renderThead() {
    var theadDOM = document.getElementById('displayEmployees')

    contentDOM = '<thead>\n\
<tr>\n\
<th scope="col">Index</th>\n\
<th scope="col">First Name</th>\n\
<th scope="col">Last Name</th>\n\
<th scope="col">Age</th>\n\
<th scope="col">Sex</th>\n\
<th scope="col">Employed</th>\n\
</tr>\n\
</thead>'

    theadDOM.innerHTML = contentDOM
}

function renderAllEmployees(employeesList) {
    var index = 0
    var employeesDOM = document.getElementById('displayEmployees')

    contentDOM += '<tbody>'

    employeesList.forEach(function (employee) {
        function employStatus() {
            if (employee.employed) {
                return '<i class="fas fa-check"></i>'
            } else {
                return '<i class="fas fa-times"></i>'
            }
        }
        index++
        contentDOM += '<tr>\n\
<th scope="row">' + index + '</th>\n\
<td>' + employee.firstName + '</td>\n\
<td>' + employee.lastName + '</td>\n\
<td>' + employee.age + '</td>\n\
<td>' + employee.sex + '</td>\n\
<td>' + employStatus() + '</td>\n\
</tr>'
    })

    contentDOM += '</tbody>'

    employeesDOM.innerHTML = contentDOM
}

function renderWomen(employeesList) {
    var index = 0
    var employeesDOM = document.getElementById('displayEmployees')

    contentDOM += '<tbody>'

    function searchWomen(employee) {
        return employee.sex == 'female'
    }

    var womenList = employeesList.filter(searchWomen)

    womenList.forEach(function (employee) {
        function employStatus() {
            if (employee.employed) {
                return '<i class="fas fa-check"></i>'
            } else {
                return '<i class="fas fa-times"></i>'
            }
        }
        index++
        contentDOM += '<tr>\n\
    <th scope="row">' + index + '</th>\n\
    <td>' + employee.firstName + '</td>\n\
    <td>' + employee.lastName + '</td>\n\
    <td>' + employee.age + '</td>\n\
    <td>' + employee.sex + '</td>\n\
    <td>' + employStatus() + '</td>\n\
    </tr>'
    })

    contentDOM += '</tbody>'
    employeesDOM.innerHTML = contentDOM
}

function renderMen(employeesList) {
    var index = 0
    var employeesDOM = document.getElementById('displayEmployees')

    contentDOM += '<tbody>'

    function searchMen(employee) {
        return employee.sex == 'male'
    }

    var menList = employeesList.filter(searchMen)

    menList.forEach(function (employee) {
        function employStatus() {
            if (employee.employed) {
                return '<i class="fas fa-check"></i>'
            } else {
                return '<i class="fas fa-times"></i>'
            }
        }
        index++
        contentDOM += '<tr>\n\
    <th scope="row">' + index + '</th>\n\
    <td>' + employee.firstName + '</td>\n\
    <td>' + employee.lastName + '</td>\n\
    <td>' + employee.age + '</td>\n\
    <td>' + employee.sex + '</td>\n\
    <td>' + employStatus() + '</td>\n\
    </tr>'
    })

    contentDOM += '</tbody>'
    employeesDOM.innerHTML = contentDOM
}

function refreshView() {
    var employeesDOM = document.getElementById('displayEmployees')
    employeesDOM.innerHTML = ''
    renderThead()
    renderAllEmployees(employeesList)
}

function removeMen() {
    var employeesDOM = document.getElementById('displayEmployees')
    employeesDOM.innerHTML = ''
    renderThead()
    renderWomen(employeesList)
}

function removeWomen() {
    var employeesDOM = document.getElementById('displayEmployees')
    employeesDOM.innerHTML = ''
    renderThead()
    renderMen(employeesList)
}

var newFirstName = document.getElementById('inputFirstName')
var newLastName = document.getElementById('inputLastName')
var newAge = document.getElementById('inputAge')
var newSex = document.getElementById('selectSex')
var newStatus = document.getElementById('employeeStatus')

function addEmployee() {
    var newFirstName = document.getElementById('inputFirstName')
    var newLastName = document.getElementById('inputLastName')
    var newAge = document.getElementById('inputAge')
    var newSex = document.getElementById('selectSex')
    var newStatus = document.getElementById('employeeStatus')

    employeesList.push(createEmployee(newFirstName.value, newLastName.value, newAge.value, newSex.value, newStatus.checked))
    refreshView()
}

renderThead()
renderAllEmployees(employeesList)