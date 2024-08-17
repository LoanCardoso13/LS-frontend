/*

  We're putting together some information about our new company Space Design. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows undefined. Why is that?

  // Roles (salary still to be determined)

  const ceo = {
    tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
    salary: 0,
  };

  const developer = {
    tasks: ['turn product vision into code'],
    salary: 0,
  };

  const scrumMaster = {
    tasks: ['organize scrum process', 'manage scrum teams'],
    salary: 0,
  };

  // Team -- we're hiring!

  const team = {};

  team[ceo] = 'Kim';
  team[scrumMaster] = 'Alice';
  team[developer] = undefined;

  const company = {
    name: 'Space Design',
    team,
    projectedRevenue: 500000,
  };

  console.log(`----{ ${company.name} }----`);
  console.log(`CEO: ${company.team[ceo]}`);
  console.log(`Scrum master: ${company.team[scrumMaster]}`);
  console.log(`Projected revenue: $${company.projectedRevenue}`);

  // ----{ Space Design }----
  // CEO: undefined
  // Scrum master: undefined
  // Projected revenue: $500000

  Solution:

  What is being defined as a key to the names of 'Kim' and 'Alice' - ceo and scrumMaster respectively - are the objects with their tasks and salaries as keys. So the only way to retrieve their names, in the log calls, would be to write, as keys, the whole object declared to constant variables at the beginning of the program. This is not feasible or desirable, so a better solution would be to find other names for the constants being assigned to the objects at the beginning of the program.

*/

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};
                                                                                
const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};
                                                                                
const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};
                                                                                
// Team -- we're hiring!
                                                                                
const team = {};
                                                                                
team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;
                                                                                
const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};
                                                                                
console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team['ceo']}`);
console.log(`Scrum master: ${company.team['scrumMaster']}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);
                                                                                
// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000
