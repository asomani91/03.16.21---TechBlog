const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Comment extends Model {

}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        body:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                // This is a reference to another model
                model: 'Post',

                // This is the column name of the referenced model
                key: 'id'
            }
        }
    },
    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post'
    }
);



module.exports = Comment;
