import { Sequelize, Model, DataTypes } from 'sequelize';

export class LookupModel {
    constructor(conn) {
        this.conn = conn;
        this.init();
    }

    static getModel() {
        return LookupModel.model;
    }

    init() {
        LookupModel.model = this.conn.define("lookup", 
        {

            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.BIGINT,
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING(256),
            },
            description: {
                allowNull: false,
                type: DataTypes.STRING(512),
            },
            type: {
                allowNull: false,
                type: DataTypes.STRING(256),
            },
        }, {
            schema:"floorhouz_customer",
            freezeTableName : true,
            timestamps: false
            
        })
    }
}