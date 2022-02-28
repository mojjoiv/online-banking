
# Online Banking Project in PHP

## Features

- Secure login and signup system with md5 encryption
- OTP verification 
- Admin & user panel
- Withdraw and deposit section
- Money transfer system
- KYC verification
- Email alerts after every transaction
- Saving page
- Request debit card 

## Design Principle

This principle is completely based on Coupling and Cohesion. This principle states that In your software design a classes should in such a way that each class should have a single purpose/responsibility/functionality.

While designing software if you put more than one functionality in single class then increase coupling between functionalities. If change required in one functionality there are chances to broke other functionality and required more testing to avoid such surprises in production environment.

 Responsibility Examples
Suppose you are having JPA classes as  SavingAccountRepository.java and CurrentAccountRepository.java then SavingAccountRepository.java class should have only methods and queries related with Saving Accounts. It means your class should specialize in single purpose.

Others most common example of responsibilities:

Logging
Formatting
Validation
Notification
Error Handling
Parsing
Caching
Mapping
Class Section/ Instantiation etc.


Benefits:
This principle make your software easier to implement and prevent unexpected side-effects of future changes.
Your class will change only if anything will change in respected responsibility.
Need to update dependencies and compile when some respected dependencies change.
Reduce coupling between software and components.
The Single Responsibility Principle (SRP) also provides other benefits with classes, components and micro services with single responsibility make your code easier to explain, understand, implement. It also improves development speed and easier to track bugs. it should encapsulate that part. All of that module, class or function's services should be narrowly aligned with that responsibility

## The methodology used is Agile Methodology

 Agile methods break tasks into smaller iterations, or parts do not directly involve long term planning. The project scope and requirements are laid down at the beginning of the development process. Plans regarding the number of iterations, the duration and the scope of each iteration are clearly defined in advance.


