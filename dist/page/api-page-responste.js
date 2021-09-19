"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPageResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const page_dto_1 = require("./page.dto");
const ApiPageResponse = (model) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOkResponse)({
        schema: {
            title: `PageResponseOf${model.name}`,
            allOf: [
                { $ref: (0, swagger_1.getSchemaPath)(page_dto_1.Page) },
                {
                    properties: {
                        edges: {
                            type: 'array',
                            title: `EdgesOf${model.name}`,
                            items: {
                                type: 'object',
                                required: ['cursor', 'node'],
                                properties: {
                                    cursor: { type: 'string' },
                                    node: {
                                        type: 'object',
                                        $ref: (0, swagger_1.getSchemaPath)(model),
                                    },
                                },
                            },
                        },
                    },
                },
            ],
        },
    }));
};
exports.ApiPageResponse = ApiPageResponse;
//# sourceMappingURL=api-page-responste.js.map