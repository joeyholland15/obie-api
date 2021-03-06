const billsModel = require('../models/bills_model.js');
const invokeModel = require('../helpers/controllers').invokeModel;

module.exports = {
  getUnpaidBills: function(req, res) {
    //params need to be user_id twice
    const params = [1, 1];
    invokeModel(req, res, params, billsModel, 'getUnpaidBills');
  },

  getPaidBills: function(req, res) {
    //params need to be user_id
    const params = [1];
    invokeModel(req, res, params, billsModel, 'getPaidBills');
  },

  post: function(req, res) {
    //1 should be user_id
    const params = [1, req.body.total, req.body.name, req.body.dueDate];
    invokeModel(req, res, params, billsModel, 'post');
  }
}