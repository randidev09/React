# React

This is Randi's personal project, created using Laravel (Backend) & React JS (Frontend) with Docker Environment.

## Installation

When first time cloning the project, you need to install the project first, after that you can run it everytime you want without install it first.

* Build the backend, go to `/backend` directory and run this command :

```console
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php80-composer:latest \
    composer install --ignore-platform-reqs
```

* Build the frontend, go to root directory which is `/task`, and run this command :

```console
make build_frontend
```

## Usage

go to root directory which is `/task`, and run this command :
```console
make setup
```

this command will run the project, its may take some times.<br>
The frontend app will be run it on :
```http://localhost:3001/```<br>
and the backend app will be run it on :
```http://localhost/```

* After the containers is running, please do the migration, go to `/backend` directory and run this command :

```console
make migrate
```

## API Documentation

You can import API documentation with this link :
```console
https://www.getpostman.com/collections/6bce7bf221a0dae8dc15
```
