package com.spring.data_jpa.service;


import com.spring.data_jpa.dao.EmployeeRepository;
import com.spring.data_jpa.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee save(Employee employee) {
      Employee savedEmployee =  employeeRepository.save(employee);
      return savedEmployee;
    }

    @Override
    public Employee update(Employee employee, int id) {
        Employee currentEmployee = employeeRepository.findById(id).orElseThrow(RuntimeException::new);
        currentEmployee.setName(employee.getName());
        currentEmployee.setSurname(employee.getSurname());
        currentEmployee.setDepartment(employee.getDepartment());
        currentEmployee.setSalary(employee.getSalary());
        return currentEmployee;
    }

    @Override
    public Employee getEmployee(int id) {
        Employee employee = null;
        Optional<Employee> optional = employeeRepository.findById(id);
        if(optional.isPresent()) employee = optional.get();
        return employee;
    }

    @Override
    public void deleteEmployee(int id) {
        employeeRepository.deleteById(id);
    }
    public List<Employee> findAllByName(String name){
        return employeeRepository.findAllByName(name);
    }

}
