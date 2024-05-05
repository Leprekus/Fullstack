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


## Sequential-Server

The sequential server serializes all connections.
Clients are kept waiting until the current one disconnects. (Inefficient use of resources)


## Threaded-Server

One thread is spawned for each client.
Pros: multiple client can connect at the same time.
Cons: if server capacity is exceeded all clients will experience a slow service or none at all if the server crashes.


## Threaded-Pool Server

* A pool is created with a maximum number of threads
* A queue is created that accepts fixed number of pending connections, after which any more gets refused
  
Pros: graceful-degradation, all connected clients are guaranteed a good & stable service