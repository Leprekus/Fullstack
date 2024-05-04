# Concurrent Server in C

## How to run
The following steps are performed in the terminal, inside the concurrent-server-in-c folder.
1. To make the server executable run ```make <filename>```
2. To start the server run ```./<filename> <portnumber>``` the portnumber is optional
3. To test the server with sample clients run (in a separate terminal window and server running) ```python3 simple-client.py -n <number of clients> <host> <portnumber>```

Example:
1. ```make ./sequential-server```
2. ```./sequential-server```
3. ```python3 simple-client.py -n 3 localhost 9090```

