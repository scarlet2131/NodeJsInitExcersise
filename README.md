# Task Manager API

## Overview
This is a simple task management API using Node.js and Express with in-memory storage.

## Endpoints

### Get All Tasks
- **URL**: `/tasks`
- **Method**: GET
- **Response**: 200 OK with an array of tasks.

### Add a New Task
- **URL**: `/tasks`
- **Method**: POST
- **Body**: `{ "title": "Task Title", "description": "Task Description" }`
- **Response**: 201 Created with the created task.

### Update a Task
- **URL**: `/tasks/:id`
- **Method**: PUT
- **Body**: `{ "title": "Updated Title", "completed": true }`
- **Response**: 200 OK with the updated task.

### Delete a Task
- **URL**: `/tasks/:id`
- **Method**: DELETE
- **Response**: 200 OK with confirmation of deletion.

## Error Responses
- **400 Bad Request**: Missing required fields in the request.
- **404 Not Found**: Task not found for the given ID.

## Testing
Use Postman or curl to test the API.
