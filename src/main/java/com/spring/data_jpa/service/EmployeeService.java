package com.spring.data_jpa.service;




import com.spring.data_jpa.entity.Employee;

import java.util.List;

public interface EmployeeService {

    public List<Employee> getAllEmployees();
    public Employee save(Employee employee);
    public Employee update(Employee employee, int id);
    public Employee getEmployee(int id);
    public void deleteEmployee(int id);
    public List<Employee> findAllByName(String name);
}
