const addNoteBtn = document.getElementById('addNoteBtn');
const noteInput = document.getElementById('noteInput');
const savedNotesContainer = document.getElementById('savedNotesContainer');
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');

// Function to add a new note
function addNote() {
    const noteText = noteInput.value.trim();

    if (noteText) {
        createNoteElement(noteText);
        noteInput.value = ''; 
    } else {
        alert('Please write a note before adding!');
    }
}

// Add note on button click
addNoteBtn.addEventListener('click', addNote);

// Add note on Enter key press
noteInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        addNote();
    }
});

// Function to create a note element
function createNoteElement(noteText) {
    const savedNoteDiv = document.createElement('div');
    savedNoteDiv.className = 'note';
    savedNoteDiv.textContent = noteText; 

    // Create a delete button for the saved note
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'delete-button';
    deleteBtn.onclick = function(event) {
        event.stopPropagation(); 
        savedNotesContainer.removeChild(savedNoteDiv);
    };

    // Make the note editable on click
    savedNoteDiv.onclick = function() {
        noteInput.value = noteText; 
        savedNotesContainer.removeChild(savedNoteDiv); 
    };

    savedNoteDiv.appendChild(deleteBtn);
    savedNotesContainer.appendChild(savedNoteDiv);
}

const closeArrow = document.getElementById('closeArrow');

// Hamburger menu toggle
hamburger.addEventListener('click', function() {
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; 
        closeArrow.style.display = 'none'; 
    } else {
        sidebar.style.left = '0px'; 
        closeArrow.style.display = 'block'; 
    }
});

// Close sidebar when clicking the close arrow
closeArrow.addEventListener('click', function() {
    sidebar.style.left = '-250px';
    closeArrow.style.display = 'none'; 
});
