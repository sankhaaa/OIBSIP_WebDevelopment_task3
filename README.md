# OIBSIP_WebDevelopment_task3
1. Purpose

    To allow users to input a temperature in one unit and instantly see its equivalent in the other two units.

2. Structure
HTML (index.html)

  Container
  
    Heading: Temperature Converter
    
    Input field for entering temperature.
    
    Dropdown menu to choose the unit (Celsius, Fahrenheit, Kelvin).
    
    Convert button to trigger calculation.
    
    Result display area to show the converted values.

CSS (style.css)

  Layout
  
    Centered container using Flexbox (justify-content + align-items).
    
    Full viewport height.
  
  Styling
  
    White card with rounded corners and drop shadow.
    
    Green theme (#4CAF50) for headings and buttons.
    
    Hover effects for buttons.
  
  Typography
  
    Simple, readable Arial font.
  
  Minor issue
  
    .container :hover selector applies hover styling to all child elements instead of the container — likely not intended.

JavaScript (script.js)

  Event Listener
  
    Waits for Convert button click.
  
  Validation
  
    Ensures the input is a valid number.
  
  Logic
  
    If Celsius: converts to Fahrenheit & Kelvin.
    
    If Fahrenheit: converts to Celsius & Kelvin.
    
    If Kelvin: converts to Celsius & Fahrenheit.
  
  Display
  
    Shows results with two decimal places.

3. Key Strengths

      Simple UI: Easy for anyone to understand and use.
      
      Instant Conversion: One click shows both alternative units.
      
      Responsive Layout: Works well on desktop and mobile.
      
      Clean Code: Separated HTML, CSS, and JavaScript.
