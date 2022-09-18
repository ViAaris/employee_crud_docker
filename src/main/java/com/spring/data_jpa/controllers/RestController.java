package com.spring.data_jpa.controllers;



<<<<<<< HEAD:src/main/java/com/spring/data_jpa/controllers/RestController.java
import com.spring.data_jpa.dao.EmployeeRepository;
import com.spring.data_jpa.entity.Employee;
import com.spring.data_jpa.service.EmployeeService;
=======
import com.zaur.spring.data_jpa.dao.EmployeeRepository;
import com.zaur.spring.data_jpa.entity.Employee;
import com.zaur.spring.data_jpa.service.EmployeeService;
>>>>>>> cee6b41 (add react):src/main/java/com/zaur/spring/data_jpa/controllers/RestController.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api")
public class RestController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public  List<Employee> showAllEmployees(){
        List<Employee> employees = employeeService.getAllEmployees();
        return employees;
    }

    @GetMapping("/employees/name/{name}")
    public  List<Employee> showAllEmployeesByName(@PathVariable String name){
        List<Employee> employees = employeeService.findAllByName(name);
        return employees;
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable("id") int id){
        Employee employee = employeeService.getEmployee(id);

        return employee;
    }
    @PostMapping("/employees")
    public ResponseEntity addNewEmployee(@RequestBody Employee employee) throws URISyntaxException {

        Employee savedEmployee = employeeService.save(employee);
        return ResponseEntity.created(new URI("/api/employees/" + savedEmployee.getId())).body(savedEmployee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity updateEmployee(@PathVariable int id, @RequestBody Employee employee){
       //Employee updated =  employeeService.update(employee, id);
        employeeService.save(employee);
        return ResponseEntity.ok(employeeService.getEmployee(id));
    }
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable("id") int id){
        Employee employee = employeeService.getEmployee(id);

        employeeService.deleteEmployee(id);
        return "Employee with id " + id + " was deleted";
    }


}
