export const getSuccess = (data) => {
  return {
    message: `get successfully`,
    messageCode: `GET_SUCCESSFULLY`,
    status: 200,
    data: data
  }
}

export const createSuccess = (data) => {
  return {
    message: `created successfully`,
    messageCode: `CREATED_SUCCESSFULLY`,
    status: 201,
    data: data
  }
}

export const updateSuccess = (data) => {
  return {
    message: `updated successfully`,
    messageCode: `UPDATED_SUCCESSFULLY`,
    status: 200,
    data: data
  }
}

export const deleteSuccess = () => {
  return {
    message: `deleted successfully`,
    messageCode: `DELETED_SUCCESSFULLY`,
    status: 204,
  }
}

export const notFound = () => {
  return {
    message: `not found`,
    messageCode: `NOT_FOUND`,
    status: 404,
    data: []
  }
}

export const invalid = (err) => {
  return {
    message: err,
    messageCode: `INVALID_REQUEST`,
    status: 400
  }
}

