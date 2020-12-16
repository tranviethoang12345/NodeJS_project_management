import { model } from 'mongoose';
import { createSuccess, updateSuccess, getSuccess, deleteSuccess, invalid } from '../../helper/message.js'

export const searchResults = async (req, res) => {
    try {
      let { startDate, endDate } = req.query;
      // check that date range is not empty
      if (startDate === '' || endDate === '') {
        return res.status(400).json({
          status: 'failure',
          message: 'Please ensure you pick date range'
        })
      }

      // query database using Mongoose
      const result = model.find({
        startDate: {
          $gte: new Date(new Date(startDate).setHours(00, 00, 00)),
          $lt: new Date(new Date(endDate).setHours(23, 59, 59))
        }
      })
        .sort({ startDate: 'asc' });
  
      //handle responses
      if (!result) {
        return res.json({
          status: 'failure',
          message: 'Could not retrieve result'
        })
      } else return res.json(getSuccess(result));
  
    } catch (err) {
      return res.json(invalid(err.message))
    }
  }