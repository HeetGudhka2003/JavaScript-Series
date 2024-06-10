// Select the HTML element with the id 'insert'

const insert = document.getElementById('insert');

// Add an event listener to the window object for the 'keydown' event

window.addEventListener('keydown', (e) => {

    // Set the innerHTML of the 'insert' element to a template string containing HTML

    insert.innerHTML = `

        <div class='color'>

            <table>

                <!-- Table header row -->
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th> 
                    <th>Code</th>
                </tr>
                
                <!-- Table row displaying the pressed key information -->

                <tr>
                    <!-- Display the pressed key, with a special case for the space key -->

                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                    <!-- Display the keyCode of the pressed key -->

                    <td>${e.keyCode}</td>
                    
                    <!-- Display the code of the pressed key -->

                    <td>${e.code}</td>
                </tr>
            </table>
        </div>
    `;
});