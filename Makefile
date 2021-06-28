start:
	make start_frontend && make start_backend 

start_backend:
	cd backend && make start

start_frontend:
	cd frontend && make start