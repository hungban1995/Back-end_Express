import express from "express";

const parseConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};
export default parseConfig;