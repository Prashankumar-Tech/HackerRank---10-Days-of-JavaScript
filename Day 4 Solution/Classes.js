/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(heights) 
    {
        var perimeter = 0;
        for (var index in heights)
            {
                perimeter += heights[index];
            }
        
        this.perimeter = perimeter;
    }    
     perimeter() 
    {
        return this.perimeter;
    }    
}