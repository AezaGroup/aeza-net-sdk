> **AEZA-NET-SDK** - This is a [Node.js](https://nodejs.org) module that makes it easy to interact with the AEZA API. 🚀

## 📦 Installation:

> **[Node.js](https://nodejs.org/) 12.20.0 or newer is required**

- **Using `npm`** (recommended)
  ```shell
  npm i aeza-net-sdk
  ```
  
## Example usage:

#### Before you get started, please use
```javascript
import AezaAPI from 'aeza-net-sdk';
const api = new AezaAPI(process.env.TOKEN);
```

## Available methods:
  
#### Profile Information:
  
```javascript
const { response } = await api.profile.get()

console.log(response) // Displays information about your profile
```

#### Information about limits:
  
```javascript
const { response } = await api.profile.limits()

console.log(response) // Display information about limits
```

#### List all operating systems:
  
```javascript
const { response } = await api.service.osList();

console.log(response) // Displays all os
```

#### Product information:
  
```javascript
const { response } = await api.service.products(ID*); // ID it`s not necessary to specify, to receive all servers

console.log(response) // Product information, with a description of the price and a list of operating systems
```

#### Information about your servers:
  
```javascript
const { response } = await api.service.getServer(SERVER_ID*); // SERVER_ID it`s not necessary to specify, to receive all servers

console.log(response) // Information about your servers
```

#### Server statistics information:
  
```javascript
const { response } = await api.service.getCharts(YOU_SERVER_ID);

console.log(response) // Displays server statistics information
```
  
#### Create Server:
  
```javascript
const { response } = await api.service.createServer({
  productId: ID_SERVICES,
  term: 'hour/month/year',
  autoProlong: false/true,
  name: 'YOU-NAME-SERVER',
});

console.log(response) // Display server order information
```

#### Orders info:
  
```javascript
const { response } = await api.service.getOrder(ORDER_ID);

console.log(response) // Displays server information
```

#### Reinstall Server:
  
```javascript
const { response } = await api.service.reinstall({
  id: YOU_SERVER_ID,
  recipe: RECIPE,
  password: YOU_NEW_PASSWORD,
  os: NEW_OS
});

console.log(response)
```

#### Delete Server:
  
```javascript
const { response } = await api.service.deleteServer(YOU_SERVER_ID);

console.log(response)
```

#### Server Management:
  
```javascript
const { response } = await api.service.ctl(YOU_SERVER_ID, ACTION); //Possible actions: resume/suspend/reboot

console.log(response)
```

#### Change the password on the server:
  
```javascript
const { response } = await api.service.changePassword(YOU_SERVER_ID, "NEW_PASSWORD");

console.log(response)
```

#### Task Info:
  
```javascript
const { response } = await api.service.getTask(YOU_SERVER_ID);

console.log(response)
```

### To improve the library, you can unsubscribe to [AEZA.NET](https://aeza.net/) hosting support!
