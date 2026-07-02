/*
    # Write a function that calculate and prints the area of a rectangle gives its length and width.
        - Input length and width
        - Area of a rectengle = lenght * Width
        - Print the area on the console
*/  

const calculateRectangleArea = ( length, width ) => {

    if ( length == null && width  == null ) {
        console.log("Please provide both length and width");
        return;
    }

    if ( length <= 0 || width <= 0 ) {
        console.log("Value must be gretter then 0");
        return;
    }
    
    const rectangleArea = length * width;
    console.log(rectangleArea);

    return rectangleArea;

}

calculateRectangleArea(2, 75);
