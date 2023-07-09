## Notes CRUD Operations API

| API Router | API Endpoint | HTTPS Method | Payload Fields | Description| Authentication Token |
| :----:| :----: | :----: | :----: | :----: | :----: |
| root | `/` | GET | - | Root path | ❌ |
| User Route | `/users/signup` | POST | `username, email, password` | To Signup new user | ❌ | 
| User Route | `/users/signin` | POST | `email, password` | To Login existing user | ❌ | 
| Note Route | `/note` | GET | - | To get all notes respective to user | ✅ | 
| Note Route | `/note` | POST | `title, description` | To add and save new note | ✅ | 
| Note Route | `/note:noteId` | PUT | `title, description` | To update existing note | ✅ | 
| Note Route | `/note:noteId` | DELETE | - | To delete existing note | ✅ | 
