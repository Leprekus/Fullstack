//comes from standard rust library known as std
use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess The number!");

    
    
    loop{
        println!("Input your guess or type quit to end the program ");
        //gen_range has inclusive upper and lower bounds
        let secret_number = rand::thread_rng().gen_range(1..=100);
        //println!("secret number {secret_number}");
        
        let mut guess = String::new(); //create new mutable variable
        
        //handle user input
        io::stdin()
            //Returns an enum Result with variants Ok and Err
            //expect runs in varinat == Err
            .read_line(&mut guess) 
            .expect("Failed to read line");

        println!("You guessed {guess}");

        //validate input
        //this is called shadowing
        //allows to convert one value from type a to type b
        //let guess: u32 = guess.trim().parse().expect("Please type a number");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };
        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small"),
            Ordering::Greater => println!("Too big"),
            Ordering::Equal => {
                println!("You win!");
                break;
            },
        }
    }

}
