export const vehicleActionTypes = {
  UPDATE_VEHICLE: 'UPDATE_VEHICLE',
  DELETE_VEHICLE: 'DELETE_VEHICLE',
  ADD_VEHICLE: 'DELETE_VEHICLE',
}


export const updateVehicle = (data) => {
  return { 
    type: vehicleActionTypes.UPDATE_VEHICLE,
    data: data,
  }
}

export const deleteVehicle = (id) => {
  return { 
    type: vehicleActionTypes.DELETE_VEHICLE,
    id: id,
  }
}

export const addVehicle = (data) => {
  return { 
    type: vehicleActionTypes.DELETE_VEHICLE,
    data: data,
  }
}
