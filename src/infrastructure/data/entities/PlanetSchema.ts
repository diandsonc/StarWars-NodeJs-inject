import { Document, model, Schema } from "mongoose";

interface IPlanetInterface extends Document {
  email?: string;
  firstName?: string;
  lastName?: string;
  fullName(): string;
}

const PlanetSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String
  },
  {
    timestamps: true
  }
);

PlanetSchema.methods.fullName = function(): string {
  return this.firstName + " " + this.lastName;
};

export default model<IPlanetInterface>("Planet", PlanetSchema);
