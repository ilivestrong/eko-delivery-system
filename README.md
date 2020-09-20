# eko-delivery-system
Solution project for Amity Code Challenge - 2
  
## Steps to run  
## Install dependencies  
> Run ```npm install``` on terminal to install all the dependencies.  

## To run the app  
#### 1. First create optimized build, the below command will produce optimized code insde a /build directory 
> Run below command in the terminal:  
```npm run build```  

#### 2. After Step 1, run the app using optimized build files 

> Run below command in the terminal:  
```serve -s build```  
> NOTE: It will tell you the localhost url the app is available on. Generally it will be available on http://localhost:5000  

#### 3. To run the app, without optimization step(in dev mode) 

> Run below command in the terminal:  
```npm run start```  
> NOTE: It will tell you the localhost url the app is available on. Generally it will be available on http://localhost:3000  

## To run tests  
```npm run test```  

## App Usage  

### A. Create Routes definition  

> NOTE: Master town data file is stored in /data/towns.js
#### 1. To create route definition, i.e., cost between two towns, click on first icon  (+) on app sidebar.  
#### 2. Select 'From" and "To" towns and enter delivery cost between them in "Cost" textbox.  
#### 3. Press "Create" button to create the route definition.  
#### 4. On success, the route definition will show in table below.  

### B. Route Delivery Cost  

#### 1. All town names are shown as clickable chips on the screen.  
#### 2. To build a delivery route, click on town name chips in the order from "Start" .... "Destination".
#### 3. Each clicked town name will be added to a visual route diagram below.
#### 4. Atleast 2 town names must be clicked to build a route and hence be able to calculate its cost(if that route's definition exists.)
#### 5. Each route added can be undone in the order from last to first, using an "Undo" button in the upper right corner of screen.
#### 6. Whole operation can be undone in one go using "Reset" button in upper right corner of screen.
#### 7. "Calculate" button will first be visible(but disabled) when atleast one town name is clicked and hence added to  delivery route.
#### 8. "Calculate" button will be "enabled" when atleast 2 towns are added to delivery route.
#### 9. Pressing "Calculate" button will produce in a dialog, total delivery cost of between towns selected, if they exist in route definition created in screen 1.
#### 10. If route definition for delivery route doesn't exists, the dialog will show "No such route" message.