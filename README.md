## Notes CRUD Operations API

| API Route | API Endpoint | HTTPS Method | Payload Fields | Description| Authentication Token |
| :----:| :----: | :----: | :----: | :----: | :----: |
| root | `/` | GET | - | Root path | ❌ |
| User | `/users/signup` | POST | `username, email, password` | To Signup new user | ❌ | 
| User | `/users/signin` | POST | `email, password` | To Login existing user | ❌ | 
| Note | `/note` | GET | - | To get all notes respective to user | ✅ | 
| Note | `/note` | POST | `title, description` | To add and save new note | ✅ | 
| Note | `/note:noteId` | PUT | `title, description` | To update existing note | ✅ | 
| Note | `/note:noteId` | DELETE | - | To delete existing note | ✅ | 
