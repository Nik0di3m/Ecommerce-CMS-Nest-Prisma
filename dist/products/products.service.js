"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_relay_cursor_connection_1 = require("@devoxa/prisma-relay-cursor-connection");
const connection_args_dto_1 = require("../page/connection-args.dto");
const product_entity_1 = require("./entities/product.entity");
const page_dto_1 = require("../page/page.dto");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProductDto) {
        return this.prisma.product.create({ data: createProductDto });
    }
    findAll() {
        return this.prisma.product.findMany({
            where: {
                published: true,
            },
        });
    }
    async findPage(conectionArgs) {
        const where = { published: true };
        const page = await (0, prisma_relay_cursor_connection_1.findManyCursorConnection)((args) => {
            return this.prisma.product.findMany(Object.assign(Object.assign({}, args), { where }));
        }, () => this.prisma.product.count({ where: where }), conectionArgs, {
            recordToEdge: (record) => ({
                node: new product_entity_1.ProductEntity(record),
            }),
        });
        return new page_dto_1.Page(page);
    }
    findOne(id) {
        return this.prisma.product.findUnique({
            where: {
                id: id,
            },
        });
    }
    findDrafts() {
        return this.prisma.product.findMany({
            where: {
                published: false,
            },
        });
    }
    update(id, updateProductDto) {
        return this.prisma.product.update({
            where: {
                id: id,
            },
            data: updateProductDto,
        });
    }
    remove(id) {
        return this.prisma.product.delete({
            where: {
                id: id,
            },
        });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map