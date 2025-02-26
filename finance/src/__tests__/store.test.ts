/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { FinanceSDK } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Store Get Inventory", async () => {
  const financeSDK = new FinanceSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getInventory"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await financeSDK.store.getInventory();
  expect(result).toBeDefined();
});

test("Store Place Order", async () => {
  const financeSDK = new FinanceSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("placeOrder"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await financeSDK.store.placeOrder({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });
});

test("Store Get Order By Id", async () => {
  const financeSDK = new FinanceSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("getOrderById"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await financeSDK.store.getOrderById({
    orderId: 614993,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });
});

test("Store Delete Order", async () => {
  const financeSDK = new FinanceSDK({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: createTestHTTPClient("deleteOrder"),
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await financeSDK.store.deleteOrder({
    orderId: 127902,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    petId: 198772,
    quantity: 7,
    status: "approved",
  });
});
