export const data = {
  __schema: {
    queryType: { name: "Query" },
    mutationType: { name: "Mutation" },
    subscriptionType: null,
    types: [
      {
        kind: "OBJECT",
        name: "Query",
        description: null,
        fields: [
          {
            name: "node",
            description: "The ID of the object",
            args: [
              {
                name: "id",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: { kind: "SCALAR", name: "ID", ofType: null }
                },
                defaultValue: null
              }
            ],
            type: { kind: "INTERFACE", name: "Node", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "company",
            description: "Lists all companies from the system.",
            args: [
              {
                name: "name",
                description: "Company name.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "cnpj",
                description: "Company CNPJ.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "CompanyConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "employee",
            description: "Lists all employees.",
            args: [
              {
                name: "companyId",
                description:
                  "ID from the company that receives the employee services.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "EmployeeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "employment",
            description: "Lists all employment relations.",
            args: [
              {
                name: "companyId",
                description: "Company ID that manages the employment relation.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "title",
                description: "Role title.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "EmploymentConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installation",
            description: "Lists all installations.",
            args: [
              {
                name: "companyId",
                description: "ID from the company that owns the installation.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "installationId",
                description: "Installation ID.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "latitude",
                description: "Consulted site latitude.",
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              },
              {
                name: "longitude",
                description: "Consulted site longitude.",
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              },
              {
                name: "radius",
                description:
                  "Radius distance in meters from the consulted site.",
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstallationConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installationSite",
            description: "Lists all installation site.",
            args: [
              {
                name: "companyId",
                description: "Company ID that owns installation.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "latitude",
                description: "Consulted site latitude.",
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              },
              {
                name: "longitude",
                description: "Consulted site longitude.",
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              },
              {
                name: "radius",
                description:
                  "Radius distance in meters from the consulted site.",
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstallationSiteConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "material",
            description: "Lists all materials.",
            args: [
              {
                name: "manufacturer",
                description: "Material manufacturer reference.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "model",
                description: "Material model.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "MaterialConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "measurementUnit",
            description: "Lists all measurement units.",
            args: [
              {
                name: "symbol",
                description: "Measurement unit initials. Ex: W",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: "Measurement unit complete name. Ex: Watt",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "MeasurementUnitConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "property",
            description: "Lists all properties.",
            args: [
              {
                name: "sourceName",
                description: "Property source name.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "PropertyConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "alertRules",
            description: "Lists all alert rules.",
            args: [
              {
                name: "companyId",
                description: "Id from the company that manages the alert.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "propertyId",
                description: "Monitored property ID.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: "Alert name.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "weekDayBitmask",
                description:
                  "Integer number that represents the week days that the alert operates.",
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "AlertRuleConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "firmware",
            description: "Lists all firmwares.",
            args: [
              {
                name: "name",
                description: "Firmware name.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "major",
                description: "Major number from firmware version.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "minor",
                description: "Minor number from firmware version.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "FirmwareConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "hardware",
            description: "Lists all hardwares.",
            args: [
              {
                name: "name",
                description: "Hardware name",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "major",
                description: "Major number from firmware version.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "minor",
                description: "Minor number from firmware version.",
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "HardwareConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "equipmentType",
            description: "Lists equipment types.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "EquipmentTypeConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "equipment",
            description: "Lists all equipments.",
            args: [
              {
                name: "installationId",
                description:
                  "Installation in which the equipment will be installed.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "deviceMacs",
                description: "List of equipment MACs",
                type: {
                  kind: "LIST",
                  name: null,
                  ofType: { kind: "SCALAR", name: "String", ofType: null }
                },
                defaultValue: null
              },
              {
                name: "companyId",
                description: "Company that owns the equipment.",
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "EquipmentConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "gateway",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Status", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "service",
            description: null,
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "version",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "host",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "port",
                description: null,
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "ServiceTypeConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "viewer",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "UserType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "user",
            description: "Lists information for one or all system users.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "email",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username_Icontains",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username_Istartswith",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "employee",
                description: null,
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              },
              {
                name: "token",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "UserTypeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "availablePermissions",
            description:
              "Returns all available permissions registered in the system.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "contentType",
                description: null,
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "codename",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PermissionTypeConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "availableGroups",
            description: "Returns all available permission groups.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "permissions",
                description: null,
                type: {
                  kind: "LIST",
                  name: null,
                  ofType: { kind: "SCALAR", name: "ID", ofType: null }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "GroupTypeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INTERFACE",
        name: "Node",
        description: "An object with an ID",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: [
          { kind: "OBJECT", name: "Company", ofType: null },
          { kind: "OBJECT", name: "Employee", ofType: null },
          { kind: "OBJECT", name: "Employment", ofType: null },
          { kind: "OBJECT", name: "Installation", ofType: null },
          { kind: "OBJECT", name: "InstallationSite", ofType: null },
          { kind: "OBJECT", name: "Geoposition", ofType: null },
          { kind: "OBJECT", name: "Equipment", ofType: null },
          { kind: "OBJECT", name: "EquipmentType", ofType: null },
          { kind: "OBJECT", name: "EquipmentPart", ofType: null },
          { kind: "OBJECT", name: "Hardware", ofType: null },
          { kind: "OBJECT", name: "Firmware", ofType: null },
          { kind: "OBJECT", name: "InstalledMaterial", ofType: null },
          { kind: "OBJECT", name: "Material", ofType: null },
          { kind: "OBJECT", name: "Modifier", ofType: null },
          { kind: "OBJECT", name: "Property", ofType: null },
          { kind: "OBJECT", name: "MeasurementUnit", ofType: null },
          { kind: "OBJECT", name: "PropertyFields", ofType: null },
          { kind: "OBJECT", name: "AlertRule", ofType: null },
          { kind: "OBJECT", name: "Email", ofType: null },
          { kind: "OBJECT", name: "ServiceType", ofType: null },
          { kind: "OBJECT", name: "UserType", ofType: null },
          { kind: "OBJECT", name: "GroupType", ofType: null },
          { kind: "OBJECT", name: "PermissionType", ofType: null }
        ]
      },
      {
        kind: "SCALAR",
        name: "ID",
        description:
          'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CompanyConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "CompanyEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PageInfo",
        description: null,
        fields: [
          {
            name: "hasNextPage",
            description: "When paginating forwards, are there more items?",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "hasPreviousPage",
            description: "When paginating backwards, are there more items?",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "startCursor",
            description: "When paginating backwards, the cursor to continue.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "endCursor",
            description: "When paginating forwards, the cursor to continue.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "SCALAR",
        name: "Boolean",
        description: "The `Boolean` scalar type represents `true` or `false`.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "SCALAR",
        name: "String",
        description:
          "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CompanyEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Company", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Company",
        description: "Company properties. ",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "Company name.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cnpj",
            description: "Company CNPJ.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "SCALAR",
        name: "Int",
        description:
          "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31 - 1) and 2^31 - 1 since represented in JSON as double-precision floating point numbers specifiedby [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point).",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EmployeeConnection",
        description:
          "Class that makes one-to-many relationships possible \nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "EmployeeEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EmployeeEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Employee", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Employee",
        description: "Employee properties. ",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "Employee name",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cpf",
            description: "Employee CPF",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "companies",
            description: "IDs from the companies in which the employee works.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "CompanyConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "user",
            description: "User ID.",
            args: [],
            type: { kind: "SCALAR", name: "ID", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EmploymentConnection",
        description:
          "Class that makes one-to-many relationships possible \nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "EmploymentEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EmploymentEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Employment", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Employment",
        description:
          "Properties from the relation between company and employee. ",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "company",
            description: "Company description.",
            args: [],
            type: { kind: "OBJECT", name: "Company", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "employee",
            description: "Employee description.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "EmployeeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "title",
            description: "Employment relation title.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "dateJoined",
            description: "Admission date details.",
            args: [],
            type: { kind: "SCALAR", name: "Date", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "SCALAR",
        name: "Date",
        description:
          "The `Date` scalar type represents a Date\nvalue as specified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "InstallationEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "nodes",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "Installation", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Installation", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Installation",
        description: "Installation properties",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "reference",
            description: "Installation reference.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "site",
            description: "Installation site.",
            args: [],
            type: { kind: "OBJECT", name: "InstallationSite", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "channel",
            description: "Communication channel.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "equipments",
            description: "Installed equipments.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "EquipmentConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installedMaterials",
            description: "Materials associated to the installation.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstalledMaterialConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "parentInstallation",
            description: "Parent installation detail, in case it exists.",
            args: [],
            type: { kind: "OBJECT", name: "Installation", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "deletionDatetime",
            description: "Installation deletion date and hour.",
            args: [],
            type: { kind: "SCALAR", name: "DateTime", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "isDeleted",
            description: "Identify if the installation is deleted.",
            args: [],
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "properties",
            description: "Installation related properties.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "PropertyConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationSite",
        description: "Installation site properties. ",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "reference",
            description: "Site reference.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "geoposition",
            description: "Latitude and longitude values.",
            args: [],
            type: { kind: "OBJECT", name: "Geoposition", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "company",
            description: "Company description.",
            args: [],
            type: { kind: "OBJECT", name: "Company", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installations",
            description: "Installations that are located in the site.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstallationConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "country",
            description: "Country in which the site is located.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "state",
            description: "State in which the site is located.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "city",
            description: "City in which the site is located.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "district",
            description: "District in which the site is located.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "street",
            description: "Street in which the site is located.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "number",
            description: "Site location number.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "details",
            description: "Additional site details.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "locationCode",
            description: "Location code used by public lighting dealers.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Geoposition",
        description: "Installation geoposition properties. ",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "latitude",
            description: "Latitude description. ",
            args: [],
            type: { kind: "SCALAR", name: "Float", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "longitude",
            description: "Longitude description. ",
            args: [],
            type: { kind: "SCALAR", name: "Float", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "SCALAR",
        name: "Float",
        description:
          "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "EquipmentEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "nodes",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "Equipment", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Equipment", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Equipment",
        description: "Equipment properties",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "equipmentType",
            description: "Equipment type.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "EquipmentTypeConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "serialNumber",
            description: "Equipment serial number.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "macAddress",
            description: "Equipment MAC address.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "company",
            description: "Equipment owner company.",
            args: [],
            type: { kind: "OBJECT", name: "Company", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentTypeConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "EquipmentTypeEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentTypeEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "EquipmentType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentType",
        description: "Equipment Type properties.",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "releaseDate",
            description: "Equipment type release date.",
            args: [],
            type: { kind: "SCALAR", name: "Date", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: "Equipment type description.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "reference",
            description: "Equipment type reference.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "equipmentParts",
            description: "Equipment type list of parts.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "EquipmentPartConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "major",
            description: "Revision number from firmware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "minor",
            description: "Revision number from firmware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "revision",
            description: "Revision number from firmware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentPartConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "EquipmentPartEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentPartEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "EquipmentPart", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EquipmentPart",
        description: "Equipment part properties.",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "hardware",
            description: "Hardware that compounds the equipment part.",
            args: [
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "Hardware", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "firmwares",
            description: "Firmware that compounds the equipment part.",
            args: [
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "FirmwareConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Hardware",
        description: "Hardware properties",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "compatibleFirmware",
            description: "Compatible Firmware with this hardware version.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "FirmwareConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "major",
            description: "Major number from hardware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "minor",
            description: "Minor number from hardware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "revision",
            description: "Revision number from hardware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: "Hardware description.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "releaseDate",
            description: "Hardware release date.",
            args: [],
            type: { kind: "SCALAR", name: "Date", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "Hardware name",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "FirmwareConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "FirmwareEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "FirmwareEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Firmware", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Firmware",
        description: "Firmware properties",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "compatibleHardware",
            description: "Compatible hardwares with this firmware version.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "HardwareConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "major",
            description: "Major number from firmware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "minor",
            description: "Minor number from firmware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "revision",
            description: "Revision number from firmware version.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: "Firmware description.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "releaseDate",
            description: "Firmware release date.",
            args: [],
            type: { kind: "SCALAR", name: "Date", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "Firmware name.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "HardwareConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "HardwareEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "HardwareEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Hardware", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstalledMaterialConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "InstalledMaterialEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstalledMaterialEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "InstalledMaterial", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstalledMaterial",
        description: "Representa\u00e7\u00e3o de um material instalado",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "serialNumber",
            description: "Material serial number.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "material",
            description: "Installed material.",
            args: [],
            type: { kind: "OBJECT", name: "Material", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installation",
            description: "Installetion in which the material is installed.",
            args: [],
            type: { kind: "OBJECT", name: "Installation", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "startDatetime",
            description: "Material installation date and hour.",
            args: [],
            type: { kind: "SCALAR", name: "DateTime", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "endDatetime",
            description: "Material removal date and hour.",
            args: [],
            type: { kind: "SCALAR", name: "DateTime", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Material",
        description: "Material properties. ",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "reference",
            description: "Material reference.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: "Material description.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "manufacturer",
            description: "material manufacturer.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "model",
            description: "Material model.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "isMeter",
            description: "Defines if the material is a meter or not.",
            args: [],
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "modifiers",
            description: "Material modifiers.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "ModifierConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ModifierConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "ModifierEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ModifierEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Modifier", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Modifier",
        description: "Modifier properties.",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "propertyIn",
            description: "Modifier input property.",
            args: [],
            type: { kind: "OBJECT", name: "Property", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "propertyOut",
            description: "Modifier output property.",
            args: [],
            type: { kind: "OBJECT", name: "Property", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "conversionFactor",
            description: "Modifier conversion factor.",
            args: [],
            type: { kind: "SCALAR", name: "Float", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Property",
        description: "Property representation",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "sourceName",
            description: "Property origin name.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "Property translated name.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "shortName",
            description: "Property initials.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "service",
            description: "Service that manages the property",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "measurementUnit",
            description: "Property measurement unit.",
            args: [],
            type: { kind: "OBJECT", name: "MeasurementUnit", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "values",
            description: "Transmitted property values.",
            args: [
              {
                name: "startDatetime",
                description: "Initial Date/Hour.",
                type: { kind: "SCALAR", name: "DateTime", ofType: null },
                defaultValue: null
              },
              {
                name: "endDatetime",
                description: "Final Date/Hour.",
                type: { kind: "SCALAR", name: "DateTime", ofType: null },
                defaultValue: null
              },
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PropertyFieldsConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MeasurementUnit",
        description: "Measurement unit representation",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "Measurement unit complete name. Ex: Watt",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "symbol",
            description: "Measurement unit initial. Ex: W",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PropertyFieldsConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "PropertyFieldsEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "nodes",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "PropertyFields", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PropertyFieldsEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "PropertyFields", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PropertyFields",
        description: "Properties fields.",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "value",
            description: "Property value.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "timestampApp",
            description: "Messages query timestamp.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "timestampOrigin",
            description: "Message generation timestamp.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "timestampReceive",
            description: "Received message timestamp",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "timestampReference",
            description: "Collected data timestamp from the digital meter.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "SCALAR",
        name: "DateTime",
        description:
          "The `DateTime` scalar type represents a DateTime\nvalue as specified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PropertyConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "PropertyEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "nodes",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "Property", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PropertyEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Property", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationSiteConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "InstallationSiteEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationSiteEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "InstallationSite", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MaterialConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "MaterialEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MaterialEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Material", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MeasurementUnitConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "MeasurementUnitEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MeasurementUnitEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "MeasurementUnit", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "AlertRuleConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "AlertRuleEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "nodes",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "AlertRule", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "AlertRuleEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "AlertRule", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "AlertRule",
        description: "Alert properties",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "Alert name.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "monitoredProperty",
            description: "Property being monitored by the alert rule.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "Property", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "startDate",
            description: "Alert operation start date",
            args: [],
            type: { kind: "SCALAR", name: "Date", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "endDate",
            description: "Alert operation end date.",
            args: [],
            type: { kind: "SCALAR", name: "Date", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "dailyStartTime",
            description: "Alert operation start time.",
            args: [],
            type: { kind: "SCALAR", name: "Time", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "dailyStopTime",
            description: "Alert operation stop time.",
            args: [],
            type: { kind: "SCALAR", name: "Time", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "weekDayBitmask",
            description:
              "Integer number that represents the week days that the alert operates.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "comparisonRule",
            description: "Comparison rule that triggers the alert.",
            args: [],
            type: { kind: "ENUM", name: "ComparisonRules", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "serviceOrder",
            description: "Identify if the service order is requested or not. ",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "active",
            description: "Identify the alert state.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "comparisonValue",
            description: "Comparison value used to activate the alert.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "company",
            description: "Company that manages the alert.",
            args: [],
            type: { kind: "OBJECT", name: "Company", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "emailAddresses",
            description:
              "List of emails that the alert will comunicate when it is activated.",
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "EmailConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "SCALAR",
        name: "Time",
        description:
          "The `Time` scalar type represents a Time value as\nspecified by\n[iso8601](https://en.wikipedia.org/wiki/ISO_8601).",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "ENUM",
        name: "ComparisonRules",
        description: "Number representation for comparison rules.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "EQUALS",
            description: "Equal comparison rule.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "NOT_EQUALS",
            description: "Different comparison rule.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "GREATER_THAN",
            description: "Greater comparison rule.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "GREATER_EQUAL",
            description: "Greater or equal comparison rule.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "LESS_THAN",
            description: "Less comparison rule.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "LESS_EQUAL",
            description: "Less or equal comparison rule.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "ON_CHANGE",
            description: "Event for changes of state.",
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EmailConnection",
        description:
          "Class that makes one-to-many relationships possible\nand offers pagination and slicing options.",
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "EmailEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "count",
            description: "Number of registered elements.",
            args: [],
            type: { kind: "SCALAR", name: "Int", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EmailEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "Email", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Email",
        description: "Email properties",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "emailAddress",
            description: "Electronic address.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Status",
        description: "Representa\u00e7\u00e3o do release do bifr\u00f6st. ",
        fields: [
          {
            name: "name",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "version",
            description: "Vers\u00e3o atual do bifr\u00f6st.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "services",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "Services", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Services",
        description: null,
        fields: [
          {
            name: "name",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "version",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ServiceTypeConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "ServiceTypeEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ServiceTypeEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "ServiceType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ServiceType",
        description: "Servi\u00e7os registrados no bifrost.",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "version",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "host",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "port",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UserType",
        description: "Represents the user attached to the employee",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "password",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "lastLogin",
            description: "",
            args: [],
            type: { kind: "SCALAR", name: "DateTime", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "isSuperuser",
            description:
              "Indica que este usu\u00e1rio tem todas as permiss\u00f5es sem atribu\u00ed-las explicitamente.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "groups",
            description: null,
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "permissions",
                description: null,
                type: {
                  kind: "LIST",
                  name: null,
                  ofType: { kind: "SCALAR", name: "ID", ofType: null }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "GroupTypeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "userPermissions",
            description: null,
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "contentType",
                description: null,
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "codename",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PermissionTypeConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "username",
            description:
              "Obrigat\u00f3rio. 150 caracteres ou menos. Letras, n\u00fameros e @/./+/-/_ apenas.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "firstName",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "lastName",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "email",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "isStaff",
            description:
              "Indica que usu\u00e1rio consegue acessar este site de administra\u00e7\u00e3o.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "isActive",
            description:
              "Indica que o usu\u00e1rio ser\u00e1 tratado como ativo. Ao inv\u00e9s de excluir contas de usu\u00e1rio, desmarque isso.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "dateJoined",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "DateTime", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "employee",
            description: "Dados do empregador associado ao usu\u00e1rio.",
            args: [],
            type: { kind: "OBJECT", name: "Employee", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "token",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "resetRequested",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupTypeConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "GroupTypeEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupTypeEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "GroupType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupType",
        description: "Representation of system permissions groups.",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "permissions",
            description: null,
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "contentType",
                description: null,
                type: { kind: "SCALAR", name: "ID", ofType: null },
                defaultValue: null
              },
              {
                name: "codename",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PermissionTypeConnection",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "userSet",
            description: null,
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "email",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username_Icontains",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username_Istartswith",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "employee",
                description: null,
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              },
              {
                name: "token",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "UserTypeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PermissionTypeConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "OBJECT",
                  name: "PermissionTypeEdge",
                  ofType: null
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PermissionTypeEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "PermissionType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PermissionType",
        description: "Representation of system permissions.",
        fields: [
          {
            name: "id",
            description: "The ID of the object.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "codename",
            description: "",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "groupSet",
            description: null,
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "name",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "permissions",
                description: null,
                type: {
                  kind: "LIST",
                  name: null,
                  ofType: { kind: "SCALAR", name: "ID", ofType: null }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "GroupTypeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "userSet",
            description: null,
            args: [
              {
                name: "before",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "after",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "first",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "last",
                description: null,
                type: { kind: "SCALAR", name: "Int", ofType: null },
                defaultValue: null
              },
              {
                name: "email",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username_Icontains",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "username_Istartswith",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              },
              {
                name: "employee",
                description: null,
                type: { kind: "SCALAR", name: "Float", ofType: null },
                defaultValue: null
              },
              {
                name: "token",
                description: null,
                type: { kind: "SCALAR", name: "String", ofType: null },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "UserTypeConnection", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [{ kind: "INTERFACE", name: "Node", ofType: null }],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UserTypeConnection",
        description: null,
        fields: [
          {
            name: "pageInfo",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "PageInfo", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "edges",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "OBJECT", name: "UserTypeEdge", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UserTypeEdge",
        description: null,
        fields: [
          {
            name: "node",
            description: "The item at the end of the edge",
            args: [],
            type: { kind: "OBJECT", name: "UserType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "cursor",
            description: "A cursor for use in pagination",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "Mutation",
        description: null,
        fields: [
          {
            name: "companyCreate",
            description: "Registers a company.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "CompanyCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "CompanyCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installationSiteCreate",
            description: "Registers a site.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "InstallationSiteCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstallationSiteCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installationCreate",
            description: "Registers an installation.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "InstallationCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstallationCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "materialCreate",
            description: "Registers a material.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "MaterialCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "MaterialCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "modifierCreate",
            description: "Registers a modifier.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "ModifierCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "ModifierCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "measurementUnitCreate",
            description: "Registers a measurement unit.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "MeasurementUnitCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "MeasurementUnitCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "propertyCreate",
            description: "Registers a property.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "PropertyCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PropertyCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installedMaterialCreate",
            description: "Registers a installed material.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "InstalledMaterialCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstalledMaterialCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "alertRuleCreate",
            description: "Registers a alert rule.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "AlertRuleCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "AlertRuleCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "createFirmware",
            description: "Registers a firmware.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "CreateFirmwareInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "CreateFirmwarePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "createHardware",
            description: "Registers a hardware.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "CreateHardwareInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "CreateHardwarePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "createEquipmentType",
            description: "Registers an equipment type.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "CreateEquipmentTypeInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "CreateEquipmentTypePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "createEquipment",
            description: "Registers an equipment.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "CreateEquipmentInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "CreateEquipmentPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "alertRuleUpdate",
            description: "Updates a alert rule.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "AlertRuleUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "AlertRuleUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "companyUpdate",
            description: "Updates a company.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "CompanyUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "CompanyUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "employmentUpdate",
            description: "Updates an employment.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "EmploymentUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "EmploymentUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installationUpdate",
            description: "Updates an installation.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "InstallationUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstallationUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installationSiteUpdate",
            description: "Updates a site.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "InstallationSiteUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstallationSiteUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "installedMaterialUpdate",
            description: "Updates a installed material.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "InstalledMaterialUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "InstalledMaterialUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "materialUpdate",
            description: "Updates a material.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "MaterialUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "MaterialUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "measurementUnitUpdate",
            description: "Updates a measurement unit.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "MeasurementUnitUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "MeasurementUnitUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "modifierUpdate",
            description: "Updates a modifier.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "ModifierUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "ModifierUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "propertyUpdate",
            description: "Updates a property.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "PropertyUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PropertyUpdatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "updateFirmware",
            description: "Updates a firmware.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UpdateFirmwareInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "UpdateFirmwarePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "updateHardware",
            description: "Updates a hardware.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UpdateHardwareInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "UpdateHardwarePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "updateEquipmentType",
            description: "Updates an equipment type.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UpdateEquipmentTypeInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "UpdateEquipmentTypePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "updateEquipment",
            description: "Updates an equipment.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UpdateEquipmentInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "UpdateEquipmentPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "createService",
            description: null,
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "CreateServiceInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "CreateServicePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "updateService",
            description: null,
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UpdateServiceInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "UpdateServicePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "deleteService",
            description: null,
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "DeleteServiceInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "DeleteServicePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "permissionSet",
            description: "Assigns permissions to a user.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "PermissionSetInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PermissionSetPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "permissionUnset",
            description: "Removes permissions for a user.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "PermissionUnsetInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PermissionUnsetPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "permissionCreate",
            description: "Creates a permission on the system.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "PermissionCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "PermissionCreatePayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "groupCreate",
            description: "Creates a group permission.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "GroupCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "GroupCreatePayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "groupDelete",
            description: "Removes a group permission.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "GroupDeleteInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "GroupDeletePayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "groupSetUser",
            description: "Includes a user to a permission group.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "GroupSetUserInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "GroupSetUserPayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "groupUnsetUser",
            description: "Removes a user from a permission group.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "GroupUnsetUserInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "GroupUnsetUserPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "groupSetPermission",
            description: "Includes a set of permission in a group.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "GroupSetPermissionInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "GroupSetPermissionPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "userCreate",
            description: "Cria um usu\u00e1rio de sistema.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UserCreateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "UserCreatePayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "userUpdate",
            description: "Atualiza um usu\u00e1rio de sistema.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UserUpdateInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "UserUpdatePayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "userDelete",
            description: "Remove um usu\u00e1rio de sistema.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "UserDeleteInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "UserDeletePayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "login",
            description: "Inicia a sess\u00e3o de um usu\u00e1rio no sistema.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "LogInInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "LogInPayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "logout",
            description: "Encerra a sess\u00e3o de um usu\u00e1rio no sistema.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "LogOutInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: { kind: "OBJECT", name: "LogOutPayload", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "resetPassword",
            description: "Requests a password reset.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "ResetPasswordInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "ResetPasswordPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "setNewPassword",
            description: "Resets the user password.",
            args: [
              {
                name: "input",
                description: null,
                type: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "INPUT_OBJECT",
                    name: "SetNewPasswordInput",
                    ofType: null
                  }
                },
                defaultValue: null
              }
            ],
            type: {
              kind: "OBJECT",
              name: "SetNewPasswordPayload",
              ofType: null
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CompanyCreatePayload",
        description: "Creates a Company based on given input data",
        fields: [
          {
            name: "company",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Company", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "CompanyCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "name",
            description: "Company name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "cnpj",
            description: "Company CNPJ.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationSiteCreatePayload",
        description: "Creates an Installation Site based on given input data",
        fields: [
          {
            name: "site",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "InstallationSite", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "InstallationSiteCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "latitude",
            description: "Site's latitude.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Float", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "longitude",
            description: "Site's longitude.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Float", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "companyId",
            description: "ID from the company that owns the installation.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "reference",
            description: "Installation site reference.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "country",
            description: "Country in which the site is located.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "state",
            description: "State in which the site is located.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "city",
            description: "City in which the site is located.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "district",
            description: "District in which the site is located.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "street",
            description: "Street in which the site is located.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "number",
            description: "Site location number.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "details",
            description: "Additional site details.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "locationCode",
            description: "Location code used by public lighting dealers.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationCreatePayload",
        description: "Creates an Installation based on given input data",
        fields: [
          {
            name: "installation",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Installation", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "InstallationCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "reference",
            description: "Installation reference.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "siteId",
            description: "Site ID.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "channel",
            description: "Communication channel number.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "deviceMac",
            description: "MAC from the installed device.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "parentInstallationId",
            description: "Parent installation detail, in case it exists.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MaterialCreatePayload",
        description: "Creates a Material based on given input data",
        fields: [
          {
            name: "material",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Material", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "MaterialCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "reference",
            description: "Material reference.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "description",
            description: "Material description.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "manufacturer",
            description: "Material manufacturer.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "model",
            description: "Material model.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "isMeter",
            description: "Defines rather the material is a meter or not.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "modifiers",
            description: "Material modifiers",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "INPUT_OBJECT",
                  name: "ModifierInput",
                  ofType: null
                }
              }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "ModifierInput",
        description: "Modifier input data.",
        fields: null,
        inputFields: [
          {
            name: "propertyInId",
            description: "Modifier input property.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "propertyOutId",
            description: "Modifier output property.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "conversionFactor",
            description: "Modifier conversion factor.",
            type: { kind: "SCALAR", name: "Float", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ModifierCreatePayload",
        description: "Creates a Modifier based on given input data",
        fields: [
          {
            name: "modifier",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Modifier", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "ModifierCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "materialId",
            description:
              "ID from the material that the modifier is attached to.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "propertyInId",
            description: "Modifier input property.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "propertyOutId",
            description: "Modifier output property.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "conversionFactor",
            description: "Material modifiers",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Float", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MeasurementUnitCreatePayload",
        description: "Creates a Measurement Unit based on given input data",
        fields: [
          {
            name: "measurementUnit",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "MeasurementUnit", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "MeasurementUnitCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "symbol",
            description: "Measurement unit initials. Ex: W",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Measurement unit complete name. Ex: Watt",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PropertyCreatePayload",
        description: "Creates a Property based on given input data",
        fields: [
          {
            name: "property",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Property", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "PropertyCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "sourceName",
            description: "Property origin name.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "service",
            description: "Service that manages the property.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Origin name translation to BR.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "shortName",
            description: "property initials.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "measurementUnitId",
            description: "Property measurement unit.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstalledMaterialCreatePayload",
        description: "Creates an Installed Material based on given input data",
        fields: [
          {
            name: "installedMaterial",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "InstalledMaterial", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "InstalledMaterialCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "materialId",
            description: "ID from the installed material",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "installationId",
            description: "Installation id.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "serialNumber",
            description: "Material serial number.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "AlertRuleCreatePayload",
        description: "Creates an Alert Rule based on given input data",
        fields: [
          {
            name: "alertRule",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "AlertRule", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "AlertRuleCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "name",
            description: "Alert name",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "monitoredPropertyId",
            description: "ID from the alert monitored property.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "startDate",
            description: "Alert operation start date",
            type: { kind: "SCALAR", name: "Date", ofType: null },
            defaultValue: null
          },
          {
            name: "endDate",
            description: "Alert operation end date",
            type: { kind: "SCALAR", name: "Date", ofType: null },
            defaultValue: null
          },
          {
            name: "dailyStartTime",
            description: "Alert operation start time",
            type: { kind: "SCALAR", name: "Time", ofType: null },
            defaultValue: null
          },
          {
            name: "dailyStopTime",
            description: "Alert operation stop time",
            type: { kind: "SCALAR", name: "Time", ofType: null },
            defaultValue: null
          },
          {
            name: "weekDayBitmask",
            description:
              "Integer number that represents the week days that the alert operates.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "comparisonRule",
            description:
              "Integer number that represents the week days that the alert operates.",
            type: { kind: "ENUM", name: "ComparisonRules", ofType: null },
            defaultValue: null
          },
          {
            name: "serviceOrder",
            description: "Identify if the service order is requested or not. ",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "active",
            description: "Identify the alert state.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "comparisonValue",
            description: "Comparison value used to activate the alert.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "companyId",
            description: "Company that manages the alert.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "emailAddresses",
            description:
              "List of emails that the alert will comunicate when it is activated.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CreateFirmwarePayload",
        description: "Creates a Firmware version based on given input data.",
        fields: [
          {
            name: "firmware",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Firmware", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "CreateFirmwareInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "description",
            description: "Firmware informations and additional details.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "releaseDate",
            description: "Firmware release date. ",
            type: { kind: "SCALAR", name: "Date", ofType: null },
            defaultValue: null
          },
          {
            name: "major",
            description: "Major number from firmware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "minor",
            description: "Minor number from firmware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Firmware name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "revision",
            description: "Revision number from firmware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "compatibleHardwareIds",
            description: "Conpatible Hardwares with the firmware version.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CreateHardwarePayload",
        description: "Creates a Hardware version based on given input data",
        fields: [
          {
            name: "hardware",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Hardware", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "CreateHardwareInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "description",
            description: "Hardware descriptions and additional informations.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "releaseDate",
            description: "Hardware release date.",
            type: { kind: "SCALAR", name: "Date", ofType: null },
            defaultValue: null
          },
          {
            name: "major",
            description: "Major number from hardware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "minor",
            description: "Minor number from hardware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Hardware name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "revision",
            description: "Revision number from hardware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "compatibleFirmwareIds",
            description: "Compatible firmwares with the hardware version.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CreateEquipmentTypePayload",
        description:
          "Creates an Equipment Type version based on given input data",
        fields: [
          {
            name: "equipmentType",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "EquipmentType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "CreateEquipmentTypeInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "major",
            description: "Major number from equipment type version.",
            type: { kind: "SCALAR", name: "Int", ofType: null },
            defaultValue: null
          },
          {
            name: "minor",
            description: "Major number from equipment type version.",
            type: { kind: "SCALAR", name: "Int", ofType: null },
            defaultValue: null
          },
          {
            name: "revision",
            description: "Revision number from equipment type version.",
            type: { kind: "SCALAR", name: "Int", ofType: null },
            defaultValue: null
          },
          {
            name: "reference",
            description: "Equipment type reference.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "description",
            description:
              "Equipment type descriptions and additional informations.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "equipmentParts",
            description: "List of parts that compounds the equipment type.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "PartsInput", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "releaseDate",
            description: "Equipment type release date.",
            type: { kind: "SCALAR", name: "Date", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "PartsInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "hardwareId",
            description: "ID from hardware that compounds the part.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "firmwareIds",
            description: "List of Firmware Ids that compounds the part.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CreateEquipmentPayload",
        description: "Creates an Equipment based on given input data",
        fields: [
          {
            name: "equipment",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Equipment", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "CreateEquipmentInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "companyId",
            description: "ID from equipment company.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "macAddress",
            description: "Equipment MAC.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "equipmentTypeId",
            description: "ID from equipment type.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "serialNumber",
            description: "Equipment serial number.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "AlertRuleUpdatePayload",
        description: "Updates an Alert Rule based on given input data",
        fields: [
          {
            name: "alertRule",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "AlertRule", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "AlertRuleUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID from the alert being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Alert name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "monitoredPropertyId",
            description: "ID from the property being monitored by the alert.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "startDate",
            description: "Alert operation start date",
            type: { kind: "SCALAR", name: "Date", ofType: null },
            defaultValue: null
          },
          {
            name: "endDate",
            description: "Alert operation end date",
            type: { kind: "SCALAR", name: "Date", ofType: null },
            defaultValue: null
          },
          {
            name: "dailyStartTime",
            description: "Alert operation start time",
            type: { kind: "SCALAR", name: "Time", ofType: null },
            defaultValue: null
          },
          {
            name: "dailyStopTime",
            description: "Alert operation stop time",
            type: { kind: "SCALAR", name: "Time", ofType: null },
            defaultValue: null
          },
          {
            name: "weekDayBitmask",
            description:
              "Integer number that represents the week days that the alert operates.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "comparisonRule",
            description: "Comparison rule that triggers the alert.",
            type: { kind: "ENUM", name: "ComparisonRules", ofType: null },
            defaultValue: null
          },
          {
            name: "serviceOrder",
            description: "Identify if the service order is requested or not. ",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "active",
            description: "Identify the alert state.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "comparisonValue",
            description: "Comparison value used to activate the alert.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "companyId",
            description: "Company that manages the alert.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "emailAddresses",
            description:
              "List of emails that the alert will comunicate when it is activated.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CompanyUpdatePayload",
        description: "Updates a Company based on given input data",
        fields: [
          {
            name: "company",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Company", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "CompanyUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "Company ID that is being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Company name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "cnpj",
            description: "Company CNPJ.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "EmploymentUpdatePayload",
        description: "Updates an Employmet relation based on given input data",
        fields: [
          {
            name: "employment",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Employment", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "EmploymentUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "title",
            description: "Relation title.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "permissionsIds",
            description:
              "IDs from the permissions that are granted by the employment relation.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "SCALAR", name: "ID", ofType: null }
              }
            },
            defaultValue: null
          },
          {
            name: "id",
            description: "ID from the relation being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "userId",
            description: "user ID associated to the employee status.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationUpdatePayload",
        description: "Updates an Installation based on given input data",
        fields: [
          {
            name: "installation",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Installation", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "InstallationUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "reference",
            description: "Installation reference. ",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "siteId",
            description: "ID from the installation site.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "channel",
            description: "Communication channel.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "deviceMac",
            description: "Installation device MAC.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "parentInstallationId",
            description: "Parent installation detail, in case it exists.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "id",
            description: "ID from the installation being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstallationSiteUpdatePayload",
        description: "Updates an Installation Site based on given input data",
        fields: [
          {
            name: "installationSite",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "InstallationSite", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "InstallationSiteUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "latitude",
            description: "Consulted site latitude.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Float", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "longitude",
            description: "Consulted site longitude.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Float", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "id",
            description: "ID from the installation being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "companyId",
            description: "ID from the company that owns the installation.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "reference",
            description: "Site reference.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "country",
            description: "Country in which the site is located.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "state",
            description: "State in which the site is located.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "city",
            description: "City in which the site is located.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "district",
            description: "District in which the site is located.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "street",
            description: "Street in which the site is located.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "number",
            description: "Site location number.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "details",
            description: "Additional site details.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "locationCode",
            description: "Location code used by public lighting dealers.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "InstalledMaterialUpdatePayload",
        description: "Updates an Installed Material based on given input data",
        fields: [
          {
            name: "installedMaterial",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "InstalledMaterial", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "InstalledMaterialUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID from the InstalledMaterial being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "materialId",
            description:
              "ID from the material that the modifier is attached to.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "installationId",
            description: "Installation ID.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "serialNumber",
            description: "Installed material ID.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MaterialUpdatePayload",
        description: "Updates a Material based on given input data",
        fields: [
          {
            name: "material",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Material", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "MaterialUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "reference",
            description: "Material reference.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "description",
            description: "Material description.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "manufacturer",
            description: "Material manufacturer.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "model",
            description: "Material model.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "isMeter",
            description: "Defines rather the material is a meter or not.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "modifiers",
            description: "Material modifiers",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "INPUT_OBJECT",
                  name: "ModifierInput",
                  ofType: null
                }
              }
            },
            defaultValue: null
          },
          {
            name: "id",
            description: "ID from the material being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "MeasurementUnitUpdatePayload",
        description: "Updates a Measurement Unit based on given input data",
        fields: [
          {
            name: "measurementUnit",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "MeasurementUnit", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "MeasurementUnitUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "symbol",
            description: "Measurement unit initials. Ex: W",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Measurement unit complete name. Ex: Watt",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "id",
            description: "ID from the measurement unit being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ModifierUpdatePayload",
        description: "Updates a Modifier based on given input data",
        fields: [
          {
            name: "modifier",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Modifier", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "ModifierUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID from the modifier being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "materialId",
            description:
              "ID from the material that the modifier is attached to.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "propertyInId",
            description: "Modifier input property.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "propertyOutId",
            description: "Modifier input property.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "conversionFactor",
            description: "Modifier conversion factor.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Float", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PropertyUpdatePayload",
        description: "Updates a Property based on given input data",
        fields: [
          {
            name: "property",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Property", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "PropertyUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "sourceName",
            description: "Property origin name.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "service",
            description: "Service that manages the property.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Property origin name translation into pt BR.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "shortName",
            description: "Property initials.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "measurementUnitId",
            description: "Property measurement unit.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "id",
            description: "ID from the property being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UpdateFirmwarePayload",
        description: "Updates a Firmware version based on given input data",
        fields: [
          {
            name: "firmware",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Firmware", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UpdateFirmwareInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID from firmware being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "major",
            description: "Major number from firmware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "minor",
            description: "Minor number from firmware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Firmware name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "revision",
            description: "Revision number from firmware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "description",
            description: "Firmware descriptions and additional informations.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "compatibleHardwareIds",
            description: "Compatible Hardwares with firmware version.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UpdateHardwarePayload",
        description: "Updates a Hardware version based on given input data",
        fields: [
          {
            name: "hardware",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Hardware", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UpdateHardwareInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID from hardware being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "major",
            description: "Major number from hardware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "minor",
            description: "Minor number from hardware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Hardware name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "revision",
            description: "Revision number from hardware version.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "description",
            description: "Hardware descriptions and additional informations.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "compatibleFirmwareIds",
            description: "Compatible firmwares with the hardware version.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UpdateEquipmentTypePayload",
        description: "Updates an Equipment Type based on given input data",
        fields: [
          {
            name: "equipmentType",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "EquipmentType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UpdateEquipmentTypeInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID from equipment type being updated.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "major",
            description: "Major number from equipment type version.",
            type: { kind: "SCALAR", name: "Int", ofType: null },
            defaultValue: null
          },
          {
            name: "minor",
            description: "Minor number from equipment type version.",
            type: { kind: "SCALAR", name: "Int", ofType: null },
            defaultValue: null
          },
          {
            name: "revision",
            description: "Revision number from equipment type version.",
            type: { kind: "SCALAR", name: "Int", ofType: null },
            defaultValue: null
          },
          {
            name: "reference",
            description: "Equipment type reference.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "description",
            description:
              "Equipment type descriptions and additional informations.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "equipmentParts",
            description: "List of parts that compounds the equipment part.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "INPUT_OBJECT", name: "PartsInput", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UpdateEquipmentPayload",
        description: "Updates a Equipment based on given input data",
        fields: [
          {
            name: "equipment",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "Equipment", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UpdateEquipmentInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID from equipment company.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "companyId",
            description: "ID from equipment company.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "macAddress",
            description: "Equipment MAC.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "equipmentTypeId",
            description: "ID from equipment type.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "serialNumber",
            description: "Equipment serial number.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "CreateServicePayload",
        description: null,
        fields: [
          {
            name: "service",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "ServiceType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "CreateServiceInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "name",
            description: "Nome do servi\u00e7o.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "version",
            description: "Vers\u00e3o do servi\u00e7o.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "host",
            description: "Host do servi\u00e7o.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "port",
            description: "Porta do servi\u00e7o.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Int", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UpdateServicePayload",
        description: null,
        fields: [
          {
            name: "service",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "ServiceType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UpdateServiceInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID do servi\u00e7o a ser modificado.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "name",
            description: "Nome do servi\u00e7o.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "version",
            description: "Vers\u00e3o do servi\u00e7o.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "host",
            description: "Host do servi\u00e7o.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "port",
            description: "Porta do servi\u00e7o.",
            type: { kind: "SCALAR", name: "Int", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "DeleteServicePayload",
        description: null,
        fields: [
          {
            name: "service",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "ServiceType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "DeleteServiceInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "ID do servi\u00e7o a ser removido.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PermissionSetPayload",
        description: "Assigns one or more permissions to a given user.",
        fields: [
          {
            name: "user",
            description: "User data.",
            args: [],
            type: { kind: "OBJECT", name: "UserType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "PermissionSetInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "userId",
            description: "User ID to which you want to assign the permission.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "permissionIds",
            description: "IDs of the permissions to be assigned to the user.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "SCALAR", name: "ID", ofType: null }
              }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PermissionUnsetPayload",
        description: "Removes one or more permissions from a user.",
        fields: [
          {
            name: "user",
            description: "User data.",
            args: [],
            type: { kind: "OBJECT", name: "UserType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "PermissionUnsetInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "userId",
            description: "User ID that you want to remove permissions.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "permissionIds",
            description: "IDs of the permissions to be removed.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "all",
            description: "Removes all permissions from the user.",
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "PermissionCreatePayload",
        description: "Permission data representation.",
        fields: [
          {
            name: "permission",
            description: "Permission data.",
            args: [],
            type: { kind: "OBJECT", name: "PermissionType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "PermissionCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "name",
            description: "Permission name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "codename",
            description: "Reference name.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupCreatePayload",
        description: "Group data representation.",
        fields: [
          {
            name: "group",
            description: "Group data.",
            args: [],
            type: { kind: "OBJECT", name: "GroupType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "GroupCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "name",
            description: "Group name.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupDeletePayload",
        description: "Group data representation.",
        fields: [
          {
            name: "message",
            description: "Informational message on group removal.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "GroupDeleteInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "Group ID.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupSetUserPayload",
        description: "Assigns one or more permission groups to a user.",
        fields: [
          {
            name: "groups",
            description: "Group data.",
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "GroupType", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "GroupSetUserInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "userId",
            description: "User ID that will be included in the group.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "groupIds",
            description: "Group IDs that you want to assign to a user.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "SCALAR", name: "ID", ofType: null }
              }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupUnsetUserPayload",
        description: "Removes the user from one or more groups.",
        fields: [
          {
            name: "groups",
            description: "Group data.",
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "OBJECT", name: "GroupType", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "GroupUnsetUserInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "userId",
            description: "User ID that will be removed from the group.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "groupIds",
            description: "IDs of the groups you want to remove a user.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "SCALAR", name: "ID", ofType: null }
              }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "GroupSetPermissionPayload",
        description: "Assigns one or more permissions to a given group.",
        fields: [
          {
            name: "group",
            description: "Group data.",
            args: [],
            type: { kind: "OBJECT", name: "GroupType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "GroupSetPermissionInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "groupId",
            description: "ID of the group you want to include the permissions.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "permissionIds",
            description: "IDs of the permissions to be assigned to the group.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: { kind: "SCALAR", name: "ID", ofType: null }
              }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UserCreatePayload",
        description:
          "Creates a user for the system, automatically linking it to an employee,\nwith or without defined company.",
        fields: [
          {
            name: "user",
            description: "User data.",
            args: [],
            type: { kind: "OBJECT", name: "UserType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UserCreateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "email",
            description: "User email",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "username",
            description: "Username used by the user to login",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "password",
            description: "User password",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "employeeId",
            description: "Employee ID.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "name",
            description: "Employee's full name",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "cpf",
            description: "Employee CPF.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "user",
            description: "User ID.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "companiesIds",
            description: "IDs from the companies in which the employee works.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "isSuperuser",
            description:
              "Returns the state of administrator title for the user account",
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            defaultValue: "false"
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UserUpdatePayload",
        description: "Updates a user's data.",
        fields: [
          {
            name: "user",
            description: "User data.",
            args: [],
            type: { kind: "OBJECT", name: "UserType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UserUpdateInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "User ID to be changed.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "email",
            description: "User email",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "username",
            description: "Username used by the user to login",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "password",
            description: "User password",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "employeeId",
            description: "Employee ID.",
            type: { kind: "SCALAR", name: "ID", ofType: null },
            defaultValue: null
          },
          {
            name: "name",
            description: "Employee's full name",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "cpf",
            description: "Employee CPF.",
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          },
          {
            name: "companiesIds",
            description: "IDs from the companies in which the employee works.",
            type: {
              kind: "LIST",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "isSuperuser",
            description:
              "Returns the state of administrator title for the user account",
            type: { kind: "SCALAR", name: "Boolean", ofType: null },
            defaultValue: "false"
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "UserDeletePayload",
        description:
          "Removes a user from the system and, consequently, the employee linked to it.",
        fields: [
          {
            name: "message",
            description: "Informational message on user removal.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "UserDeleteInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "id",
            description: "User ID to be removed.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "ID", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "LogInPayload",
        description: "Login operation return data.",
        fields: [
          {
            name: "user",
            description: "User data logged into the system.",
            args: [],
            type: { kind: "OBJECT", name: "UserType", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "LogInInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "username",
            description: "Username.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "password",
            description: "User password.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "LogOutPayload",
        description: "Retorno da opera\u00e7\u00e3o de LogOut",
        fields: [
          {
            name: "message",
            description: "Mensagem informativa sobre o logout do usu\u00e1rio.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "LogOutInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "ResetPasswordPayload",
        description:
          "Resets the user password sending the new one\no the user email.",
        fields: [
          {
            name: "response",
            description: "Request response for reset password.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "ResetPasswordInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "username",
            description: "Username for account confirmation.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "email",
            description: "User email for account confirmation.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "SetNewPasswordPayload",
        description: null,
        fields: [
          {
            name: "response",
            description: "Answer if the password was succesfully changed.",
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "clientMutationId",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "INPUT_OBJECT",
        name: "SetNewPasswordInput",
        description: null,
        fields: null,
        inputFields: [
          {
            name: "newPassword",
            description: "The new user password.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "token",
            description: "URL embedded token",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            defaultValue: null
          },
          {
            name: "clientMutationId",
            description: null,
            type: { kind: "SCALAR", name: "String", ofType: null },
            defaultValue: null
          }
        ],
        interfaces: null,
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "__Schema",
        description:
          "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation and subscription operations.",
        fields: [
          {
            name: "types",
            description: "A list of all types supported by this server.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: { kind: "OBJECT", name: "__Type", ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "queryType",
            description: "The type that query operations will be rooted at.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "__Type", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "mutationType",
            description:
              "If this server supports mutation, the type that mutation operations will be rooted at.",
            args: [],
            type: { kind: "OBJECT", name: "__Type", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "subscriptionType",
            description:
              "If this server support subscription, the type that subscription operations will be rooted at.",
            args: [],
            type: { kind: "OBJECT", name: "__Type", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "directives",
            description: "A list of all directives supported by this server.",
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: { kind: "OBJECT", name: "__Directive", ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "__Type",
        description:
          "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
        fields: [
          {
            name: "kind",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "ENUM", name: "__TypeKind", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "name",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "fields",
            description: null,
            args: [
              {
                name: "includeDeprecated",
                description: null,
                type: { kind: "SCALAR", name: "Boolean", ofType: null },
                defaultValue: "false"
              }
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: { kind: "OBJECT", name: "__Field", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "interfaces",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: { kind: "OBJECT", name: "__Type", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "possibleTypes",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: { kind: "OBJECT", name: "__Type", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "enumValues",
            description: null,
            args: [
              {
                name: "includeDeprecated",
                description: null,
                type: { kind: "SCALAR", name: "Boolean", ofType: null },
                defaultValue: "false"
              }
            ],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: { kind: "OBJECT", name: "__EnumValue", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "inputFields",
            description: null,
            args: [],
            type: {
              kind: "LIST",
              name: null,
              ofType: {
                kind: "NON_NULL",
                name: null,
                ofType: { kind: "OBJECT", name: "__InputValue", ofType: null }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "ofType",
            description: null,
            args: [],
            type: { kind: "OBJECT", name: "__Type", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "ENUM",
        name: "__TypeKind",
        description: "An enum describing what kind of type a given `__Type` is",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "SCALAR",
            description: "Indicates this type is a scalar.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "OBJECT",
            description:
              "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "INTERFACE",
            description:
              "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "UNION",
            description:
              "Indicates this type is a union. `possibleTypes` is a valid field.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "ENUM",
            description:
              "Indicates this type is an enum. `enumValues` is a valid field.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "INPUT_OBJECT",
            description:
              "Indicates this type is an input object. `inputFields` is a valid field.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "LIST",
            description:
              "Indicates this type is a list. `ofType` is a valid field.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "NON_NULL",
            description:
              "Indicates this type is a non-null. `ofType` is a valid field.",
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "__Field",
        description:
          "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
        fields: [
          {
            name: "name",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "args",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: { kind: "OBJECT", name: "__InputValue", ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "type",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "__Type", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "isDeprecated",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "deprecationReason",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "__InputValue",
        description:
          "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
        fields: [
          {
            name: "name",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "type",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "OBJECT", name: "__Type", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "defaultValue",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "__EnumValue",
        description:
          "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
        fields: [
          {
            name: "name",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "isDeprecated",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "deprecationReason",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "OBJECT",
        name: "__Directive",
        description:
          "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
        fields: [
          {
            name: "name",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "String", ofType: null }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "description",
            description: null,
            args: [],
            type: { kind: "SCALAR", name: "String", ofType: null },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "locations",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: {
                    kind: "ENUM",
                    name: "__DirectiveLocation",
                    ofType: null
                  }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "args",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: {
                kind: "LIST",
                name: null,
                ofType: {
                  kind: "NON_NULL",
                  name: null,
                  ofType: { kind: "OBJECT", name: "__InputValue", ofType: null }
                }
              }
            },
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "onOperation",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: true,
            deprecationReason: "Use `locations`."
          },
          {
            name: "onFragment",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: true,
            deprecationReason: "Use `locations`."
          },
          {
            name: "onField",
            description: null,
            args: [],
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            isDeprecated: true,
            deprecationReason: "Use `locations`."
          }
        ],
        inputFields: null,
        interfaces: [],
        enumValues: null,
        possibleTypes: null
      },
      {
        kind: "ENUM",
        name: "__DirectiveLocation",
        description:
          "A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",
        fields: null,
        inputFields: null,
        interfaces: null,
        enumValues: [
          {
            name: "QUERY",
            description: "Location adjacent to a query operation.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "MUTATION",
            description: "Location adjacent to a mutation operation.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "SUBSCRIPTION",
            description: "Location adjacent to a subscription operation.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "FIELD",
            description: "Location adjacent to a field.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "FRAGMENT_DEFINITION",
            description: "Location adjacent to a fragment definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "FRAGMENT_SPREAD",
            description: "Location adjacent to a fragment spread.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "INLINE_FRAGMENT",
            description: "Location adjacent to an inline fragment.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "SCHEMA",
            description: "Location adjacent to a schema definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "SCALAR",
            description: "Location adjacent to a scalar definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "OBJECT",
            description: "Location adjacent to an object definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "FIELD_DEFINITION",
            description: "Location adjacent to a field definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "ARGUMENT_DEFINITION",
            description: "Location adjacent to an argument definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "INTERFACE",
            description: "Location adjacent to an interface definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "UNION",
            description: "Location adjacent to a union definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "ENUM",
            description: "Location adjacent to an enum definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "ENUM_VALUE",
            description: "Location adjacent to an enum value definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "INPUT_OBJECT",
            description: "Location adjacent to an input object definition.",
            isDeprecated: false,
            deprecationReason: null
          },
          {
            name: "INPUT_FIELD_DEFINITION",
            description:
              "Location adjacent to an input object field definition.",
            isDeprecated: false,
            deprecationReason: null
          }
        ],
        possibleTypes: null
      }
    ],
    directives: [
      {
        name: "include",
        description:
          "Directs the executor to include this field or fragment only when the `if` argument is true.",
        locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
        args: [
          {
            name: "if",
            description: "Included when true.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          }
        ]
      },
      {
        name: "skip",
        description:
          "Directs the executor to skip this field or fragment when the `if` argument is true.",
        locations: ["FIELD", "FRAGMENT_SPREAD", "INLINE_FRAGMENT"],
        args: [
          {
            name: "if",
            description: "Skipped when true.",
            type: {
              kind: "NON_NULL",
              name: null,
              ofType: { kind: "SCALAR", name: "Boolean", ofType: null }
            },
            defaultValue: null
          }
        ]
      }
    ]
  }
};
