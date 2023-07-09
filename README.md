## Notes CRUD Operations API

| API Endpoint | HTTPS Method | Payload Fields | Description| Authentication Token |
| :----: | :----: | :----: | :----: | :----: |
| `/` | GET | - | Root path | ❌ |
| `/users/signup` | POST | `username, email, password` | To Signup new user | ❌ | 
| `/users/signin` | POST | `email, password` | To Login existing user | ❌ | 
| `/note` | GET | - | To get all notes respective to user | ✅ | 
| `/note` | POST | `title, description` | To add and save new note | ✅ | 
| `/note:noteId` | PUT | `title, description` | To update existing note | ✅ | 
| `/note:noteId` | DELETE | - | To delete existing note | ✅ | 
