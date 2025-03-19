# Unit 2 Summative: Object Oriented Programming

###### ICS4U - Mr. Brash 🐿️

## Table of Contents
[README](README.md)<br>
Part 1 - The Code<br>
[Part 2 - The Class Diagrams](PART2.md)<br>
[The Rubrics](RUBRIC.md)

# Part 1 - The Code

The following classes need to be defined. The order in which you define them is up to you.<br>**You have a _lot_ of code to write. Use your time wisely and consider doing some outside of class time.**

**Level 3 to 4**
- [`CartesianPlane`](#the-cartesian-plane-cartesianplane)
- [`Point`](#point)
- [`LineSegment`](#line-segment)
- [`Polygon`](#polygon)

**Level 4 and up**
- [`Triangle`](#triangle)
- [`Rectangle`](#rectangle)


### The Cartesian Plane (`CartesianPlane`)

This plane is like a chalkboard. Plotted [`Point`](#point), [`LineSegment`](#line-segment), or [`Polygon`](#polygon) objects are _not remembered_, they are simply plotted. If the plotted item changes, the plane has no knowledge of this.<br>Empty locations will contain `·` and plotted locations will contain `⬤` (copy and paste:  ·  ⬤).

Create the `CartesianPlane` Class defined below.

**Notes:**<br>
- The `CartesianPlane` will be the FIRST quadrant only, with the origin (0, 0) in the bottom-left corner. (x and y will be zero or positive values)
- The number of columns and rows in the plane _includes_ the origin. Therefore, a CartesianPlane(10, 12) has a maximum column of 9 and row 11.

_Properties_:
- `#cols`: _protected_ Number representing the size of the horizontal axis.
- `#rows`: _protected_ Number representing the size of the vertical axis.
- `#grid`: _private_ 2D Array containing a single character graphic for each location on the plane.

_Methods_:
- `constructor(cols, rows)` which sets the appropriate values and constructs the `#grid`.
- `plot(item)`: Plot all _possible_ vertices of the given object. 
    - `item` could be of `.type` "Point", "Line", or "Polygon".
    - Plot `Points` (endpoints or vertices) with `⬤`. Return `true` if all vertices were successfully plotted and `false` otherwise.
    - This function will need to be written _after_ most of the other classes are defined.
- `erase(item)`: The exact opposite of the `plot()` function.
    - `item` could be of `.type` "Point", "Line", or "Polygon".
    - Reset the `Point` (endpoints or vertices) of the given `item` to `·`.
    - There is no return value.
    - This function will need to be written _after_ most of the other classes are defined.
- `resize(delta_cols, delta_rows)`: Increase or decrease `#cols` and `#rows` by `delta_cols` and `delta_rows`, respectively. Adjust the `#grid` as necessary to remove or add the new dimensions. If removing too many columns or rows, do not make the change and return `false`. _The grid **must** remain at least 1x1_. Return `true` if successful.
- `clear()`: Reset _all_ locations in the `#grid` to `·`.
- `print()`: Print the plane to the console as nice as possible. **Note:** the origin, (0,0), should be in the **bottom-left**. The client recommends using `\t` between dots.<br><br>**Hint:** for (0,0) to be in the bottom-left, pay close attention to your `#grid` property.

### Point
Perhaps the easiest of all the objects, a `Point` is made of a pair of coordinate locations (x, y). Create the `Point` Class defined below.<br>
**Note:** No error-checking required, assume input is correct. Negative coordinates are fine - they just won't plot.

_Properties_:
- `name`: A _public_ String representing the name of the point (typically "A","B",etc...). This may or may not be used in further code.
- `#type:`: A _protected_ String that defaults to "Point", it is [immutable](https://www.google.com/search?q=define+immutable) and is _not_ part of the `constructor`.
- `#x`: A _protected_ Number representing the x-coordinate.
- `#y`: A _protected_ Number representing the y-coordinate.

_Methods_:
- `constructor(x, y)` which sets the appropriate values.
- `transform(delta_x, delta_y)`: This function will modify the `#x` and `#y` based on the `delta_x` and `delta_y`, respectively. For example, `transform(4, -3)` will _add_ 4 to `#x` and _subtract_ 3 from `#y`. 

### Line Segment
The class `LineSegment` will contain exactly two instances of `Point`. It will contain some very important methods (see below).

_Properties_:
- `#type:`: A _protected_ String that defaults to "Line", it is [immutable](https://www.google.com/search?q=define+immutable) and is _not_ part of the `constructor`.
- `#endpoint1`: A _protected_ `Point` representing one of the two endpoints for this line segment.
- `#endpoint2`: A _protected_ `Point` representing the _other_ endpoint for this line segment.

_Methods_:
- `constructor(endpoint1, endpoint2)` which sets the appropriate values. **Note:** _assume_ the endpoints a different.
- `length`: a _getter_ which returns the _length_ of the line segment, rounded to two decimals.
- `midpoint`: a _getter_ which returns a `Point` that is the midpoint of this segment (round coordinates to two decimals, if necessary).
- `slope`: a _getter_ which returns the _slope_ of the line segment, rounded to two decimals. For vertical lines, return `undefined`.
- `y-intercept`: a _getter_ which returns the hypothetical y-intercept, if this were a complete line. Round to two demicals.
- `equation`: a _getter_ which returns a _String_ in the format "y = mx + b" where `m` and `b` are the respective values for this line (not letters). 
    - The equation should take into account +ve and -ve values of `b`. For example "y = 3x - 5" vs. "y = 3x + -5". That part could be tricky.
    - _Vertical_ lines should have the equation "x = #" where # is the x-value of the endpoints.
- `transform(delta_x, delta_y)`: transform the endpoints of the line segment appropriately.

### Polygon

#### This is the big one.  🤯

**Important**: The `Polygon` class will constructed using several vertices (instances of `Point`). The _order_ or _direction_ from one `Point` to the next is dependent on the order submitted. For example, a 5-sided figure would be A-B-C-D-E, regardless of the actual coordinates on a plane. It is up to the _programmer_ using this class to enter `Points` in the correct order to form a [closed figure](https://www.google.com/search?q=define+closed+figure). **It is assumed that all shapes with 3 or more vertices are a _closed figure_** (the first and last vertices will be connected by an edge).

The `Polygon` class is defined as follows:

_Properties_:
- `#type:`: a _protected_ String that defaults to "Polygon", it is [immutable](https://www.google.com/search?q=define+immutable) it is set in the `constructor` but is not a parameter of the constructor.
- `#vertices`: a _protected_ array of three or more `Point` objects.
- `#edges`: a _protected_ array of three or more `LineSegment` objects.

_Methods_:
- `constructor(vertices)`: 
    - The `vertices` parameter is an array of _3 or more_ `Point` objects. Note - the first and last should _not_ be equal, this constructor will close the figure.
    - To clarify, a `Polygon` of 5 vertices will have 5 edges A-B, B-C, C-D, D-E, E-A.
    - This constructor will generate the `#edges` array.
    - The `#type` property is set to "Polygon".
- `size`: a _getter_ that provides the number of vertices or edges.
- `lengths`: a _getter_ that returns an _array_ of the lengths of each edge.
- `slopes`: a _getter_ that returns an _array_ of the slopes of each edge.
- `y-intercepts`: a _getter_ that returns an _array_ of the y-intercepts of each edge.
- `equations`: a _getter_ that returns an _array_ of the equations of each edge.
- `perimeter`: a _getter_ that provides the perimeter of the polygon.
- `area`: a _getter_ that returns 0.
- `name`: a _getter_ that returns a _String_ depending on the number of vertices:
    |Vertices|Return String|
    |---|---|
    |3|"Triangle"|
    |4|"Quadrilateral"|
    |5|"Pentagon"|
    |6|"Hexagon"|
    |7|"Heptagon"|
    |8|"Octogon"|
    |9+|"Polygon"|
- `transform(delta_x, delta_y)`: transform all vertices of the polygon appropriately.

### Triangle

You might want to start with [Rectangle](#rectangle), below.

This class _extends_ the `Polygon` class. It should contain (and expose) _all_ the methods of `Polygon` with the following updates:
- `classify()`: return "Scalene", "Isosceles", or "Equilateral".
- `angles_deg`: a _getter_ that returns the interior angles, rounded to two decimals, in _degrees_.
- `angles_rad`: a _getter_ that returns the interior angles, rounded to two decimals, in _radians_.
- `is_right()`: return `true` if the triangle is a right-triangle and `false` otherwise.
- `hypotenuse`: a _getter_. If the triangle `is_right()`, return the `LineSegment` that is the hypotenuse (the actual object). Otherwise return `undefined`.
- `area`: return the area of the triangle, rounded to two decimals. (This will require some work)

### Rectangle
This class _extends_ the `Polygon` class. It should contain (and expose) _all_ the methods of `Polygon` with the following updates:
- `classify()`: return "Square" or "Rectangle".
- `center()`: return geometrical center of the rectangle as a `Point`. Round the coordinates to two decimals, if necessary.
- `area`: return the area of the rectangle.

### Looking for bonus marks or you finish early?

Add to the `LineSegment` class:
- `perp_bisector()` that returns a _String_ representing the equation of the perpendicular bisector of this line segment.
- `shortest_distance_to(p)` which returns the shortest distance (as a length) from this line segment to the given `Point` `p`.

Add the following to the `Triangle` class:
- `circumcenter()`, `orthocenter()`, and `centroid()` which all return a `Point`, rounded to two decimals, if necessary. Research the definition of each.



<br><br>
---
### <div style="text-align:center"><-- Previous [README](README.md) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Next [The Class Diagrams](PART2.md) --></div>
