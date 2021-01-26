// import Cors from "cors";
import mock from "config/mock";


export default async (req, res) => {
  // Run cors
  // await cors(req, res);

  if (req.method == "GET") {
    switch (mock.vehicles) {
      case 200:
        res.status(200).json({
          data: {
            vehicles_info:[
              {
                id:1,
                vehicle_id:100,
                status:"active",
                time:"02:30",
                date:'2021-2-1',
                odometer:155500,
                volume:50,
                fuel_types:"gasoline",
                cost:565656
              },
              {
                id:2,
                vehicle_id:200,
                status:"out of service",
                time:"14:30",
                date:'2021-1-5',
                odometer:1434.34,
                volume:50,
                fuel_types:"diesel",
                cost:68054
              },
              {
                id:3,
                vehicle_id:100,
                status:"in Shop",
                time:"14:30",
                date:'2021-3-1',
                odometer:500.34,
                volume:50,
                fuel_types:"gasoline",
                cost:99999333
              },
              {
                id:4,
                vehicle_id:400,
                status:"active",
                time:"14:30",
                date:'2021-2-1',
                odometer:2,
                volume:50,
                fuel_types:"gasoline",
                cost:777777
              },
              {
                id:5,
                vehicle_id:200,
                status:"active",
                time:"14:30",
                date:'2021-2-1',
                odometer:333,
                volume:50,
                fuel_types:"diesel",
                cost:454545454
              },
              {
                id:6,
                vehicle_id:300,
                status:"active",
                time:"14:30",
                date:'2021-2-1',
                odometer:555,
                volume:50,
                fuel_types:"gasoline",
                cost:11232232
              },
              {
                id:7,
                vehicle_id:400,
                status:"active",
                time:"14:30",
                date:'2021-2-1',
                odometer:566,
                volume:50,
                fuel_types:"diesel",
                cost:68054.344
              },
              {
                id:8,
                vehicle_id:400,
                status:"out of service",
                time:"14:30",
                date:'2021-2-1',
                odometer:77.34,
                volume:50,
                fuel_types:"diesel",
                cost:8977655
              },
              {
                id:9,
                vehicle_id:300,
                status:"active",
                time:"14:30",
                date:'2021-2-1',
                odometer:8834.34,
                volume:50,
                fuel_types:"diesel",
                cost:1123
              },
              {
                id:10,
                vehicle_id:100,
                status:"out of service",
                time:"14:30",
                date:'2021-2-1',
                odometer:9434.34,
                volume:50,
                fuel_types:"diesel",
                cost:9342343
              }
            ],
            vehicles_names:{
              100:'[001] Toyota Avanza',
              200:"[002] Daihatsu Xenia",
              300:'[003] BMW',
              400:'[003] VW'
            }
          },
        });
        break;
      case 401:
        res.status(401).json({
          error_code: "error_code string",
          error_message: "401 error_message string",
        });
        break;
      case 403:
        res.status(403).json({
          error_code: "error_code string",
          error_message: "403 error_message string",
        });
        break;
      
      
      default:
        res.status(mock.vehicle).end();
    }
  }
};
