# Demo

You can consult my personnal portfolio website in this link: https://yamirat.com/

# Personnal portfolio website

This is my personal portfolio website, developped in Nuxt and deployed on AWS EC2. 
It showcases my skills, projects and experience as a Web Developer. 

### Security and Environment 

For security resasons, the file server/api/contact.ts, which handles sending message from contact form, is not included in this respository. It has been adeed to .gitignore to prevent the exposure of sensitive data. 

- The backend code is deployed on AWS and is not accessible or editable by users
- All credentials are securely stored in AWS Secrets Manager


### Docker

To run container for my full-stack portfolio app developped in Nuxt, you should first [install Docker](https://docs.docker.com/get-docker/). 

Once Docker is installed, you can run the container by using this following command at the root of the projet: 

```
docker-compose up --build
```

### Node JS, NPM

My personnal portolio website is developped with Nuxt and runs with Node.js. [Install Node.js](https://nodejs.org/en/) on your environment.

Once Node.js is installed, install npm dependencies

```
npm install
```

To run this project with npm, you should run this following command: 


```
npm run dev
```

### Compiles and minifies for production

To build project for production, you have to use the following command: 

```
npm run build
```

After that, you can run the project for production with this command: 

```
node .output/server/index.mjs
```
