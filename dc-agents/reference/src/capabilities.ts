import { configSchema } from "./config"
import { Capabilities, CapabilitiesResponse, ScalarTypeCapabilities, ScalarTypesCapabilities } from "@hasura/dc-api-types"

const schemaDoc: string =
  `scalar DateTime

input DateTimeComparisons {
  same_day_as: DateTime
  in_year: Int
}`

const dateTimeCapabilities: ScalarTypeCapabilities = {
  comparisonType: 'DateTimeComparisons'
}

const scalarTypes: ScalarTypesCapabilities = {
  DateTime: dateTimeCapabilities
}

const capabilities: Capabilities = {
  relationships: {},
  graphqlSchema: schemaDoc,
  scalarTypes: scalarTypes
}

export const capabilitiesResponse: CapabilitiesResponse = {
  capabilities: capabilities,
  configSchemas: configSchema
}
