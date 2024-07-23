# Server Configuration
to start the server run:
Provide a path to the config file ```npm run start "path/to/config"```

To generate the config file for the current file structure run:
```bash node config.ts "path/to/root/dir```

Config File structure:
```json
{
  "port": 3000,
  "routes": [
    {
      "path": "/",
      "files:": ["index.html"],
      "directories": {

      },
	    "method": "string[]",
    },

    {
      "path": "/contact",
      "file": "contact.html"
    }
  ],
  "staticFolder": "public",
  "logRequests": true,
  "securityHeaders": {
    "Content-Security-Policy": "default-src 'self'",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY"
  }
}
```
## Methods
By default all methods are allowed to the route unless specified