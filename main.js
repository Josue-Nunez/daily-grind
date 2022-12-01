
/*Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page. */





let myDate = new Date();
let today = myDate.getDate;
let coffee = ""



//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }
 
today = parseInt(today);

function coffeeTemplate(coffee)
{
    return `<p> 
                <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
                <strong${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong >${coffee.name}</strong>,${coffee.desc}
            </p>`;
}

switch (today)
{
    case 1:
        today = "Monday"
        coffee = 
        {
            color:"pink",
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A picture of a Bubble Tea",
            day:"Monday",
            desc:`I like me some bubble tea!`
        }
    break;

    case 2:
        today = "Tuesday"
        coffee = 
        {
            color:"brown",
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A picture of a caramel latte",
            day:"Tuesday",
            desc:`Its cold, so a caramel latte sounds good right now`
        }
    break;

    case 3:
        today = "Wednesday"
        coffee = 
        {
            color:"black",
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A picture of a cold brew",
            day:"Wednesday",
            desc:`I need some serious caffiene , give me a cold brew`
        }
    break;

    case 4:
        today = "Thursday"
        coffee = 
        {
            color:"gray",
            name:"Drip",
            pic:"cold-brew.jpg",
            alt:"A picture of drip coffee",
            day:"Thursday",
            desc:`Nothing beats good ol' drip coffee`
        }
    break;

    case 5:
        today = "Friday"
        coffee = 
        {
            color:"green",
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A picture of a frappaccino",
            day:"Friday",
            desc:`I could use a tasty frappaccino`
        }
    break;

    case 6:
        today = "Saturday"
        coffee = 
        {
            color:"gold",
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A picture of a mocha latte",
            day:"Saturday",
            desc:`Have a lil mocha to soothe your soul`
        }
    break;

    case 0:
        today = "Sunday"
        coffee = 
        {
            color:"orange",
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A picture of a pumpkin spice latte",
            day:"Sunday",
            desc:`Brighten up your day with our famous pumpkin latte`
        }
    break;

    default:
        alert("something went wrong");
}

console.log(coffee);

document.getElementsById("coffee-template").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;