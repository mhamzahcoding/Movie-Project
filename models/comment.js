module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      author: DataTypes.STRING,
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
  Comment.associate = function(models) {
    // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Comment.belongsTo(models.author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };
  