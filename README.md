Create a user:
curl -X POST -H "Content-Type: application/json" --data '{"name": "John Doe", "email": "john@example.com"}' http://localhost:3000/users
Retrieve a user (replace 1 with the actual user ID):
curl http://localhost:3000/users/1
