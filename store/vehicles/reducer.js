import { vehicleActionTypes } from "./action";

const vehicles = (
  state = { vehicles_info: [], vehicles_names: {} },
  action
) => {
  switch (action.type) {
    case vehicleActionTypes.INIT_VEHICLES:
      return {
        ...action.data,
      };
    case vehicleActionTypes.SORT_VEHICLES:
      return {
        ...state,
        vehicles_info: [...action.data],
      };
    case vehicleActionTypes.UPDATE_VEHICLE:
      const index = state.vehicles_info.map((row)=> row.id).indexOf(action.data.id)
      const cloneVehicles = [...state.vehicles_info];
      cloneVehicles.splice(index, 1, action.data);
      debugger
      return {
        ...state,
        vehicles_info:cloneVehicles
      };
    case vehicleActionTypes.DELETE_VEHICLE:
      return {
        ...state,
        vehicles_info: state.vehicles_info.filter(
          (row) => row.id !== action.id
        ),
      };

    default:
      return state;
  }
};

export default vehicles;
