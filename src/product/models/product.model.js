import { Sequelize, Model, DataTypes } from 'sequelize';

export class ProductModel {
    constructor(conn) {
        this.conn = conn;
        this.init();
    }
   static  getModel(){
        return ProductModel.model;
    }

    init() {
        ProductModel.model = this.conn.define("product", {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.BIGINT,
            },
            productName: {
                allowNull: false,
                type: DataTypes.STRING(256),
            },
            productSku: {
                allowNull: false,
                type: DataTypes.STRING(256),
                unique: true,
            },
            description: {
                allowNull: true,
                type: DataTypes.TEXT
            },
            categoryId: {
                allowNull: false,
                type: DataTypes.BIGINT
            },
            pincode: {
                allowNull: true,
                type: DataTypes.STRING(16)
            },
            usages: {
                allowNull: true,
                type: DataTypes.ARRAY(DataTypes.BIGINT)
            },
            finishes: {
                allowNull: true,
                type: DataTypes.ARRAY(DataTypes.BIGINT)
            },
            colors: {
                allowNull: true,
                type: DataTypes.ARRAY(DataTypes.BIGINT),
            },
            properties: {
                allowNull: true,
                type: DataTypes.ARRAY(DataTypes.BIGINT)
            },
            material: {
                allowNull: true,
                type: DataTypes.BIGINT,
            },
            shape: {
                allowNull: true,
                type: DataTypes.BIGINT,
            },
            sizes: {
                allowNull: true,
                type: DataTypes.ARRAY(DataTypes.BIGINT),
            },
            images: {
                allowNull: true,
                type: DataTypes.JSON,
            },
            documents: {
                allowNull: true,
                type: DataTypes.JSON,
            },
            price: {
                allowNull: false,
                type: DataTypes.STRING(16)
            },
            installationPrice: {
                allowNull: true,
                type: DataTypes.STRING(16)
            },
            discount: {
                allowNull: true,
                type: DataTypes.STRING(16)
            },
            minOrderQuantity: {
                allowNull: true,
                type: DataTypes.INTEGER(8)
            },
            isActive: {
                allowNull: false,
                type: DataTypes.BOOLEAN,
                default: true
            },
            companyCode: {
                allowNull: true,
                type: DataTypes.STRING(16)
            }


        }, {
            schema: "floorhouz_customer",
            freezeTableName: true,
            timestamps: false

        })
    }
}