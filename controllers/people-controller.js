//controllers

// DEPENDENCIES
const express = require('express')
const {People} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// Controller Action


// Index
async function index(req,res,next) {
	try {
    // get all people
    res.json(await People.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Create
async function create(req,res,next) {
    try {
      // create new person
      res.status(201).json(await People.create(req.body));
    } catch (error) {
        console.log(error)
      //send error
      res.status(400).json(error);
    }
};

// Detail
async function getOne(req, res, next){
    try {
        res.status(200).jason(await People.findById(req.params.id))
    }catch(err){
        res.status(400).json({error: err.message})
    }
};


// Destroy
async function destroy(req, res, next) {
	try {
    // get all people
    res.status(200).json(await People.findByIdAndDelete(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Update
async function update(req,res,next) {
    try {
      // update people by ID, provide the form data, and return the updated document.
      res.status(200).json(await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
};
  


module.exports = {
	index,
	create,
	getOne,
	delete: destroy,
	update
}