import React from 'react';

const Blog = () => {

    return (
        <div>
            <h1 className='text-center font-bold p-12 '>Blogs</h1>
            <div className='pb-12 pt-12'>
                <div className=' text-center shadow-xl bg-white rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-sky-500 text-3xl my-18' >1. What are the different ways to manage a state in a react application?</h1>
                    <p className=' text-md p-8'>Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind.
                        The Four Kinds of React State to Manage
                        When we talk about state in our applications, it's important to be clear about what types of state actually matter.
                        <br /><br />

                        There are four main types of state we need to properly manage in our React apps:
                        <br />

                        a. Local state <br />
                        b. Global <br />
                        c. Server state <br />
                        d. URL state</p>
                </div>
                <div className=' text-center shadow-xl bg-white rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-sky-500 text-3xl my-18' >2. How does prototypical inheritance work?</h1>
                    <p className=' text-md p-8'>
                        Inheritance just means 'a concatenation of the layouts'All the objects in the JavaScript like Array, Boolean, Date etc all inherit properties and methods from their prototype.

                        Object is the at top of Prototype chain means all the other objects inherit their properties and methods from Object.prototype.
                        If we want to add another property to the Person object we can add that to an individual object like this:

                        person1.gender = 'Male';
                        but this will only add this property to person1 object.To add the property to the Person object itself we have to add it to its prototype before creating objects so it will be available to all of its objects.We can also add methods to the Person prototype
                    </p>
                </div>
                <div className=' text-center shadow-xl bg-white rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-sky-500 text-3xl my-18' >3. What is a unit test? Why should we write unit tests?</h1>
                    <p className=' text-md p-8'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>
                <div className=' text-center shadow-xl bg-white rounded-3xl mx-12 py-12 mb-12'>
                    <h1 className='text-sky-500 text-3xl my-18' >4. React vs. Angular vs. Vue?</h1>
                    <p className=' text-md p-8'><span className='font-bold text-xl'>Angular vs React</span><br />
                        If the choice you're making is based on Angular vs React alone, then you'll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                        React often requires extra modules and components, which keeps the core library small, but means there's extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn't require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                        React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript. <br />

                        
                        <span className='font-bold text-xl'>React vs Vue</span><br />
                        The choice between React vs Vue is often debated and it's not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there's no sign that React is on the decline either.

                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                        Overall, Vue might be the best choice if you're a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts. <br />

                        
                        <span className='font-bold text-xl'>Angular vs Vue</span><br />
                        In most cases, you probably wouldn't be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                        A large library like Angular would require more diligence in keeping up with what's new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                        It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that's another thing to keep in mind, though that wouldn't have a huge impact on your decision.</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;