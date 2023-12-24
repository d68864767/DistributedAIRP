# Distributed AI Research Platform (DAIRP) API Documentation

This document provides a detailed description of the API endpoints for the Distributed AI Research Platform (DAIRP).

## Base URL

All URLs referenced in the documentation have the following base:

```
http://localhost:3000/api
```

## Dataset Endpoints

### GET /datasets

Fetches all datasets.

**Example Request:**

```
GET /datasets
```

**Example Response:**

```json
[
    {
        "_id": "60d2f3f4c3295d2f4c2a1b3c",
        "name": "Dataset 1",
        "description": "This is a sample dataset",
        "createdAt": "2021-06-23T10:15:16.123Z",
        "updatedAt": "2021-06-23T10:15:16.123Z"
    },
    {
        "_id": "60d2f3f4c3295d2f4c2a1b3d",
        "name": "Dataset 2",
        "description": "This is another sample dataset",
        "createdAt": "2021-06-23T10:15:16.123Z",
        "updatedAt": "2021-06-23T10:15:16.123Z"
    }
]
```

### GET /datasets/:id

Fetches a specific dataset by ID.

**Example Request:**

```
GET /datasets/60d2f3f4c3295d2f4c2a1b3c
```

**Example Response:**

```json
{
    "_id": "60d2f3f4c3295d2f4c2a1b3c",
    "name": "Dataset 1",
    "description": "This is a sample dataset",
    "createdAt": "2021-06-23T10:15:16.123Z",
    "updatedAt": "2021-06-23T10:15:16.123Z"
}
```

### POST /datasets

Creates a new dataset.

**Example Request:**

```
POST /datasets
Content-Type: application/json

{
    "name": "New Dataset",
    "description": "This is a new dataset"
}
```

**Example Response:**

```json
{
    "_id": "60d2f3f4c3295d2f4c2a1b3e",
    "name": "New Dataset",
    "description": "This is a new dataset",
    "createdAt": "2021-06-23T10:15:16.123Z",
    "updatedAt": "2021-06-23T10:15:16.123Z"
}
```

## Project Endpoints

### GET /projects

Fetches all projects.

**Example Request:**

```
GET /projects
```

**Example Response:**

```json
[
    {
        "_id": "60d2f3f4c3295d2f4c2a1b3f",
        "name": "Project 1",
        "description": "This is a sample project",
        "createdAt": "2021-06-23T10:15:16.123Z",
        "updatedAt": "2021-06-23T10:15:16.123Z"
    },
    {
        "_id": "60d2f3f4c3295d2f4c2a1b40",
        "name": "Project 2",
        "description": "This is another sample project",
        "createdAt": "2021-06-23T10:15:16.123Z",
        "updatedAt": "2021-06-23T10:15:16.123Z"
    }
]
```

### GET /projects/:id

Fetches a specific project by ID.

**Example Request:**

```
GET /projects/60d2f3f4c3295d2f4c2a1b3f
```

**Example Response:**

```json
{
    "_id": "60d2f3f4c3295d2f4c2a1b3f",
    "name": "Project 1",
    "description": "This is a sample project",
    "createdAt": "2021-06-23T10:15:16.123Z",
    "updatedAt": "2021-06-23T10:15:16.123Z"
}
```

### POST /projects

Creates a new project.

**Example Request:**

```
POST /projects
Content-Type: application/json

{
    "name": "New Project",
    "description": "This is a new project"
}
```

**Example Response:**

```json
{
    "_id": "60d2f3f4c3295d2f4c2a1b41",
    "name": "New Project",
    "description": "This is a new project",
    "createdAt": "2021-06-23T10:15:16.123Z",
    "updatedAt": "2021-06-23T10:15:16.123Z"
}
```
