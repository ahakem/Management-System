# PLN Asset Management System DashBoard

## How to use:

```bash
yarn
yarn run dev
```

## Tools and technology:

- `React.JS`
- `MAtrial UI` 
- `NextJS` - Mostly for Mocking the API
- `Axios` - For Network Calls
- `Redux` - Manging the State
- `Formik`, `Yup` for Forms Validation
- `Moment` -  For Displaying and manging Date/Time
- `notistack` For displaying Global Errors


## API Mocing:

- you can play with the content in that file `pages/api/vehicles.js`
- you can select the needed returend `status` code from `config/mock.js`

## react custom hooks

I built custom hooks to handle all expected senario like `[400,401,403,404]` and `500` as long with any unexpected like Connection Failuier 
you can check it in `hooks/useHandleResponse.js` you can check  how to use it in the Axios Call
```jsx
import useHandleResponse from 'hooks/useHandleResponse'

const App = () => {
    const { handleError } = useHandleResponse();
  return <div></div>
}
```
`handleError` take one argment with the errors came from the request

## functionality
- Pagenation
- Sortying 
- Edit
- Delete

## To Do
- Applaying the Side Menu items with the design, and updating The icon
- Changingsome Icons from Matrial UI icons to the one came with the Design, after allowing the exporting the Icons in Figma
- Cheking with the Designer the behavier of the time picker in the edit overlay and update it after agrement.
-update Sorting after Edit with the Selected Sort type