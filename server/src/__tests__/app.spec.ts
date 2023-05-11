// import supertest from "supertest";
import chai from "chai";
import chaiHttp from "chai-http";
import "mocha";
import { validate } from "jsonschema";
import timeResponseSchema from "../jsonschema/time.jsonschema";
import app from "../app";

chai.use(chaiHttp);

describe("Test the /time path", () => {
    it("It should respond ok & valid against JSON schema", async () => {
        const res = await chai.request(app).get("/time");
        chai.expect(res.body).to.have.property("epoch");
        chai.expect(res.status).to.equal(200);
        chai.assert.equal(
            validate(res.body, timeResponseSchema).errors.length,
            0
        );
    });
});
