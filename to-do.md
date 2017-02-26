1. Understanding Routing in depth
2. Go and Read the Documentation for routing


# Module 1 : Components and Routing

## Questions:

- What is pathMatch ?
- pathMatch is a string that matched routing strategy

- What is ActivatedRoute ?
- It contains the information about a route associated with a component
loaded in an outlet. An ActivatedRoute can also be used to traverse
the router state.

- How to configure Routes ?

# Module 2: Data-binding

- Step 1: learn enough to get started
- Step 2: Play around generate questions
- STep 3: Find answers under the hood how things work
- Step 4: Teach

- Display Departemnts in Depratments View

# Module 3: Services

## Step 1: learn enough to get started

## Step 2: Play around generate questions
 
 
 ### Questions:
 
#### How does @Injectable works ?
 
 - Injectable to use inject third party services
 - like http , VehcileService, StoryService, LoggerService,ErrorService
 
  WHat it does?
 
 - A marker metadata that marks a class as available to Injector
 for creation
 
 - Because Injectors are the guys who are responsible for instantiating
 components like HerosComponent.
 
 - 
 
 #### Why do we need Service ?
  
  - A service provides anything our application needs. 
  It often shares data or functions between other angular 
  features
  - t's a coding pattern in which a class receives its dependencies from external sources rather than creating them itself.
  
  
 #### When should you create Service?
 
  - If you want to share data accross application 
 
 #### What is DI ?
 
 - Dependency Injection is how we provide an instance of class
 to another Angular feature
 
 
 #### How does component LifeCycle hooks work ?
 
  - We provide services to Angular's injectors.
  - When we inject a service. Angular searches the appropriate
  injectors for it.
  - One Injector for Root Component the anybody in the tree can 
  access it.
  
 
 #### LifeCycle hooks for Component
  
  - 1. onInit
  - 2. ngOnChanges
  - 3. ngAfterViewInit
  - 4. ngOnChanges
  - 5. ngOnDestroy 
 
## STep 3: Find answers under the hood how things work


## Step 4: Teach


## Module # 4: http:

-  We use http to get and serve data with promises or Observables. We isolate
the http calls in a shared Service.

- Component is handled on Observable.

- We Subscribe to it.

1. Import the http Module.
2. Call http.get in a Service and return the mapped result.
3. Subscribe to the Service's function in the Component.


## Step 1: Learn enough to get started

## Step 2: Play around and generate questions

 ### Q: How does http work?
   
  - request(url: string | Request, options? :RequestOptions) :
   Observable<Response>
  
  - It performs any type of http request.
  
  - get(url : string, body:any, options?: RequestOptionsArgs) : Observable<Response>
  
 
 ### Q: How does observable work?
     
 ### Q: How does rxjs work?
 
 - Reactive Js implements the async observable pattern
  and is widely used in Angular2
    
 ### Q: What is map and catch in rxjs?
 
 ### Q: What is async pipe ?
 
 - The Async pipe received a promise or observables as
 input and subscribes to the input, eventually emitting
 the value(s) as changes arrive.
 
 
    
    
    
 

## Step 3: Answer the question


-----
1. Implement Async Pipe with Observables 
2. Create a seaprate file for rxExtensions

