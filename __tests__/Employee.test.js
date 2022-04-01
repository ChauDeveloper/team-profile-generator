const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("get employee's name", () => {
    const employee = new Employee('Test', 3, 'test@test.com')

    expect(employee.getName()).toBe('Test');
})

test("get employee's id", () => {
    const employee = new Employee('Test', 3, 'test@test.com')

    expect(employee.getId()).toEqual(expect.any(Number));

})

test("get employee's email", () => {
    const employee = new Employee('Test', 3, 'test@test.com')

    expect(employee.getEmail()).toEqual(expect.any(String));
})



