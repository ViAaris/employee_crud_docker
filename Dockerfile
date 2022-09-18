FROM openjdk:11 as build
# указываем точку монтирования для внешних данных внутри контейнера (как мы помним, это Линукс)
VOLUME /tmp
EXPOSE 8082
ARG JAR_FILE=target/spring.data_jpa-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} spring.data_jpa-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/spring.data_jpa-0.0.1-SNAPSHOT.jar"]
