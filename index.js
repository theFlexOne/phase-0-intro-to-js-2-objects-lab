const employee = {
  name: undefined,
  streetAddress: undefined
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const clone = {...employee};
  clone[key] = value;
  return clone;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const clone = {...employee};
  clone[key] = undefined;
  return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee[key] = undefined;
  return employee;
}