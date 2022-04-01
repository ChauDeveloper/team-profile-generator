const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

  
  test('get role from this employee', () => {
    const manager = new Manager('Test', 3, 'test@test.com', '6464252646');
  
    expect(manager.getRole()).toBe('Manager');
  });