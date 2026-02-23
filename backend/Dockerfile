FROM maven:3.9.6-eclipse-temurin-17

WORKDIR /app

# Copy backend project files
COPY backend/pom.xml .
COPY backend/src ./src

# Build jar
RUN mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/OnlineJobPortal1122-0.0.1-SNAPSHOT.jar"]