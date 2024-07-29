# SQLite Initialization in C
1. declare ```c sqlite3 *db;``` 
2. pass it to ```c sqlite3_open(database_name, &db);``` by default the following functions are called from sqlite3_open():
   1. ```c sqlite3_initialize()``` memory allocation, initializations: VFS (os interface), mutex subsystem
   2. ```c sqlite3MallocZero()```
   3. ```c sqlite3MutexAlloc()```


# RuSQLite Initialization in Rust
