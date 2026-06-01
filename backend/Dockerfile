# Use Java 17 (important)
FROM eclipse-temurin:17-jdk

LABEL authors="Saurabh singh"
ARG JAR_FILE=target/*.jar

# Copy jar file from target folder
COPY ./target/backend-0.0.1-SNAPSHOT.jar app.jar

# Run Spring Boot app
ENTRYPOINT ["java", "-jar", "/app.jar"]

