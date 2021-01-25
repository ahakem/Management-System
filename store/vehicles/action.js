export const vehicleActionTypes = {
  UPDATE_VEHICLE: 'UPDATE_VEHICLE',
  DELETE_VEHICLE: 'DELETE_VEHICLE',
  INIT_VEHICLES: 'DELETE_VEHICLE',
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

export const initVehicles = (data) => {
  return { 
    type: vehicleActionTypes.INIT_VEHICLES,
    data: data,
  }
}
