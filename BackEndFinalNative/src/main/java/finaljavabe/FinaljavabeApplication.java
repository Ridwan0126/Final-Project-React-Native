package finaljavabe;

import com.sefrinaldi.finaljavabe.database.service.RestService;
import com.sefrinaldi.finaljavabe.restapi.rabbitmq.RestApiReceive;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={"com.sefrinaldi.finaljavabe"})
public class FinaljavabeApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinaljavabeApplication.class, args);
		RestApiReceive restApiReceive = new RestApiReceive();

		try {
			restApiReceive.receiveFromDatabase();
			restApiReceive.returnFromDatabase();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
