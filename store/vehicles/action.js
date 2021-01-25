export const vehicleActionTypes = {
  UPDATE_VEHICLE: 'UPDATE_VEHICLE',
  DELETE_VEHICLE: 'DELETE_VEHICLE',
  INIT_VEHICLES: 'DELETE_VEHICLE',
  SORT_VEHICLES: 'SORT_VEHICLES',
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

export const sortVehicles = (data) => {
  return { 
    type: vehicleActionTypes.SORT_VEHICLES,
    data: data,
  }
}
