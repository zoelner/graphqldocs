export const data = {
    "__schema": {
      "queryType": { "name": "Query" },
      "mutationType": { "name": "Mutation" },
      "subscriptionType": null,
      "types": [
        {
          "kind": "OBJECT",
          "name": "Query",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The ID of the object",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
                  },
                  "defaultValue": null
                }
              ],
              "type": { "kind": "INTERFACE", "name": "Node", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "company",
              "description": "Lista todas empresas no sistema.",
              "args": [
                {
                  "name": "name",
                  "description": "Nome da empresa.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "cnpj",
                  "description": "CNPJ da empresa.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CompanyConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "customPermission",
              "description": "Lista todas permiss\u00f5es.",
              "args": [
                {
                  "name": "reference",
                  "description": "Refer\u00eancia da permiss\u00e3o.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "service",
                  "description": "Servi\u00e7o ao qual a permiss\u00e3o pertence.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "customPermissionGroup",
              "description": "Lista todos os grupos de permiss\u00f5es.",
              "args": [
                {
                  "name": "reference",
                  "description": "Refer\u00eancia do grupo de permiss\u00e3o.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "companyId",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionGroupConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employee",
              "description": "Lista todos os funcion\u00e1rios.",
              "args": [
                {
                  "name": "companyId",
                  "description": "ID da empresa ao qual o funcion\u00e1rio presta servi\u00e7os.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmployeeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employment",
              "description": "Lista a associa\u00e7\u00e3o entre operadores e empresas.",
              "args": [
                {
                  "name": "companyId",
                  "description": "ID da empresa \u00e0 qual pertence a rela\u00e7\u00e3o de emprego.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "title",
                  "description": "Refer\u00eancia do cargo.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmploymentConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installation",
              "description": "Lista todas as instala\u00e7\u00f5es.",
              "args": [
                {
                  "name": "companyId",
                  "description": "ID da empresa \u00e0 qual pertence a instala\u00e7\u00e3o.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "installationId",
                  "description": "ID da instala\u00e7\u00e3o.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "latitude",
                  "description": "Latitude do ponto a ser consultado.",
                  "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "longitude",
                  "description": "Longitude do ponto a ser consultado.",
                  "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "radius",
                  "description": "Dist\u00e2ncia em metros do raio de consulta, a partir da latitude e longitude fornecidos.",
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installationSite",
              "description": "Lista todos os locais de instala\u00e7\u00e3o.",
              "args": [
                {
                  "name": "companyId",
                  "description": "ID da empresa \u00e0 qual pertence a instala\u00e7\u00e3o.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "latitude",
                  "description": "Latitude do ponto a ser consultado.",
                  "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "longitude",
                  "description": "Longitude do ponto a ser consultado.",
                  "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "radius",
                  "description": "Dist\u00e2ncia em metros do raio de consulta, a partir da latitude e longitude fornecidos.",
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationSiteConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "material",
              "description": "Lista todos os materiais.",
              "args": [
                {
                  "name": "manufacturer",
                  "description": "Refer\u00eancia do fabricante do material.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "model",
                  "description": "Descri\u00e7\u00e3o do modelo de material.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MaterialConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "measurementUnit",
              "description": null,
              "args": [
                {
                  "name": "symbol",
                  "description": "Sigla da unidade de medida. Ex: W",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "name",
                  "description": "Nome completo da unidade de medida. Ex: Watt",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MeasurementUnitConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "property",
              "description": null,
              "args": [
                {
                  "name": "sourceName",
                  "description": "Nome de origem de uma propriedade.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PropertyConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "alertRules",
              "description": null,
              "args": [
                {
                  "name": "companyId",
                  "description": "ID da empresa \u00e0 qual este alerta est\u00e1 associado.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "propertyId",
                  "description": "ID da propriedade monitorada pelo alerta.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "name",
                  "description": "Nome do alerta.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "weekDayBitmask",
                  "description": "Valor inteiro representando os dias da semana que o alerta funciona.",
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AlertRuleConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "firmware",
              "description": "Lista todos os firmwares do sistema.",
              "args": [
                {
                  "name": "name",
                  "description": "Nome do firmware.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "major",
                  "description": "Vers\u00e3o Major do firmware.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "minor",
                  "description": "Vers\u00e3o Minor do firmware.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "FirmwareConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hardware",
              "description": "Lista todos os hardwares do sistema.",
              "args": [
                {
                  "name": "name",
                  "description": "Nome do hardware",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "major",
                  "description": "Vers\u00e3o Major do hardware.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "minor",
                  "description": "Vers\u00e3o Minor do hardware.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "HardwareConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "equipmentType",
              "description": "Lista todos os tipos de equipamento do sistema.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentTypeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "equipment",
              "description": "Lista todos os equipamentos.",
              "args": [
                {
                  "name": "installationId",
                  "description": "Instala\u00e7\u00e3o \u00e0 qual o equipamento est\u00e1 atrelado.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "deviceMacs",
                  "description": "Lista de MACs do equipamento",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "companyId",
                  "description": "Empresa respons\u00e1vel pelo equipamento.",
                  "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "gateway",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Status", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "service",
              "description": null,
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "name",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "version",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "host",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "port",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ServiceTypeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "user",
              "description": null,
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "email",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "username",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "username_Icontains",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "username_Istartswith",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "employee",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "token",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UserTypeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "userPermissions",
              "description": "Retorna todas as permiss\u00f5es de um usu\u00e1rio espec\u00edfico.",
              "args": [
                {
                  "name": "username",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "UserType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "availablePermissions",
              "description": "Retorna todas as permiss\u00f5es dispon\u00edveis de todos os servi\u00e7os cadastrados no sistema.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "AvailablePermissionsType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INTERFACE",
          "name": "Node",
          "description": "An object with an ID",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": [
            { "kind": "OBJECT", "name": "Company", "ofType": null },
            { "kind": "OBJECT", "name": "CustomPermission", "ofType": null },
            {
              "kind": "OBJECT",
              "name": "CustomPermissionGroup",
              "ofType": null
            },
            { "kind": "OBJECT", "name": "Employee", "ofType": null },
            { "kind": "OBJECT", "name": "Employment", "ofType": null },
            { "kind": "OBJECT", "name": "Installation", "ofType": null },
            { "kind": "OBJECT", "name": "InstallationSite", "ofType": null },
            { "kind": "OBJECT", "name": "Geoposition", "ofType": null },
            { "kind": "OBJECT", "name": "Equipment", "ofType": null },
            { "kind": "OBJECT", "name": "EquipmentType", "ofType": null },
            { "kind": "OBJECT", "name": "EquipmentPart", "ofType": null },
            { "kind": "OBJECT", "name": "Hardware", "ofType": null },
            { "kind": "OBJECT", "name": "Firmware", "ofType": null },
            { "kind": "OBJECT", "name": "InstalledMaterial", "ofType": null },
            { "kind": "OBJECT", "name": "Material", "ofType": null },
            { "kind": "OBJECT", "name": "Modifier", "ofType": null },
            { "kind": "OBJECT", "name": "Property", "ofType": null },
            { "kind": "OBJECT", "name": "MeasurementUnit", "ofType": null },
            { "kind": "OBJECT", "name": "PropertyFields", "ofType": null },
            { "kind": "OBJECT", "name": "AlertRule", "ofType": null },
            { "kind": "OBJECT", "name": "Email", "ofType": null },
            { "kind": "OBJECT", "name": "ServiceType", "ofType": null },
            { "kind": "OBJECT", "name": "UserType", "ofType": null }
          ]
        },
        {
          "kind": "SCALAR",
          "name": "ID",
          "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CompanyConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CompanyEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PageInfo",
          "description": null,
          "fields": [
            {
              "name": "hasNextPage",
              "description": "When paginating forwards, are there more items?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hasPreviousPage",
              "description": "When paginating backwards, are there more items?",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "startCursor",
              "description": "When paginating backwards, the cursor to continue.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "endCursor",
              "description": "When paginating forwards, the cursor to continue.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": "The `Boolean` scalar type represents `true` or `false`.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CompanyEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Company",
          "description": "Representa\u00e7\u00e3o das propriedades de uma Empresa. ",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Nome da empresa.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cnpj",
              "description": "CNPJ da empresa.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Int",
          "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31 - 1) and 2^31 - 1 since represented in JSON as double-precision floating point numbers specifiedby [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomPermissionEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermission",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermission",
          "description": "Representa\u00e7\u00e3o das propriedades das permiss\u00f5es ",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia da permiss\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "service",
              "description": "Servi\u00e7o que disponibiliza o recurso associado \u00e0 permiss\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "title",
              "description": "T\u00edtulo da permiss\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionGroupConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "CustomPermissionGroupEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionGroupEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionGroup",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionGroup",
          "description": "Representa\u00e7\u00e3o das propriedades de um grupo de permiss\u00f5es. ",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia da permiss\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "title",
              "description": "T\u00edtulo da permiss\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "permissions",
              "description": "Permiss\u00f5es garantidas.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "company",
              "description": "Id da empresa",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmployeeConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EmployeeEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmployeeEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Employee", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Employee",
          "description": "Representa\u00e7\u00e3o das propriedades de um funcion\u00e1rio. ",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Nome do funcion\u00e1rio",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cpf",
              "description": "CPF do funcion\u00e1rio",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "companies",
              "description": "Empresas em que o funcion\u00e1rio atua.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CompanyConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "user",
              "description": "ID do usu\u00e1rio.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmploymentConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EmploymentEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmploymentEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Employment",
          "description": "Representa\u00e7\u00e3o das propriedades da rela\u00e7\u00e3o entre funcion\u00e1rio e empresa. ",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "company",
              "description": "Descri\u00e7\u00e3o da empresa.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employee",
              "description": "Descri\u00e7\u00e3o dos funcion\u00e1rios.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmployeeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "title",
              "description": "T\u00edtulo do relacionamento.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "permissions",
              "description": "Descri\u00e7\u00e3o das permiss\u00f5es.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dateJoined",
              "description": "Descri\u00e7\u00e3o da data de admiss\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Date",
          "description": "The `Date` scalar type represents a Date\nvalue as specified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InstallationEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Installation",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Installation",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Installation",
          "description": "Representa\u00e7\u00e3o das propriedades de uma instala\u00e7\u00e3o",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reference",
              "description": "Descri\u00e7\u00e3o da refer\u00eancia da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "site",
              "description": "Descri\u00e7\u00e3o do local de instala\u00e7\u00e3o.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationSite",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "channel",
              "description": "Descri\u00e7\u00e3o do canal de comunica\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "equipments",
              "description": "Equipamentos atribu\u00eddos \u00e0 instala\u00e7\u00e3o.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installedMaterials",
              "description": "Descri\u00e7\u00e3o dos materiais instalados nesta instala\u00e7ao.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstalledMaterialConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "parentInstallation",
              "description": "Descreve a instala\u00e7\u00e3o pai desta instala\u00e7\u00e3o, caso possua.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Installation",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deletionDatetime",
              "description": "Data e hora de exclus\u00e3o da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "DateTime", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeleted",
              "description": "Identifica se a instala\u00e7\u00e3o foi removida.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Boolean", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "properties",
              "description": "Propriedades relacionadas \u00e0 instala\u00e7\u00e3o.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PropertyConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationSite",
          "description": "Representa\u00e7\u00e3o das propriedades de um local de Instala\u00e7\u00e3o",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reference",
              "description": "Descri\u00e7\u00e3o da refer\u00eancia.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "geoposition",
              "description": "Descri\u00e7\u00e3o dos valores de latitude e longitude da instala\u00e7\u00e3o.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Geoposition",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "company",
              "description": "Descri\u00e7\u00e3o da empresa.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installations",
              "description": "Descri\u00e7\u00e3o das instala\u00e7\u00f5es pertencentes \u00e0 este local.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "country",
              "description": "Descri\u00e7\u00e3o do nome do Pais da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "state",
              "description": "Descri\u00e7\u00e3o do nome do Estado da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "city",
              "description": "Descri\u00e7\u00e3o do nome da Cidade da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "district",
              "description": "Descri\u00e7\u00e3o do nome do Bairro da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "street",
              "description": "Descri\u00e7\u00e3o do nome da Rua da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "number",
              "description": "Descri\u00e7\u00e3o do n\u00famero do logradouro ondelocaliza-se a instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "details",
              "description": "Descri\u00e7\u00e3o de demais detalhes a respeito da instala\u00e7\u00e3o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "locationCode",
              "description": "C\u00f3digo do logradouro, utilizado por concession\u00e1rios de ilumina\u00e7\u00e3o p\u00fablica.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Geoposition",
          "description": "Representa\u00e7\u00e3o das propriedades de geolocaliza\u00e7\u00e3o de uma instala\u00e7\u00e3o",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "latitude",
              "description": "Descri\u00e7\u00e3o de latitude.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "longitude",
              "description": "Descri\u00e7\u00e3o de longitude.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Float",
          "description": "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EquipmentEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Equipment",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Equipment", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Equipment",
          "description": "Representa\u00e7\u00e3ode um equipamento",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "equipmentType",
              "description": "Tipo do equipamento.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentTypeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serialNumber",
              "description": "Serial do equipamento.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "macAddress",
              "description": "Endere\u00e7o MAC do equipamento.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "company",
              "description": "Empresa respons\u00e1vel pelo equipamento.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentTypeConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EquipmentTypeEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentTypeEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentType",
          "description": "Representa\u00e7\u00e3o das propriedades do tipo de equipamento",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "releaseDate",
              "description": "Data de release do tipo de equipamento.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o do modelo de equipamento.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia do tipo de equipamento.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "equipmentParts",
              "description": "Lista as partes que comp\u00f5em um tipo de equipamento.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentPartConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "major",
              "description": "N\u00famero da vers\u00e3o major do firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "minor",
              "description": "N\u00famero da vers\u00e3o minor do firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "revision",
              "description": "N\u00famero da vers\u00e3o revision do firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentPartConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EquipmentPartEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentPartEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentPart",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EquipmentPart",
          "description": "Representa\u00e7\u00e3o das propriedades das partes de um equipamento",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "hardware",
              "description": "Hardware que comp\u00f5e esta parte do equipamento.",
              "args": [
                {
                  "name": "name",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": { "kind": "OBJECT", "name": "Hardware", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "firmwares",
              "description": "Firmwares que comp\u00f5e esta parte do equipamento.",
              "args": [
                {
                  "name": "name",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "FirmwareConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Hardware",
          "description": "Representa\u00e7\u00e3o das propriedades do hardware",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "compatibleFirmware",
              "description": "Firmwares compativeis com esta vers\u00e3o de hardware.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "FirmwareConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "major",
              "description": "Vers\u00e3o Major do hardware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "minor",
              "description": "Vers\u00e3o Minor do hardware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "revision",
              "description": "Revis\u00e3o do hardware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o do hardware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "releaseDate",
              "description": "Data de release do hardware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Nome do hardware",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "FirmwareConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FirmwareEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "FirmwareEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Firmware", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Firmware",
          "description": "Representa\u00e7\u00e3o das propriedades do firmware. ",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "compatibleHardware",
              "description": "Hardwares compativeis com esta vers\u00e3o de firmware.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "HardwareConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "major",
              "description": "Vers\u00e3o Major do firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "minor",
              "description": "Vers\u00e3o Minor do firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "revision",
              "description": "Revis\u00e3o do firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o do firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "releaseDate",
              "description": "Data de release do Firmware.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Nome do firmware",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "HardwareConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "HardwareEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "HardwareEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Hardware", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstalledMaterialConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InstalledMaterialEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstalledMaterialEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "InstalledMaterial",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstalledMaterial",
          "description": "Representa\u00e7\u00e3o de um material instalado",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serialNumber",
              "description": "N\u00famero de s\u00e9rie do material.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "material",
              "description": "Material instalado.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Material", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installation",
              "description": "Instala\u00e7\u00e3o onde o material est\u00e1 instalado.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Installation",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "startDatetime",
              "description": "Data e hora da instala\u00e7\u00e3o do material.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "DateTime", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "endDatetime",
              "description": "Data e hora da desinstala\u00e7\u00e3o do material.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "DateTime", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Material",
          "description": "Representa\u00e7\u00e3o das propriedades de um material",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "reference",
              "description": "Descri\u00e7\u00e3o da refer\u00eancia do material.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o do material.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "manufacturer",
              "description": "Descri\u00e7\u00e3o do fabricante do material.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "model",
              "description": "Descri\u00e7ao do modelo do material.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isMeter",
              "description": "Define se este material \u00e9 um medidor.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Boolean", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifiers",
              "description": "Modificadores deste material",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ModifierConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ModifierConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ModifierEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ModifierEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Modifier", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Modifier",
          "description": "Representa\u00e7\u00e3o das propriedades de um modificador",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "propertyIn",
              "description": "Propriedade de entrada do modificador.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Property", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "propertyOut",
              "description": "Propriedade de sa\u00edda do modificador.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Property", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "conversionFactor",
              "description": "Fator de convers\u00e3o do modificador.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Property",
          "description": "Representa\u00e7\u00e3o de uma propriedade",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "sourceName",
              "description": "Nome de origem de uma propriedade.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Tradu\u00e7\u00e3o do nome de origem para o portugu\u00eas BR.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "shortName",
              "description": "Sigla da propriedade.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "service",
              "description": "Servi\u00e7o respons\u00e1vel por esta propriedade.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "measurementUnit",
              "description": "Unidade de medida desta propriedade.",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "MeasurementUnit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "values",
              "description": "Valores transmitidos com a propriedade.",
              "args": [
                {
                  "name": "startDatetime",
                  "description": "Data/Hora inicial.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "DateTime",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "endDatetime",
                  "description": "Data/Hora final.",
                  "type": {
                    "kind": "SCALAR",
                    "name": "DateTime",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PropertyFieldsConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MeasurementUnit",
          "description": "Representa\u00e7\u00e3o de uma unidade de medida",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Nome completo da unidade de medida. Ex: Watt",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "symbol",
              "description": "Sigla da unidade de medida. Ex: W",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PropertyFieldsConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PropertyFieldsEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PropertyFields",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PropertyFieldsEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "PropertyFields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PropertyFields",
          "description": "Representa\u00e7\u00e3o dos valores trazidos com a propriedade.",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "value",
              "description": "Valor da propriedade.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "timestampApp",
              "description": "Timestamp da requisi\u00e7\u00e3o da mensagem.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "timestampOrigin",
              "description": "Timestamp da gera\u00e7\u00e3o da mensagem no equipamento.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "timestampReceive",
              "description": "Timestamp de recebimento no servi\u00e7o.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "timestampReference",
              "description": "Timestamp da coleta do dado no medidor digital.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "DateTime",
          "description": "The `DateTime` scalar type represents a DateTime\nvalue as specified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PropertyConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PropertyEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Property",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PropertyEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Property", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationSiteConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "InstallationSiteEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationSiteEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationSite",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MaterialConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MaterialEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MaterialEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Material", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MeasurementUnitConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "MeasurementUnitEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MeasurementUnitEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "MeasurementUnit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AlertRuleConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "AlertRuleEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "AlertRule",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AlertRuleEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "AlertRule", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AlertRule",
          "description": "Representa\u00e7\u00e3o das propriedades de um alerta",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "Nome do alerta.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "monitoredProperty",
              "description": "Descri\u00e7\u00e3o da propriedade monitorada pelo alerta.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Property",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "startDate",
              "description": "Data de in\u00edcio do funcionamento do alerta.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "endDate",
              "description": "Data de t\u00e9rmino do funcionamento do alerta.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dailyStartTime",
              "description": "Hora de in\u00edcio do funcionamento do alerta.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Time", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dailyStopTime",
              "description": "Hora de t\u00e9rmino do funcionamento do alerta.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Time", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "weekDayBitmask",
              "description": "Valor inteiro representando os dias da semana que o alerta funciona.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "comparisonRule",
              "description": "Regra de aplica\u00e7\u00e3o da f\u00f3rmula comparativa.",
              "args": [],
              "type": {
                "kind": "ENUM",
                "name": "ComparisonRules",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serviceOrder",
              "description": "Indentifica se uma ordem de servi\u00e7o deve ser gerada.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "active",
              "description": "Identifica o estado do alerta.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "comparisonValue",
              "description": "Valor a ser comparado na formula comparativa.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "company",
              "description": "Empresa \u00e0 qual este alerta est\u00e1 associado.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "emailAddresses",
              "description": "Lista de emails para notifica\u00e7\u00e3o deste alerta.",
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmailConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Time",
          "description": "The `Time` scalar type represents a Time value as\nspecified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "ComparisonRules",
          "description": "Rela\u00e7\u00e3o das regras de compara\u00e7\u00e3o.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "EQUALS",
              "description": "Compara\u00e7\u00e3o l\u00f3gica de igualdade.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NOT_EQUALS",
              "description": "Compara\u00e7\u00e3o l\u00f3gica de diferen\u00e7a.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "GREATER_THAN",
              "description": "Compara\u00e7\u00e3o l\u00f3gica de maior que.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "GREATER_EQUAL",
              "description": "Compara\u00e7\u00e3o l\u00f3gica de maior ou igual.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LESS_THAN",
              "description": "Compara\u00e7\u00e3o l\u00f3gica de menor que.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LESS_EQUAL",
              "description": "Compara\u00e7\u00e3o l\u00f3gica de menor ou igual.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ON_CHANGE",
              "description": "Evento de mudan\u00e7a de estado.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmailConnection",
          "description": "Classe conectora para o graphene",
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "EmailEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": "Quantidade de elementos cadastrados.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmailEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Email", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Email",
          "description": "Representa\u00e7\u00e3o das propriedades de um Email",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "emailAddress",
              "description": "Endere\u00e7o eletr\u00f4nico.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Status",
          "description": "Representa\u00e7\u00e3o do release do bifr\u00f6st. ",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "version",
              "description": "Vers\u00e3o atual do bifr\u00f6st.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "services",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Services",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Services",
          "description": null,
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "version",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ServiceTypeConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "ServiceTypeEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ServiceTypeEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ServiceType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ServiceType",
          "description": "Servi\u00e7os registrados no bifrost.",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "version",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "host",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "port",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserTypeConnection",
          "description": null,
          "fields": [
            {
              "name": "pageInfo",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PageInfo",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "edges",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserTypeEdge",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserTypeEdge",
          "description": null,
          "fields": [
            {
              "name": "node",
              "description": "The item at the end of the edge",
              "args": [],
              "type": { "kind": "OBJECT", "name": "UserType", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cursor",
              "description": "A cursor for use in pagination",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserType",
          "description": "Representa\u00e7\u00e3o de um usu\u00e1rio do sistema, vinculado \u00e0 um funcion\u00e1rio.",
          "fields": [
            {
              "name": "id",
              "description": "The ID of the object.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lastLogin",
              "description": "",
              "args": [],
              "type": { "kind": "SCALAR", "name": "DateTime", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isSuperuser",
              "description": "Indica que este usu\u00e1rio tem todas as permiss\u00f5es sem atribu\u00ed-las explicitamente.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "userPermissions",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "PermissionType",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "username",
              "description": "Obrigat\u00f3rio. 150 caracteres ou menos. Letras, n\u00fameros e @/./+/-/_ apenas.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "firstName",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "lastName",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isStaff",
              "description": "Indica que usu\u00e1rio consegue acessar este site de administra\u00e7\u00e3o.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isActive",
              "description": "Indica que o usu\u00e1rio ser\u00e1 tratado como ativo. Ao inv\u00e9s de excluir contas de usu\u00e1rio, desmarque isso.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "dateJoined",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employee",
              "description": "Dados do empregador associado ao usu\u00e1rio.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "Employee", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "token",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [
            { "kind": "INTERFACE", "name": "Node", "ofType": null }
          ],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PermissionType",
          "description": "Conforme model auth.models.Permissions do Django.",
          "fields": [
            {
              "name": "id",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "codename",
              "description": "",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "userSet",
              "description": null,
              "args": [
                {
                  "name": "before",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "after",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "first",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "last",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "email",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "username",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "username_Icontains",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "username_Istartswith",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "employee",
                  "description": null,
                  "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
                  "defaultValue": null
                },
                {
                  "name": "token",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UserTypeConnection",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AvailablePermissionsType",
          "description": null,
          "fields": [
            {
              "name": "permission",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "DynamicScalar",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "DynamicScalar",
          "description": "The `DynamicScalar` scalar type represents a JSON object with unknown fields\n\nAdapted from original type, GenericScalar",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "Mutation",
          "description": null,
          "fields": [
            {
              "name": "companyCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CompanyCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CompanyCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "customPermissionGroupCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CustomPermissionGroupCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionGroupCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "EmployeeCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmployeeCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installationSiteCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InstallationSiteCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationSiteCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installationCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InstallationCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "customPermissionCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CustomPermissionCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "materialCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MaterialCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MaterialCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifierCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ModifierCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ModifierCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "measurementUnitCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MeasurementUnitCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MeasurementUnitCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "propertyCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PropertyCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PropertyCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installedMaterialCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InstalledMaterialCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstalledMaterialCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "alertRuleCreate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AlertRuleCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AlertRuleCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createFirmware",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateFirmwareInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateFirmwarePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createHardware",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateHardwareInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateHardwarePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createEquipmentType",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateEquipmentTypeInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateEquipmentTypePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createEquipment",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateEquipmentInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateEquipmentPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "alertRuleUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "AlertRuleUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "AlertRuleUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "companyUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CompanyUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CompanyUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "customPermissionUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CustomPermissionUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "customPermissionGroupUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CustomPermissionGroupUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionGroupUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employeeUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "EmployeeUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmployeeUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "employmentUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "EmploymentUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "EmploymentUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installationUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InstallationUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installationSiteUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InstallationSiteUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationSiteUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "installedMaterialUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "InstalledMaterialUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "InstalledMaterialUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "materialUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MaterialUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MaterialUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "measurementUnitUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "MeasurementUnitUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "MeasurementUnitUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "modifierUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ModifierUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ModifierUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "propertyUpdate",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PropertyUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "PropertyUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateFirmware",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateFirmwareInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateFirmwarePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateHardware",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateHardwareInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateHardwarePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateEquipmentType",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateEquipmentTypeInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateEquipmentTypePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateEquipment",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateEquipmentInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateEquipmentPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "createService",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "CreateServiceInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "CreateServicePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updateService",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UpdateServiceInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UpdateServicePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deleteService",
              "description": null,
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "DeleteServiceInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "DeleteServicePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "userCreate",
              "description": "Cria um usu\u00e1rio de sistema.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserCreateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UserCreatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "userUpdate",
              "description": "Atualiza um usu\u00e1rio de sistema.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserUpdateInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UserUpdatePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "userDelete",
              "description": "Remove um usu\u00e1rio de sistema.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserDeleteInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "UserDeletePayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "login",
              "description": "Inicia a sess\u00e3o de um usu\u00e1rio no sistema.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LogInInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "LogInPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "logout",
              "description": "Encerra a sess\u00e3o de um usu\u00e1rio no sistema.",
              "args": [
                {
                  "name": "input",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "LogOutInput",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "LogOutPayload",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CompanyCreatePayload",
          "description": "Mutation para Company",
          "fields": [
            {
              "name": "company",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CompanyCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": "Nome da empresa.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "cnpj",
              "description": "CNPJ da empresa.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionGroupCreatePayload",
          "description": "Mutation para CustomPermissionGroup",
          "fields": [
            {
              "name": "customPermissionGroup",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionGroup",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CustomPermissionGroupCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "reference",
              "description": "Refer\u00eancia do grupo de permiss\u00f5es.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "title",
              "description": "T\u00edtulo que representa o grupo de permiss\u00f5es.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "companyId",
              "description": "ID da empresa respons\u00e1vel pelo grupo de permiss\u00f5es.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "permissionsIds",
              "description": "IDs das permiss\u00f5es que comp\u00f5em o grupo de permiss\u00f5es",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
                }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmployeeCreatePayload",
          "description": "Mutation para Employee",
          "fields": [
            {
              "name": "employee",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Employee", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "EmployeeCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": "Nome do funcion\u00e1rio.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "cpf",
              "description": "CPF do funcion\u00e1rio.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "userId",
              "description": "ID do usu\u00e1rio a qual \u00e9 atrelado esse status de funcion\u00e1rio.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "companiesIds",
              "description": "Empresas em que o funcion\u00e1rio atua.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationSiteCreatePayload",
          "description": "Mutation para InstallationSite",
          "fields": [
            {
              "name": "site",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationSite",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InstallationSiteCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "latitude",
              "description": "Latitude do ponto a ser consultado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Float", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "longitude",
              "description": "Longitude do ponto a ser consultado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Float", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "companyId",
              "description": "ID da empresa \u00e0 qual pertence a instala\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia do local de instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "country",
              "description": "Descri\u00e7\u00e3o do nome do Pais da instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "state",
              "description": "Descri\u00e7\u00e3o do nome do Estado da instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "city",
              "description": "Descri\u00e7\u00e3o do nome da Cidade da instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "district",
              "description": "Descri\u00e7\u00e3o do nome do Bairro da instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "street",
              "description": "Descri\u00e7\u00e3o do nome da Rua da instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "number",
              "description": "Descri\u00e7\u00e3o do n\u00famero do logradouro ondelocaliza-se a instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": "Descri\u00e7\u00e3o de demais detalhes a respeito da instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "locationCode",
              "description": "C\u00f3digo do logradouro, utilizado por concession\u00e1rios de ilumina\u00e7\u00e3o p\u00fablica.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationCreatePayload",
          "description": "Cria uma instala\u00e7\u00e3o.",
          "fields": [
            {
              "name": "installation",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Installation",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InstallationCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "reference",
              "description": "Descri\u00e7\u00e3o da refer\u00eancia da instala\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "siteId",
              "description": "ID do local de instala\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "channel",
              "description": "N\u00famero do canal de comunica\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "deviceMac",
              "description": "Mac do equipamento atribu\u00eddo \u00e0 instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "parentInstallationId",
              "description": "ID da instala\u00e7\u00e3o pai desta instala\u00e7\u00e3o, caso possua.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionCreatePayload",
          "description": "Mutation para Company",
          "fields": [
            {
              "name": "customPermission",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermission",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CustomPermissionCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "title",
              "description": "T\u00edtulo da permiss\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia da permiss\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "service",
              "description": "Servi\u00e7o que disponibiliza o recurso associado \u00e0 permiss\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MaterialCreatePayload",
          "description": "Mutation para Material",
          "fields": [
            {
              "name": "material",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Material", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MaterialCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "reference",
              "description": "Descri\u00e7\u00e3o da refer\u00eancia do material.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o do material.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "manufacturer",
              "description": "Descri\u00e7\u00e3o do fabricante do material.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "model",
              "description": "Descri\u00e7ao do modelo do material.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "isMeter",
              "description": "Define se este material \u00e9 um medidor.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiers",
              "description": "Modificadores deste material",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ModifierInput",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ModifierInput",
          "description": "Input para cria\u00e7\u00e3o de um modifier",
          "fields": null,
          "inputFields": [
            {
              "name": "propertyInId",
              "description": "Propriedade de entrada do modificador.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "propertyOutId",
              "description": "Propriedade de sa\u00edda do modificador.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "conversionFactor",
              "description": "Fator de convers\u00e3o do modificador.",
              "type": { "kind": "SCALAR", "name": "Float", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ModifierCreatePayload",
          "description": "Mutation para Modifier",
          "fields": [
            {
              "name": "modifier",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Modifier", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ModifierCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "materialId",
              "description": "ID do material ao qual este modificador \u00e9 atrelado",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "propertyInId",
              "description": "Propriedade de entrada do modificador.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "propertyOutId",
              "description": "Propriedade de sa\u00edda do modificador.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "conversionFactor",
              "description": "Fator de convers\u00e3o do modificador.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Float", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MeasurementUnitCreatePayload",
          "description": "Mutation para MeasurementUnit",
          "fields": [
            {
              "name": "measurementUnit",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "MeasurementUnit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MeasurementUnitCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "symbol",
              "description": "Sigla da unidade de medida. Ex: W",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome completo da unidade de medida. Ex: Watt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PropertyCreatePayload",
          "description": "Mutation para Property",
          "fields": [
            {
              "name": "property",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Property", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PropertyCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "sourceName",
              "description": "Nome de origem de uma propriedade.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "service",
              "description": "Servi\u00e7o respons\u00e1vel por esta propriedade.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Tradu\u00e7\u00e3o do nome de origem para o portugu\u00eas BR.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "shortName",
              "description": "Sigla da propriedade.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "measurementUnitId",
              "description": "Unidade de medida desta propriedade.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstalledMaterialCreatePayload",
          "description": "Mutation para InstalledMaterial",
          "fields": [
            {
              "name": "installedMaterial",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "InstalledMaterial",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InstalledMaterialCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "materialId",
              "description": "ID do material instalado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "installationId",
              "description": "ID da installa\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "serialNumber",
              "description": "N\u00famero serial do material instalado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AlertRuleCreatePayload",
          "description": "Mutation para Alert",
          "fields": [
            {
              "name": "alertRule",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "AlertRule", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AlertRuleCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": "Nome do alerta.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "monitoredPropertyId",
              "description": "ID da propriedade monitorada pelo alerta.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "startDate",
              "description": "Data de in\u00edcio do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "endDate",
              "description": "Data de t\u00e9rmino do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "dailyStartTime",
              "description": "Hora de in\u00edcio do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Time", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "dailyStopTime",
              "description": "Hora de t\u00e9rmino do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Time", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "weekDayBitmask",
              "description": "Valor inteiro representando os dias da semana que o alerta funciona.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "comparisonRule",
              "description": "Regra de aplica\u00e7\u00e3o da f\u00f3rmula comparativa.",
              "type": {
                "kind": "ENUM",
                "name": "ComparisonRules",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serviceOrder",
              "description": "Indentifica se uma ordem de servi\u00e7o deve ser gerada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "active",
              "description": "Identifica o estado do alerta.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "comparisonValue",
              "description": "Valor a ser comparado na formula comparativa.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "companyId",
              "description": "ID da empresa \u00e0 qual este alerta est\u00e1 associado.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "emailAddresses",
              "description": "Lista de emails para notifica\u00e7\u00e3o deste alerta.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateFirmwarePayload",
          "description": "Mutation para Firmware",
          "fields": [
            {
              "name": "firmware",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Firmware", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateFirmwareInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o e informa\u00e7\u00f5es adicionais do firmware.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "releaseDate",
              "description": "Data de lan\u00e7amento do firmware.",
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "major",
              "description": "N\u00famero da vers\u00e3o major do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "minor",
              "description": "N\u00famero da vers\u00e3o minor do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "revision",
              "description": "N\u00famero da vers\u00e3o revision do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "compatibleHardwareIds",
              "description": "Hardwares compativeis com esta vers\u00e3o de firmware.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateHardwarePayload",
          "description": "Mutation para Hardware",
          "fields": [
            {
              "name": "hardware",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Hardware", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateHardwareInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o e informa\u00e7\u00f5es adicionais do hardware.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "releaseDate",
              "description": "Data de lan\u00e7amento do hardware.",
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "major",
              "description": "N\u00famero da vers\u00e3o major do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "minor",
              "description": "N\u00famero da vers\u00e3o minor do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "revision",
              "description": "N\u00famero da vers\u00e3o revision do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "compatibleFirmwareIds",
              "description": "Firmwares compativeis com esta vers\u00e3o de hardware.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateEquipmentTypePayload",
          "description": "Mutation para um tipo de equipamento",
          "fields": [
            {
              "name": "equipmentType",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateEquipmentTypeInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "major",
              "description": "N\u00famero da vers\u00e3o major do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "minor",
              "description": "N\u00famero da vers\u00e3o minor do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "revision",
              "description": "N\u00famero da vers\u00e3o revision do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o e informa\u00e7\u00f5es adicionais do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "equipmentParts",
              "description": "Lista de partes que comp\u00f5em o equipamento.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PartsInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "releaseDate",
              "description": "Data de release do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PartsInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "hardwareId",
              "description": "ID do hardware que comp\u00f5e esta parte.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "firmwareIds",
              "description": "Lista de IDs dos firmwares que comp\u00f5em esta parte.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateEquipmentPayload",
          "description": "Mutation para um equipamento",
          "fields": [
            {
              "name": "equipment",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Equipment", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateEquipmentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "companyId",
              "description": "ID da empresa a qual o equipamento pertence.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "macAddress",
              "description": "MAC do equipamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "equipmentTypeId",
              "description": "ID do modelo do equipamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "serialNumber",
              "description": "N\u00famero serial do equipamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "AlertRuleUpdatePayload",
          "description": "Mutation para Alert",
          "fields": [
            {
              "name": "alertRule",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "AlertRule", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "AlertRuleUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do Alerta a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome do Alerta.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "monitoredPropertyId",
              "description": "ID da propriedade monitorada pelo alerta.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "startDate",
              "description": "Data de in\u00edcio do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "endDate",
              "description": "Data de t\u00e9rmino do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Date", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "dailyStartTime",
              "description": "Hora de in\u00edcio do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Time", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "dailyStopTime",
              "description": "Hora de t\u00e9rmino do funcionamento do alerta.",
              "type": { "kind": "SCALAR", "name": "Time", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "weekDayBitmask",
              "description": "Valor inteiro representando os dias da semana que o alerta funciona.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "comparisonRule",
              "description": "Regra de aplica\u00e7\u00e3o da f\u00f3rmula comparativa.",
              "type": {
                "kind": "ENUM",
                "name": "ComparisonRules",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serviceOrder",
              "description": "Indentifica se uma ordem de servi\u00e7o deve ser gerada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "active",
              "description": "Identifica o estado do alerta.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "comparisonValue",
              "description": "Valor a ser comparado na formula comparativa.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "companyId",
              "description": "ID da empresa \u00e0 qual este alerta est\u00e1 associado.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "emailAddresses",
              "description": "Lista de emails para notifica\u00e7\u00e3o deste alerta.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CompanyUpdatePayload",
          "description": "Mutation de altera\u00e7\u00e3o (update) para Company",
          "fields": [
            {
              "name": "company",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Company", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CompanyUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID da empresa a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome da empresa.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "cnpj",
              "description": "CNPJ da empresa.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionUpdatePayload",
          "description": "Mutation para CustomPermission",
          "fields": [
            {
              "name": "customPermission",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermission",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CustomPermissionUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID da permiss\u00e3o a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "title",
              "description": "T\u00edtulo da permiss\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "service",
              "description": "Servi\u00e7o que disponibiliza o recurso associado \u00e0 permiss\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia da permiss\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CustomPermissionGroupUpdatePayload",
          "description": "Mutation para CustomPermission",
          "fields": [
            {
              "name": "customPermissionGroup",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "CustomPermissionGroup",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CustomPermissionGroupUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do grupo de permiss\u00f5es a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "title",
              "description": "Refer\u00eancia do grupo de permiss\u00f5es.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "reference",
              "description": "T\u00edtulo que representa o grupo de permiss\u00f5es.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "companyId",
              "description": "ID da empresa respons\u00e1vel pelo grupo de permiss\u00f5es.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "permissionsIds",
              "description": "IDs das permiss\u00f5es que comp\u00f5em o grupo de permiss\u00f5es",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
                }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmployeeUpdatePayload",
          "description": "Mutation para CustomPermission",
          "fields": [
            {
              "name": "employee",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Employee", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "EmployeeUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do Funcion\u00e1rio a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome do funcion\u00e1rio",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "cpf",
              "description": "CPF do funcion\u00e1rio",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "companiesIds",
              "description": "Empresas em que o funcion\u00e1rio atua.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
                }
              },
              "defaultValue": null
            },
            {
              "name": "userId",
              "description": "ID do usu\u00e1rio a qual \u00e9 atrelado esse status de funcion\u00e1rio.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "EmploymentUpdatePayload",
          "description": "Mutation de altera\u00e7\u00e3o para Employment",
          "fields": [
            {
              "name": "employment",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Employment",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "EmploymentUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "title",
              "description": "T\u00edtulo do relacionamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "permissionsIds",
              "description": "Ids das permiss\u00f5es garantidas pela rela\u00e7\u00e3o de emprego.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
                }
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "ID da rela\u00e7\u00e3o de emprego a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "userId",
              "description": "ID do usu\u00e1rio a qual \u00e9 atrelado esse status de funcion\u00e1rio.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationUpdatePayload",
          "description": "Mutation de altera\u00e7\u00e3o para Employment",
          "fields": [
            {
              "name": "installation",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "Installation",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InstallationUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "reference",
              "description": "Refer\u00eancia da instala\u00e7\u00e3o",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "siteId",
              "description": "ID do local da instala\u00e7\u00e3o",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "channel",
              "description": "Descri\u00e7\u00e3o do canal de comunica\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "deviceMac",
              "description": "MAC do equipamento atribu\u00eddo \u00e0 instala\u00e7\u00e3o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "parentInstallationId",
              "description": "ID da instala\u00e7\u00e3o pai desta instala\u00e7\u00e3o, caso possua.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "ID da instala\u00e7\u00e3o a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstallationSiteUpdatePayload",
          "description": "Mutation de altera\u00e7\u00e3o para Employment",
          "fields": [
            {
              "name": "installationSite",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "InstallationSite",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InstallationSiteUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "latitude",
              "description": "Latitude do ponto a ser consultado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Float", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "longitude",
              "description": "Longitude do ponto a ser consultado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Float", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "ID da instala\u00e7\u00e3o a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "companyId",
              "description": "ID da empresa \u00e0 qual pertence a instala\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "reference",
              "description": "Descri\u00e7\u00e3o da refer\u00eancia.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "country",
              "description": "Pa\u00eds em que a instala\u00e7\u00e3o reside.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "state",
              "description": "Pa\u00eds em que a instala\u00e7\u00e3o reside.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "city",
              "description": "Cidade em que a instala\u00e7\u00e3o reside.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "district",
              "description": "Bairro em que a instala\u00e7\u00e3o reside.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "street",
              "description": "Rua em que a instala\u00e7\u00e3o reside.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "number",
              "description": "N\u00famero do local da instala\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "details",
              "description": "Descri\u00e7\u00e3o de demais detalhes a respeito da instala\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "locationCode",
              "description": "C\u00f3digo do logradouro, utilizado por concession\u00e1rios de ilumina\u00e7\u00e3o p\u00fablica.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "InstalledMaterialUpdatePayload",
          "description": "Mutation para InstalledMaterial",
          "fields": [
            {
              "name": "installedMaterial",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "InstalledMaterial",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "InstalledMaterialUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do material instalado a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "materialId",
              "description": "ID do material instalado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "installationId",
              "description": "ID da installa\u00e7\u00e3o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "serialNumber",
              "description": "N\u00famero serial do material instalado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MaterialUpdatePayload",
          "description": "Mutation para Material",
          "fields": [
            {
              "name": "material",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Material", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MaterialUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "reference",
              "description": "Refer\u00eancia do material.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o do material.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "manufacturer",
              "description": "Descri\u00e7\u00e3o do fabricante do material.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "model",
              "description": "Descri\u00e7ao do modelo do material.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "isMeter",
              "description": "Define se este material \u00e9 um medidor.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "modifiers",
              "description": "Modificadores deste material",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ModifierInput",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "ID do material a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "MeasurementUnitUpdatePayload",
          "description": "Mutation para MeasurementUnit",
          "fields": [
            {
              "name": "measurementUnit",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "MeasurementUnit",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "MeasurementUnitUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "symbol",
              "description": "Sigla da unidade de medida. Ex: W",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome completo da unidade de medida. Ex: Watt",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "ID da unidade de medida a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ModifierUpdatePayload",
          "description": "Mutation para Modifier",
          "fields": [
            {
              "name": "modifier",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Modifier", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ModifierUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do modificador a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "materialId",
              "description": "ID do material ao qual este modificador \u00e9 atrelado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "propertyInId",
              "description": "Propriedade de entrada do modificador.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "propertyOutId",
              "description": "Propriedade de sa\u00edda do modificador.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "conversionFactor",
              "description": "Fator de convers\u00e3o do modificador.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Float", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "PropertyUpdatePayload",
          "description": "Mutation para Property",
          "fields": [
            {
              "name": "property",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Property", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "PropertyUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "sourceName",
              "description": "Nome de origem de uma propriedade.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "service",
              "description": "Servi\u00e7o respons\u00e1vel por esta propriedade.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Tradu\u00e7\u00e3o do nome de origem para o portugu\u00eas BR.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "shortName",
              "description": "Sigla da propriedade.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "measurementUnitId",
              "description": "Unidade de medida desta propriedade.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": "ID da propriedade a ser modificada.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateFirmwarePayload",
          "description": "Altera\u00e7\u00f5es em um Firmware salvo",
          "fields": [
            {
              "name": "firmware",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Firmware", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateFirmwareInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do firmware a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "major",
              "description": "N\u00famero da vers\u00e3o major do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "minor",
              "description": "N\u00famero da vers\u00e3o minor do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "revision",
              "description": "N\u00famero da vers\u00e3o revision do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o e informa\u00e7\u00f5es adicionais do firmware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "compatibleHardwareIds",
              "description": "Hardwares compativeis com esta vers\u00e3o de firmware.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateHardwarePayload",
          "description": "Altera\u00e7\u00f5es em um Hardware salvo",
          "fields": [
            {
              "name": "hardware",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Hardware", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateHardwareInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do hardware a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "major",
              "description": "N\u00famero da vers\u00e3o major do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "minor",
              "description": "N\u00famero da vers\u00e3o major do hadware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "revision",
              "description": "N\u00famero da vers\u00e3o major do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o e informa\u00e7\u00f5es adicionais do hardware.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "compatibleFirmwareIds",
              "description": "Firmwares compativeis com esta vers\u00e3o de hardware.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateEquipmentTypePayload",
          "description": "Altera\u00e7\u00f5es em um tipo de equipamento salvo",
          "fields": [
            {
              "name": "equipmentType",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "EquipmentType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateEquipmentTypeInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do modelo de equipamento a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "major",
              "description": "N\u00famero da vers\u00e3o major do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "minor",
              "description": "N\u00famero da vers\u00e3o minor do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "revision",
              "description": "N\u00famero da vers\u00e3o revision do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "reference",
              "description": "Refer\u00eancia do modelo de equipamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": "Descri\u00e7\u00e3o e informa\u00e7\u00f5es adicionaid do modelo de equipamento.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "equipmentParts",
              "description": "Lista de partes que comp\u00f5em o modelo de equipamento.",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PartsInput",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateEquipmentPayload",
          "description": "Altera\u00e7\u00f5es em um equipamento salvo",
          "fields": [
            {
              "name": "equipment",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "Equipment", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateEquipmentInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do equipamento a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "companyId",
              "description": "ID da empresa a qual o equipamento pertence.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "macAddress",
              "description": "MAC do equipamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "equipmentTypeId",
              "description": "ID do modelo do equipamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "serialNumber",
              "description": "N\u00famero serial do equipamento.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "CreateServicePayload",
          "description": null,
          "fields": [
            {
              "name": "service",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ServiceType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "CreateServiceInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "name",
              "description": "Nome do servi\u00e7o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "version",
              "description": "Vers\u00e3o do servi\u00e7o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "host",
              "description": "Host do servi\u00e7o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "port",
              "description": "Porta do servi\u00e7o.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "Int", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UpdateServicePayload",
          "description": null,
          "fields": [
            {
              "name": "service",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ServiceType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UpdateServiceInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do servi\u00e7o a ser modificado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome do servi\u00e7o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "version",
              "description": "Vers\u00e3o do servi\u00e7o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "host",
              "description": "Host do servi\u00e7o.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "port",
              "description": "Porta do servi\u00e7o.",
              "type": { "kind": "SCALAR", "name": "Int", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "DeleteServicePayload",
          "description": null,
          "fields": [
            {
              "name": "service",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ServiceType",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "DeleteServiceInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do servi\u00e7o a ser removido.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserCreatePayload",
          "description": "Cria um usu\u00e1rio para o sistema, vinculando-o automaticamente \u00e0 um funcion\u00e1rio,\ncom ou sem empresa definida.",
          "fields": [
            {
              "name": "user",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "UserType", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UserCreateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "username",
              "description": "Nome de usu\u00e1rio",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": "Senha de usu\u00e1rio",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "employeeId",
              "description": "ID do empregado.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome completo do empregado",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "cpf",
              "description": "CPF do empregado.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "user",
              "description": "ID do usu\u00e1rio.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "companiesIds",
              "description": "Lista de IDs de empresas que o usu\u00e1rio pertence",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "isSuperuser",
              "description": "Se este usu\u00e1rio ter\u00e1 poderes administrativos",
              "type": { "kind": "SCALAR", "name": "Boolean", "ofType": null },
              "defaultValue": "false"
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserUpdatePayload",
          "description": "Atualiza os dados de um usu\u00e1rio no sistema.",
          "fields": [
            {
              "name": "user",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "UserType", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UserUpdateInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do usu\u00e1rio a ser alterado.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "username",
              "description": "Nome de usu\u00e1rio",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": "Senha de usu\u00e1rio",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "employeeId",
              "description": "ID do empregado.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": "Nome completo do empregado",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "cpf",
              "description": "CPF do empregado.",
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "user",
              "description": "ID do usu\u00e1rio.",
              "type": { "kind": "SCALAR", "name": "ID", "ofType": null },
              "defaultValue": null
            },
            {
              "name": "companiesIds",
              "description": "Lista de IDs de empresas que o usu\u00e1rio pertence",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "isSuperuser",
              "description": "Se este usu\u00e1rio ter\u00e1 poderes administrativos",
              "type": { "kind": "SCALAR", "name": "Boolean", "ofType": null },
              "defaultValue": "false"
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "UserDeletePayload",
          "description": "Remove um usu\u00e1rio do sistema e, consequentemente o funcion\u00e1rio a ele vinculado.",
          "fields": [
            {
              "name": "message",
              "description": "Mensagem informativa sobre a remo\u00e7\u00e3o do usu\u00e1rio.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "UserDeleteInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": "ID do usu\u00e1rio a ser removido.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "ID", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "LogInPayload",
          "description": "Retorno da opera\u00e7\u00e3o de LogIn",
          "fields": [
            {
              "name": "user",
              "description": "Dados do usu\u00e1rio logado no sistema.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "UserType", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "LogInInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "username",
              "description": "Nome do usu\u00e1rio.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": "Senha do usu\u00e1rio.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "defaultValue": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "LogOutPayload",
          "description": "Retorno da opera\u00e7\u00e3o de LogOut",
          "fields": [
            {
              "name": "message",
              "description": "Mensagem informativa sobre o logout do usu\u00e1rio.",
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "clientMutationId",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "LogOutInput",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "clientMutationId",
              "description": null,
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Schema",
          "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation and subscription operations.",
          "fields": [
            {
              "name": "types",
              "description": "A list of all types supported by this server.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "queryType",
              "description": "The type that query operations will be rooted at.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "OBJECT", "name": "__Type", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mutationType",
              "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "__Type", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subscriptionType",
              "description": "If this server support subscription, the type that subscription operations will be rooted at.",
              "args": [],
              "type": { "kind": "OBJECT", "name": "__Type", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "directives",
              "description": "A list of all directives supported by this server.",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Directive",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Type",
          "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
          "fields": [
            {
              "name": "kind",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "__TypeKind",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "fields",
              "description": null,
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Field",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "interfaces",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "possibleTypes",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "enumValues",
              "description": null,
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__EnumValue",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "inputFields",
              "description": null,
              "args": [],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__InputValue",
                    "ofType": null
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ofType",
              "description": null,
              "args": [],
              "type": { "kind": "OBJECT", "name": "__Type", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__TypeKind",
          "description": "An enum describing what kind of type a given `__Type` is",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "SCALAR",
              "description": "Indicates this type is a scalar.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "OBJECT",
              "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INTERFACE",
              "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNION",
              "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ENUM",
              "description": "Indicates this type is an enum. `enumValues` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_OBJECT",
              "description": "Indicates this type is an input object. `inputFields` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LIST",
              "description": "Indicates this type is a list. `ofType` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NON_NULL",
              "description": "Indicates this type is a non-null. `ofType` is a valid field.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Field",
          "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "OBJECT", "name": "__Type", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__InputValue",
          "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "OBJECT", "name": "__Type", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "defaultValue",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__EnumValue",
          "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Directive",
          "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
          "fields": [
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": { "kind": "SCALAR", "name": "String", "ofType": null }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": { "kind": "SCALAR", "name": "String", "ofType": null },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "locations",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "ENUM",
                      "name": "__DirectiveLocation",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "onOperation",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`."
            },
            {
              "name": "onFragment",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`."
            },
            {
              "name": "onField",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": true,
              "deprecationReason": "Use `locations`."
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__DirectiveLocation",
          "description": "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "QUERY",
              "description": "Location adjacent to a query operation.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "MUTATION",
              "description": "Location adjacent to a mutation operation.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SUBSCRIPTION",
              "description": "Location adjacent to a subscription operation.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIELD",
              "description": "Location adjacent to a field.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FRAGMENT_DEFINITION",
              "description": "Location adjacent to a fragment definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FRAGMENT_SPREAD",
              "description": "Location adjacent to a fragment spread.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INLINE_FRAGMENT",
              "description": "Location adjacent to an inline fragment.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SCHEMA",
              "description": "Location adjacent to a schema definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SCALAR",
              "description": "Location adjacent to a scalar definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "OBJECT",
              "description": "Location adjacent to an object definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "FIELD_DEFINITION",
              "description": "Location adjacent to a field definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ARGUMENT_DEFINITION",
              "description": "Location adjacent to an argument definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INTERFACE",
              "description": "Location adjacent to an interface definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNION",
              "description": "Location adjacent to a union definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ENUM",
              "description": "Location adjacent to an enum definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ENUM_VALUE",
              "description": "Location adjacent to an enum value definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_OBJECT",
              "description": "Location adjacent to an input object definition.",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_FIELD_DEFINITION",
              "description": "Location adjacent to an input object field definition.",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        }
      ],
      "directives": [
        {
          "name": "include",
          "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
          "locations": ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
          "args": [
            {
              "name": "if",
              "description": "Included when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ]
        },
        {
          "name": "skip",
          "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
          "locations": ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
          "args": [
            {
              "name": "if",
              "description": "Skipped when true.",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ]
        }
      ]
    }
  }
