const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();


const PORT = 3000;

app.listen(PORT,()=>{
  console.log("Server is running on PORT", PORT);
});