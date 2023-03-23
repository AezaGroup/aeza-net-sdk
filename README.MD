> **AEZA-NET-SDK** - This is a [Node.js](https://nodejs.org) module that makes it easy to interact with the AEZA API. 🚀

## 📦 Installation:

> **[Node.js](https://nodejs.org/) 12.20.0 or newer is required**

- **Using `npm`** (recommended)
  ```shell
  npm i aeza-net-sdk
  ```
  
## Example usage:

```javascript
import AezaAPI from 'aeza-net-sdk';
const api = new AezaAPI(process.env.TOKEN);
```

## Available methods:
  
#### Profile Info:
  
```javascript
import AezaAPI from 'aeza-net-sdk';

const api = new AezaAPI(process.env.TOKEN);
const profile = await api.getProfile();

console.log(profile) // Displays information about your profile
```

#### Your services:
  
```javascript
import AezaAPI from 'aeza-net-sdk';

const api = new AezaAPI(process.env.TOKEN);
const services = await api.services(YOU_SERVER_ID); // * YOU_SERVER_ID it`s not necessary to specify, to receive all servers

console.log(services) // Displays information about your services
```

#### Charts Info:
  
```javascript
import AezaAPI from 'aeza-net-sdk';

const api = new AezaAPI(process.env.TOKEN);
const charts = await api.charts(YOU_SERVER_ID);

console.log(charts) // Displays server statistics information
```
  
#### Create Server:
  
```javascript
import AezaAPI from 'aeza-net-sdk';

const api = new AezaAPI(process.env.TOKEN);
const order = await api.order({
  productId: ID_SERVICES,
  term: 'hour/month/year',
  autoProlong: false/true,
  name: 'YOU-NAME-SERVER',
});

console.log(order) // Displays server information
```

#### Delete Server:
  
```javascript
import AezaAPI from 'aeza-net-sdk';

const api = new AezaAPI(process.env.TOKEN);
const service = await api.delete(YOU_SERVER_ID);

console.log(service) // Displays information about server deletion
```

#### Restart Server:
  
```javascript
import AezaAPI from 'aeza-net-sdk';

const api = new AezaAPI(process.env.TOKEN);
const service = await api.restart(YOU_SERVER_ID);

console.log(service) // Displays information about server restart
```

#### Change password to server:
  
```javascript
import AezaAPI from 'aeza-net-sdk';

const api = new AezaAPI(process.env.TOKEN);
const service = await api.changePassword(YOU_SERVER_ID, "NEW_PASSWORD");

console.log(service)
```

### To improve the library, you can unsubscribe to [AEZA.NET](https://aeza.net/) hosting support!
