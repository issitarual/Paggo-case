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
- [ ] Fix jwt validation when create image bug
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
4. Create your ``.env`` file on the root of the back-end folder following ``.env.example`` instructions
5. Create a database using the ``docker`` and ``.env`` file constants
```bash
docker run -d -p DB_PORT:5432 --name DB_NAME -e POSTGRES_USER=DB_USER -e POSTGRES_DB=DB_NAME -e POSTGRES_PASSWORD=DB_PASSWORD postgres
```
7. Run your project
```bash
npm i
npm run start:dev
```
