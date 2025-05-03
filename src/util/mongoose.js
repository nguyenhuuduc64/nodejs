module.exports = {
  mutipleMongooseToObject(mongooseArrays) {
    return mongooseArrays.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
  mutipleMongooseToArray(mongooseArrays) {
    return mongooseArrays.map((mongoose) => mongoose.toArray());
  },
  mongooseToArray(mongoose) {
    return mongoose ? mongoose.toArray() : mongoose;
  },
};
