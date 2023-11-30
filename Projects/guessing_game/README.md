# Notes About the Project

- The **use** keyword brings types into scope like the std library
- Rust variables are **imuttable** by default
  - Adding mut when declaring a variable will make it mutable
- The **::** is an indicator that the keyword is an associated function of the type ex: ```String::new()```
- The **&** indicates that the variable passed is a reference ```.read_line(&mut guess)```
  - Note: ```.read_line(&guess)``` passes an immutable reference
- Enums contain multiple states, each one is called a variant

# Ownership

Working with the stack is faster than the heap.

- Each value in Rust has an owner
- There can only be one owner at a time
- When the owner goes out of scope the value gets dropped
