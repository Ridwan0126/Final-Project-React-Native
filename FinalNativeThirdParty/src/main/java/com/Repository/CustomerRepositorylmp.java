package com.Repository;

import com.model.Customer;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Repository;

import java.io.Reader;
import java.util.List;

@Repository
public class CustomerRepositorylmp implements CustomerRepository {
    public static Reader reader;
    public static SqlSessionFactory sqlSessionFactory;
    public static SqlSession sqlSession;
    Customer customer = new Customer();

    @Override
    public Customer findById(int id) {
        return null;
    }

    @Override
    public List<Customer> findInvoice(Long id) {

        List<Customer> listCustomer = null;

        try {
            connectMybatis();
            listCustomer = sqlSession.selectList("Customer.getInvoice", id);

            sqlSession.commit();
            sqlSession.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return listCustomer;
    }

    public void connectMybatis() {
        try {
            reader = Resources.getResourceAsReader("SqlMapConfig.xml");
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
            sqlSession = sqlSessionFactory.openSession();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
