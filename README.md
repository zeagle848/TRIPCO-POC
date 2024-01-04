# Technical Assessment for TRIPCO

## Table of Contents

- [Getting Started](#getting-started)
- [Development Notes](#development-notes)
- [Technical Assignment Brief](#technical-assignment-brief)
- [Dummy Data](#dummy-data)
## Getting Started

Before we can start the live server, we must first make sure that Node.js is installed. Check by opening your console and running `node -v`. If you can't see a version number, you must install Node.js. 

To view the app locally, you can begin by installing the dependencies...

`npm install`

...and then start by running:

`npm run serve`.

The application should be live on `http://localhost:8080/` if it doesn't open automatically.

## Development Notes

This was a technical assessment provided as part of the interview process with TRIPCO. The development time was approximately 4-5 days of work. 

### Design

The first part of my development process was the design phase. I used Figma and developed two screens: the primary view containing the various rooms and booking inputs, and the personal details modal.

![Original Desktop View](https://github.com/zeagle848/TRIPCO-POC/assets/31068439/08377d5c-5141-488d-be6a-e0f468a54790)
  - The primary view

![Original Modal View](https://github.com/zeagle848/TRIPCO-POC/assets/31068439/66767626-ea72-4c79-b66a-fa46b7535c24)
  - The personal details modal

The look and feel of the original design is different to the final product, but the fundamental structure is the same. 

I followed two primary 'rules' during the development of the design: 
1. It must contain all the necessary information requested in the technical assignment brief.
2. It cannot be based on the current designs TRIPCO uses in LekkerSlaap, TravelGround or Viya. I took this further and didn't look at any accomodation booking application at all. The only exception I allowed myself was basing the *content* of the personal details modal on that of AirBnB, *not* the design.

### Building Component Library

Beginning with the design phase of development allowed me to dive right into actual application development. This began with fleshing out the file and folder structure of my application. This followed the flow of the design document. 

From there, I began building out my components. This bottom-up approach allowed me to plug in my components wherever needed and drastically decreased development time, in my opinion. The abstraction of components was necessary due to the fact that I would be having to dynamically build each 'room' component based on the data provided. 

All components were built in isolation from each other; that is, there was no logic that created any side effects. In fact, outside of simple validation, there was no logic at all.

### Final build

The final phase included putting all the components together, adding logic, and then tightening up the style of the application. The bulk of the logic was dedicated to updating the booking price based on the occupancy and nights selected. 

The design, as mentioned previously, changed slightly, but remained fundamentally consistent.

## Technical Assignment Brief

Task: Create a single-page booking form to make a reservation at a property on an online travel agency.

The form should contain:

    Select check-in & check-out dates
    Choose rooms & allocate guests
    Enter personal details

The form should have the following features:

    A total price which is kept up-to-date based on the selections
    A tooltip over the total price showing the tax amount (15% VAT)
    Responsive page layout

Additional information:

    Feel free to use whichever modern JS framework you are most comfortable with.
    You may use any third-party (JS/CSS/UI) libraries you need. We do not expect you to build components from scratch (eg. date picker, tooltips).
    We only need to see this form component, you don’t need to create a full webpage/app surrounding it.
    We’ve included all the dummy data you need in the attached JSON file. You can choose which data you use/show.
    The actual form submission can just be logged to the console. You don’t need to implement any backend.
    We need to see both the source code and a working demo. Please include instructions on how to run it.
    Please don’t copy the look and feel of LekkeSlaap, we want to see your original design and implementation.

## Dummy Data

{
    "rooms": [
        {
            "name": "Classic Victorian Twin",
            "price_per_person_per_night": 1000,
            "capacity_per_room": 2,
            "number_of_rooms": 2,
            "room_type": "Hotel Room",
            "main_bed_type": "Single bed or 3/4-bed",
            "description": "Classic Victorian Twin rooms comprise 2 single beds that can be converted into a king-size bed and an en-suite bathroom with a bath, shower or both. Other facilities include a hairdryer, air-conditioning, Wi-Fi, TV, telephone, tea- and coffee-making facilities.",
            "photos": [
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAef03178f28cb6455318eb4d664dfecf05ad49affdf440abfa2ee7ebd026b6064337506d86cca5eca18ccec85683db3331434",
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAa61b669a0aa33630a693444f48b12f2fdb757bb9d7cdd5c060125882b0f36cd7c9741a5d116bce88637dc65cc9d2f5ddcba5",
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA83d9dfd41ab0d7578defa9e7c1a961994d3c3202f2dc6ed584b47ef5fba8064f6dac22cddce630f48214155994d1aa56aa6c"
            ]
        },
        {
            "name": "Classic Art Deco Double",
            "price_per_person_per_night": 1500,
            "capacity_per_room": 2,
            "number_of_rooms": 3,
            "room_type": "Hotel Room",
            "main_bed_type": "Queen-size bed",
            "description": "The Classic Art Deco Double rooms comprise a queen-size bed and an en-suite bathroom with a bath, shower or both. Other facilities include a hairdryer, air-conditioning, Wi-Fi, TV, telephone, tea- and coffee-making facilities.",
            "photos": [
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAd03250d11659d57fb72529f6ddb8d6c8f9e64c51c48644e9bca97d052a2d045853cf0b8d899133f1ef98ab29e2161c915cb0",
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA2bb8f3a9987385fd381a612a2cfaa98cfa93a76444cb08904c1383e31a609af2c830e878c13cbc13c55e1d0526e008015599",
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA21b87eef6c6aa8b970763a5407e3ed5fd10c0b8ad695e3ab5726d0679d72c0304bf4162ff48e72ce68a80c84054bcd479932"
            ]
        },
        {
            "name": "Luxury Studio",
            "price_per_person_per_night": 2000,
            "capacity_per_room": 4,
            "number_of_rooms": 1,
            "room_type": "Hotel Room",
            "main_bed_type": "King-size bed",
            "description": "The Studio features a combined living area and 2 sleeping areas. The sleeping areas are furnished with a king-sized bed and 2 single beds. Other in-room facilities include a bar fridge, microwave, en-suite bathroom, hairdryer, air-conditioning, smart television, free Wi-Fi, bathroom amenities and coffee- and tea-making facilities.",
            "photos": [
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA11391bb514ee797405e90d86a840ecef7368146427b304141090545c6814cf493b528032c16544b9a0b5583d5a2b6869efe3",
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA0a9ab95833e6e1de545e86f2aa623b754a370cf036ee70ff417223ea5960b9aa07d691718e59739d8a9df91bd1b871c2a3a3",
                "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA29b270b69fcf36582834fbfa6a0979c144afa89c16c4dbfeb181ca102ebd43c9c50b8674edb66e2deca89367720a39d34827"
            ]
        }
    ],
