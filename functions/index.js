const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQaQADhwSsbpXsJEaBHxYsgEiQMO2tnJriAJLxVZj9k6d41rDc8k9SVkKzNZou596YSjbuXSc12kvz8S1445VGj00U14198DQ"
);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for the amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK-Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -listen command

exports.api = functions.https.onRequest(app);

// example endpoint
//http://localhost:5001/clone-980b8/us-central1/api
