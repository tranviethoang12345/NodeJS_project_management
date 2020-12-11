export const getSuccess = (data) => {
  return {
    message: `get successfully`,
    messageCode: `GET SUCCESSFULLY`, 
    status: 200,
    data: data
  }
}

export const createSuccess = (data) => { 
  return {
    message: `created successfully`,
    messageCode: `CREATED SUCCESSFULLY`, 
    status: 200,
    data: data
  }
}

export const updateSuccess = (data) => {
  return {
    message: `updated successfully`,
    messageCode: `UPDATED SUCCESSFULLY`, 
    status: 200,
    data: data
  }
}

export const deleteSuccess = () => {
  return {
    message: `deleted successfully`,
    messageCode: `DELETED SUCCESSFULLY`, 
    status: 200,
  }
}

// export const notFound = () => {
//   return {
//     message: `not found`,
//     messageCode: `NOT FOUND`,
//     status: 400,
//     data: []
//   }
// }

export const invalid = (err) => {
  return {
    message: err,
    messageCode: `INVALID REQUEST`,
    status: 400,
    data: []
  }
}

