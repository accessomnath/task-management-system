import { DataTypes } from "sequelize";
import { sequelize as s } from "../config/index.js";

export const TASK = s.define(
  "task_table",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Incomplete", "Completed"),
      allowNull: false,
    },
    pdf_path: {
      type: DataTypes.STRING(255),
    },
    excel_path: {
      type: DataTypes.STRING(255),
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "task_table",
    timestamps: false, // To disable timestamps columns created_at and updated_at
  },
);
