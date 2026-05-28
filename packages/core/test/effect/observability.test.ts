import { afterEach, describe, expect, test } from "bun:test"
import { resource } from "@renx/core/effect/observability"

const otelResourceAttributes = process.env.OTEL_RESOURCE_ATTRIBUTES
const renxClient = process.env.RENX_CLIENT

afterEach(() => {
  if (otelResourceAttributes === undefined) delete process.env.OTEL_RESOURCE_ATTRIBUTES
  else process.env.OTEL_RESOURCE_ATTRIBUTES = otelResourceAttributes

  if (renxClient === undefined) delete process.env.RENX_CLIENT
  else process.env.RENX_CLIENT = renxClient
})

describe("resource", () => {
  test("parses and decodes OTEL resource attributes", () => {
    process.env.OTEL_RESOURCE_ATTRIBUTES =
      "service.namespace=anomalyco,team=platform%2Cobservability,label=hello%3Dworld,key%2Fname=value%20here"

    expect(resource().attributes).toMatchObject({
      "service.namespace": "anomalyco",
      team: "platform,observability",
      label: "hello=world",
      "key/name": "value here",
    })
  })

  test("drops OTEL resource attributes when any entry is invalid", () => {
    process.env.OTEL_RESOURCE_ATTRIBUTES = "service.namespace=anomalyco,broken"

    expect(resource().attributes["service.namespace"]).toBeUndefined()
    expect(resource().attributes["renx.client"]).toBeDefined()
  })

  test("keeps built-in attributes when env values conflict", () => {
    process.env.RENX_CLIENT = "cli"
    process.env.OTEL_RESOURCE_ATTRIBUTES =
      "renx.client=web,service.instance.id=override,service.namespace=anomalyco"

    expect(resource().attributes).toMatchObject({
      "renx.client": "cli",
      "service.namespace": "anomalyco",
    })
    expect(resource().attributes["service.instance.id"]).not.toBe("override")
  })
})
