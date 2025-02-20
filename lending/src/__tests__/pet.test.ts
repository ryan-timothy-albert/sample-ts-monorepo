/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { LendingSDK } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Pet Pets Store Monday", async () => {
  const lendingSDK = new LendingSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("petsStoreMonday"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await lendingSDK.pet.petsStoreMonday({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });
});

test("Pet My New Test", async () => {
  const lendingSDK = new LendingSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("MyNewTest"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await lendingSDK.pet.myNewTest({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
});

test("Pet Find Pets By Status Types", async () => {
  const lendingSDK = new LendingSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("findPetsByStatusTypes"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await lendingSDK.pet.findPetsByStatusTypes({});
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
        "<value>",
        "<value>",
      ],
    },
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
        "<value>",
      ],
    },
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
      ],
    },
  ]);
});

test("Pet Find Pets By Tags", async () => {
  const lendingSDK = new LendingSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("findPetsByTags"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await lendingSDK.pet.findPetsByTags({});
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
        "<value>",
        "<value>",
      ],
    },
  ]);
});

test("Pet Get Pet By Ids", async () => {
  const lendingSDK = new LendingSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getPetByIDS"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await lendingSDK.pet.getPetByIDS({
    petId: 137396,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
      "<value>",
    ],
  });
});

test("Pet Delete Pet", async () => {
  const lendingSDK = new LendingSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("deletePet"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await lendingSDK.pet.deletePet({
    petId: 441876,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
});

test("Pet Upload File", async () => {
  const lendingSDK = new LendingSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("uploadFile"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await lendingSDK.pet.uploadFile({
    petId: 565380,
  });
  expect(result).toBeDefined();
});
