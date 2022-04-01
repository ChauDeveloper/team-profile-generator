const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('get school from intern', () => {
    const intern = new Intern('Test', 3, 'test@test.com', 'UCF');
  
    expect(intern.getSchool()).toBe("UCF");
  });

  
  test('get role from this intern', () => {
    const intern = new Intern('Test', 3, 'test@test.com', 'UCF');
  
    expect(intern.getRole()).toBe("Intern");
  });