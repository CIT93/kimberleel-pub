# Decoding the Code


1. After completing the form inputs and hitting submit, the event listener on the form button is triggered.
2. Using DevTools with a break point at renderTBL, the first step takes us to the function renderTBL.
3. Within that function, a variable table is assigned to the renderTBLHeading function.
4. When that function is called, we move into the renderTblHeading function
5. Within that function, we tell JS to look for the TBL element and find the first 'table'.  Assign the variable 'table' to is so it can be used later.
6. the line if(!table) says if we look for the table and it's empty then proceed. In this case the table=null so it's saying it's empty.
7. Since it's empty we move to the first condition, which tells JS to create a table element and assign it to the table variable.
8. within that table create the table header row 'thead' and store it in the variable thead
9. Create the 'tr' element and assign it to the to the variable tr.
10. assign headingTxtArr to an array which contains the headings for our table.
11. Next we tell it to iterate over each item in the array and do something.
12. A table header is created and assigned to the variable th
13. We use the textContent property to assign the first item in the array as text in our heading.
14. we take that heading text (th) and append it to the table row.
15. and with the forEeach method, these steps of taking the item in the array and assigning it the text content of the col heading, get looped over each item in the array once.
16. Once we have the col heading (th) appended to the row (tr) we append the row to the thead.
17. That thead, which containts the table row headings, gets appended to the the table.
18. The table gets appended to the TBL variable which is assigned to element with ID='tab-data'.
19.  Once the method is complete, the table and all its content is 'returned' so that the content can be used somewhere else. And that concludes the renderTBLHeading function.
20. Next in the renderTBL function, we assign a variable to tbody or the body of the table.
21. Just like with the headings, we look to see if table body exists, and if not, we create the tbody element and append it to the table.
22. The forEach method calls a function using obj as a parameter.   This holds that value that will be passed to the function when it's called.
23. The table row is created, then the table data item is assigned to the textContent. The value of the textContent is the value of fname from the form input field that was assigned in the event listenter.
24.  This continues through the array of objects, which holds the input values.
25. The next steps are creating table data item that holds the two buttons, which is appended to the row which is appended to the table body.
26. The table headings and the first table row of input values is rendered to the DOM and the form reset so that it can happen all over again with the next inputs. But the next time if the conditions is false, it skips over recreating the headings and previous rows.


### update to my readme file

In my explanation I omitted everything that happens when the event listener is called.  The following adds what happens in the beginning

1. When the event listener is called after submit, a the function runs
2. we prevent default behaviour of the browser refreshing and resetting the form.
3. we assign variables to the input values that are referenced in the global variable Form.
4. The start function is called which takes in arguments.
5. Inside the start function the functions to calculate household and house size points are called.
6. We then add objects, using the start function arguments and the variables assigned to the previous functions, to an empty array we assigned as a global variable.


### Feedback

- This was very helpful.  I started at the wrong point but was still an extremely useful exercise.
- I tutor adults preparing for the Salesforce administrators exam and one of my recommendations is to teach what you've learned.  To a cat, your kid, a houseplant; just teach it. This reminded me of that advice.
- The difference between understanding something and explaining it in words is like forcing you to prove your comprehension.
- When you have to explain it step by step, your brain is required to organize the information in a logical manner that not only reinforces your understanding, but ensures you don't forget it.
- I had to go back and look for the term 'method'!  When I listen to your explanations, I think 'yeah, that's a method. of course'. But when I tried to explain it in words I couldn't remember the name!  I bet I don't forget it now.

### Edit Button function

- If we want the the Edit button to remove the row and populate the input fields, I imagine you could use the index splice again to remove the row.
- To populate the input values back to the input fields, you would need to assign and pass those input values to the Form.name.

## Local Storage

Local storage is a browser's way of storing data in key:value pairs. This data can be stored and retrieved if the browser is closed or refreshed. The data is stored using JSON and stringify and retrieved using parse.