# Kasky framework for node.js

[![CircleCI](https://circleci.com/gh/danprocoder/kasky.svg?style=svg)](https://circleci.com/gh/danprocoder/kasky) [![codecov](https://codecov.io/gh/danprocoder/kasky/branch/master/graph/badge.svg)](https://codecov.io/gh/danprocoder/kasky)

## Installation
Using npm:
```bash
npm install -g kasky
```

Using yarn:
```bash
yarn add -g kasky
```


## Create a new Project
```bash
kasky init your_project_name
```

The above command will create a new folder named `your_project_name` in the current working directory with some files and folders created inside it. Below is what the folder structure of the new created `your_project_name` folder will look like:

```text
|__your_project_name
|  |__src
|  |  |__middlewares
|  |  |__controllers
|  |  |__app.js
|  |__jsconfig.json
|  |__.gitignore
|  |__package.json
|  |__app.config.json
```

## Create a controller
The follow command will create a new controller class file.

```bash
kasky make:controller --name=ControllerClassName
```

An example controller class.
```javascript
import { Controller } from 'kasky';

@Controller()
class MyFirstController {}

export default MyFirstController;
```

After creating a controller class, ensure to add your controller class to `app.js` class
in your `./src` folder as shown below.

```javascript
import MyFirstController from './controllers/MyFirstController'

export default {
  controllers: [
    MyFirstController
  ]
};
```


## Define Routes
```javascript
import { Controller, Route } from 'kasky';

@Controller()
class MyFirstController {
  
  @Route.Post('/api/blog')
  createBlog(req, res) {
    res.created('Route to create blog');
  }
  
  @Route.Get('/api/blog')
  getAllBlogs(req, res) {
    res.success('Route to get all blogs');
  }
}

export default MyFirstController;
```

#### The Request Object
The request object contains the following properties.

##### header(key)
Returns the value for a HTTP request header sent with key `key`.

##### query(key)
The value for a url query with key `key`.

##### param(key)
Returns the value for a url param with key `key`.

##### body(key)
Returns the value for a request body parameter with key `key`.

#### The Response Object
The response object contains the following method.

##### header(key, value)
Sets the HTTP header. Returns the response object.

##### send(statusCode, data = null, contentType = null)
Sends a response to the client

The following are helper methods in the response object.

##### success(data = null, contentType = null)
Sends a response with status code `200`.

##### created(data = null, contentType = null)
Sends a response with status code `201`.

##### notFound(data = null, contentType = null)
Sends a response with status code `404`.

##### badRequest(data = null, contentType = null)
Sends a response with status code `400`.

##### unauthorized(data = null, contentType = null)
Sends a response with status code `401`.

##### forbidden(data = null, contentType = null)
Sends a response with status code `403`.

##### internalServerError(data = null, contentType = null)
Sends a response with status code `500`.

## Running your application

#### Development
To run your app in development mode. Use
```bash
npm run dev
```

#### Production
To run your app in production mode, Ensure to build the app first using:

```bash
npm build
```

Then start the production server using:

```bash
npm start
```
