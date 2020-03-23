# gsoc_postman

## Steps to check JWT Basic Implementation
1. Run the server by doing : node index.js in the project directory
2. Navigate to localhost:3000
3. Next, Navigate to localhost:3000/api. This will show a JWT error message telling that a token is not provided
   OR will show a token expired message along with the timestamp
4. To generate a new token, navigate to localhost:3000/token. Copy the token.
5. Now navigate to localhost:3000/api?token={ADD THE COPIED TOKEN HERE, without the curly braces}
6. Now you will see the intended response which is the organization name and the proposal
