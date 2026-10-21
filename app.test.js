const request= require("supertest");
const app= require("./app");

describe("CI/CD Practice API", ()=>{
    
    test("GET / should return 200", async()=>{
        const responce =await request(app).get("/");

        expect(responce.statusCode).toBe(200);
        expect(responce.body.message).toBe("CI/CD Practice API is running !");
    });

    test("GET /health should return healthy status",async()=>{
        const responce =await request(app).get("/health");

        expect(responce.statusCode).toBe(200);
        expect(responce.body.status).toBe("healthy");
    });

    test("Get /welcome should return 200",async()=>{
        const responce=await request(app).get("/welcome");

        expect(responce.statusCode).toBe(200);
    });
});