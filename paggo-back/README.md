# Paggo Case
### About 🔎
This is an API project that receives an image and returns it text.
### Database Schema
![paggo-case](https://github.com/issitarual/Paggo-case/assets/81389078/fe092483-f1bc-400a-9381-4fb250dd73ed)
### Implemented features ✅
- [x] Create user
- [x] Get users
- [x] Get user by id
- [x] Update user
- [x] Delete user
- [x] Create token
- [x] Create Image
- [x] Get User Image list
### Future improvements 🔮
- [ ] Fix GAuth bug
- [ ] Add validations
- [ ] Add tests
### Technologies
The following tools and frameworks were used in the construction of the project:

![Python](https://img.shields.io/badge/javascript-3670A0?style=for-the-badge&logo=javascript&logoColor=ffdd54)
![FastAPI](https://img.shields.io/badge/NestJS-005571?style=for-the-badge&logo=nestjs)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## How to run
1. Clone this repository
2. Clone the [front-end repository](https://github.com/issitarual/verzel-challenge-front)
3. Follow instructions to run [front-end]([https://github.com/issitarual/verzel-challenge-front](https://github.com/issitarual/Paggo-case/tree/main/paggo-front))
4. Create your ``.env`` file on the root of the back-end folder following ``.env.example`` instructions.
5. Create a database using the ``docker`` and ``.env`` file constants
```bash
docker run -d -p DB_PORT:5432 --name DB_NAME -e POSTGRES_USER=DB_USER -e POSTGRES_DB=DB_NAME -e POSTGRES_PASSWORD=DB_PASSWORD postgres
```
6. Run your project
```bash
npm i
npm run start:dev
```

<details>
<summary>GAuth Config</summary>
  
1. Go To [Google Cloud Console](https://console.cloud.google.com/welcome)
  
2. Add new project
  
![image](https://github.com/issitarual/Paggo-case/assets/81389078/3e28f3b8-bf75-4400-9b7b-39e571c29e8f)

3. Create new project

![image](https://github.com/issitarual/Paggo-case/assets/81389078/08e63115-d427-4acf-95c8-6b503f9a2ffc)

4. Go to API & Services page -> OAuth Consent Screen, choose external option and click on create button

![image](https://github.com/issitarual/Paggo-case/assets/81389078/6985d5a1-da32-41ba-a6f1-0e4eb469854e)

5. Fill App information fields and Developer contact information field, then click on save and create button

![image](https://github.com/issitarual/Paggo-case/assets/81389078/af288427-f7dc-4ddc-9de8-1eceddfe8028)

6. Go to  API & Services page -> Credentials

![image](https://github.com/issitarual/Paggo-case/assets/81389078/291997f8-d06a-438f-928f-fae419634741)

7. Click on Create Credentials -> OAuth Client Id

![image](https://github.com/issitarual/Paggo-case/assets/81389078/cfee3d9b-23bb-4640-a2a8-a97884da7c9c)

8. Add Web aplication in Aplication type field

 ![image](https://github.com/issitarual/Paggo-case/assets/81389078/34796bcb-60d8-4506-bc17-8cc1fc913bff)

9. Add Origins and Authorized URI, then click on create button.

![image](https://github.com/issitarual/Paggo-case/assets/81389078/90fb8024-fb69-4871-933f-d000498ceae1)

10. Get your credentials and fill ``.env`` file with them
![Sem título](https://github.com/issitarual/Paggo-case/assets/81389078/378cca2b-ddd9-485e-8945-cec2e0396a0c)

References:
- https://medium.com/@flavtech/google-oauth2-authentication-with-nestjs-explained-ab585c53edec
- https://dev.to/imichaelowolabi/how-to-implement-login-with-google-in-nest-js-2aoa
</details>
