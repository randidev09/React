# pull the official base image  
FROM node:13.12.0-alpine  
 
# set your working directory  
WORKDIR /app  
 
# add `/app/node_modules/.bin` to $PATH  
ENV PATH /app/node_modules/.bin:$PATH  
 
# install application dependencies  
COPY package.json ./  
COPY package-lock.json ./  
RUN npm install --silent  
RUN npm install react-scripts@3.4.1 -g  
RUN npm install react-router-dom
RUN npm install react-bootstrap bootstrap@4.6.0
RUN npm install axios
RUN npm install react-burger-menu@^2.9.2 --save
RUN npm install --save react-chartjs-2 chart.js
RUN npm install react-datepicker --save
RUN npm install react-hot-toast
RUN npm install react-data-table-component
RUN npm install styled-components

# add app  
COPY . ./  
 
# will start app  
CMD ["npm", "start"] 