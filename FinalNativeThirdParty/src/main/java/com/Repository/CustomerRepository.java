package com.Repository;

import com.model.Customer;

import java.util.List;

public interface CustomerRepository {
    Customer findById(int id);
    List<Customer> findInvoice(Long id);
//List<Customer> findInvoice(Long Customer);

//    void makeOrder(Prabayar prabayar);
//    String findTransaction(int id);
//    void deleteOrder(int id);
}
