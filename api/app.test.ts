import request from "supertest";
import app from "./app";

describe("App Endpoints", () => {
  describe("GET /", () => {
    it('should return 200 OK with "hello world"', async () => {
      const response = await request(app).get("/");
      expect(response.status).toBe(200);
      expect(response.text).toBe("Hello World");
    });
  });

  describe("GET /data", () => {
    it("should return 200 OK with a success JSON object", async () => {
      const response = await request(app).get("/data");
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ data: "success" });
    });
  });
});
