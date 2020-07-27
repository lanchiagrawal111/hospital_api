//During the test the env variable is set to test
process.env.NODE_ENV = "db";

let mongoose = require("mongoose");
let Patient = require('../models/patient');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();
chai.use(chaiHttp);
let token;

describe("Patient API", () => {
  //getting the authorization token before api calls
  beforeEach(async () => {
    let res = await chai
      .request(server)
      .post("doctors/login")
      .type("form")
      .send({
        username: "test_doctor",
        password: "test_password",
      });

    token = res.body.token;
  });

  //remove all patients from the collection before creating one
  before((done) => {
    Patient.deleteMany({}, (err) => {});
    // Report.deleteMany({}, (err) => {});
    done();
  });
  /*
   * Test the /POST route register patient
   */
  describe("/POST patients/register", () => {
    it("it should create a patient ->Register patient", async () => {
      let patient = await chai
        .request(server)
        .post("patients/register")
        .set("content-type", "application/x-www-form-urlencoded")
        .set({ Authorization: `Bearer ${authToken}` })
        .send(patient)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have
            .property("message")
            .eql("patient registered successfully");
          res.body.should.have.property("details");
          res.body.details.should.have.property("phone");
          res.body.details.should.have.property("name");
          done();
        });
    });
  });
});