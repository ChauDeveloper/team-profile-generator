const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('get Github from engineer', () => {
    const engineer = new Engineer('Test', 3, 'test@test.com', 'githubrepo');
  
    expect(engineer.getGithub()).toBe("githubrepo");
  });

  
  test('get role engineer', () => {
    const engineer = new Engineer('Test', 3, 'test@test.com', 'githubrepo');
  
    expect(engineer.getRole()).toBe("Engineer");
  });